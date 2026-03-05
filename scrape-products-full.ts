import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const BASE_URL = 'https://www.dibimilano.com';
const PUBLIC_DIR = './public';
const IMAGES_DIR = path.join(PUBLIC_DIR, 'product-images');
const DATA_FILE = path.join(PUBLIC_DIR, 'products-detailed.json');

interface ProductDetail {
  name: string;
  line: string;
  description: string;
  ingredients: string;
  directions: string;
  images: string[];
  image_urls: string[];
  url: string;
}

// Load existing data
function loadExistingData(): ProductDetail[] {
  if (fs.existsSync(DATA_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } catch { return []; }
  }
  return [];
}

// Save data
function saveData(products: ProductDetail[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

function ensureDirs() {
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function fetchWithTimeout(url: string, timeoutMs = 60000): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

async function downloadImage(imageUrl: string, productSlug: string, index: number): Promise<string | null> {
  try {
    const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}${imageUrl}`;
    
    const urlObj = new URL(fullUrl);
    const pathname = urlObj.pathname;
    let ext = path.extname(pathname).replace('.webp', '.jpg');
    if (!ext || ext === '.') ext = '.jpg';
    
    const filename = `${productSlug}_${index}${ext}`;
    const localPath = path.join('product-images', filename);
    const fullPath = path.join(PUBLIC_DIR, localPath);
    
    if (fs.existsSync(fullPath)) {
      return localPath;
    }
    
    const response = await fetch(fullUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    
    if (!response.ok) return null;
    
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(fullPath, buffer);
    console.log(`    Downloaded: ${filename} (${(buffer.length/1024).toFixed(1)}KB)`);
    
    return localPath;
  } catch {
    return null;
  }
}

function isProductPage(url: string): boolean {
  const match = url.match(/\/en-en\/face\/products\/(.+)/);
  if (!match) return false;
  const segments = match[1].split('/').filter(s => s);
  return segments.length >= 2;
}

function extractName(html: string): string {
  const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
  if (titleMatch) return titleMatch[1].replace(/\s*\|\s*DIBI Milano$/i, '').trim();
  
  const heroMatch = html.match(/<h1[^>]*class="[^"]*m-product-hero__title[^"]*"[^>]*>(.*?)<\/h1>/is);
  if (heroMatch) return heroMatch[1].replace(/<[^>]+>/g, '').trim();
  
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/is);
  if (h1Match) return h1Match[1].replace(/<[^>]+>/g, '').trim();
  
  return '';
}

async function scrapeProductDetail(productUrl: string, productSlug: string): Promise<ProductDetail | null> {
  try {
    const html = await fetchWithTimeout(productUrl);
    
    if (!html.includes('m-product-hero') && !html.includes('product-description')) {
      return null;
    }
    
    const name = extractName(html);
    
    const descMatch = html.match(/class="[^"]*m-product-hero__subtitle[^"]*"[^>]*>(.*?)<\/[^>]+>/is);
    const description = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    
    let line = '';
    const urlPathMatch = productUrl.match(/\/en-en\/face\/products\/([^\/]+)/);
    if (urlPathMatch) {
      line = urlPathMatch[1].replace(/-/g, ' ').toUpperCase();
    }
    
    let ingredients = '';
    const ingMatch = html.match(/Ingredients[\s\S]*?<div[^>]*class="[^"]*m-product-description__item-text[^"]*-full-text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (ingMatch) {
      ingredients = ingMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    let directions = '';
    const dirMatch = html.match(/Directions for use[\s\S]*?<div[^>]*class="[^"]*m-product-description__item-text[^"]*-full-text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (dirMatch) {
      directions = dirMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    const imageUrls: string[] = [];
    const imgMatches = [...html.matchAll(/data-src="(\/sites\/default\/files\/styles\/large\/public\/[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/gi)];
    for (const match of imgMatches) {
      if (!imageUrls.includes(match[1])) imageUrls.push(match[1]);
    }
    
    const zoomMatches = [...html.matchAll(/data-js-zoom-srcset="(\/sites\/default\/files\/styles\/large\/public\/[^"]+)"/gi)];
    for (const match of zoomMatches) {
      const cleanUrl = match[1].split(' ')[0];
      if (!imageUrls.includes(cleanUrl)) imageUrls.push(cleanUrl);
    }
    
    const limitedUrls = imageUrls.slice(0, 5);
    
    const localImages: string[] = [];
    for (let i = 0; i < limitedUrls.length; i++) {
      const localPath = await downloadImage(limitedUrls[i], productSlug, i + 1);
      if (localPath) localImages.push(localPath);
    }
    
    return {
      name: name || productSlug.replace(/-/g, ' ').toUpperCase(),
      line,
      description,
      ingredients,
      directions,
      images: localImages,
      image_urls: limitedUrls,
      url: productUrl
    };
    
  } catch (e: any) {
    console.log(`    Error: ${e.message}`);
    return null;
  }
}

async function getProductUrls(): Promise<{url: string, slug: string}[]> {
  console.log('Fetching product listing...');
  const html = await fetchWithTimeout(`${BASE_URL}/en-en/face/products`);
  
  const products: {url: string, slug: string}[] = [];
  const linkMatches = [...html.matchAll(/href="(\/en-en\/face\/products\/[^"]+)"/gi)];
  
  for (const match of linkMatches) {
    const urlPath = match[1];
    const fullUrl = `${BASE_URL}${urlPath}`;
    if (products.find(p => p.url === fullUrl)) continue;
    if (!isProductPage(urlPath)) continue;
    
    const slug = urlPath.split('/').pop() || 'product';
    products.push({ url: fullUrl, slug });
  }
  
  return products;
}

async function main() {
  ensureDirs();
  
  const existingData = loadExistingData();
  const existingUrls = new Set(existingData.map(p => p.url));
  
  console.log(`Loaded ${existingData.length} existing products`);
  
  const productList = await getProductUrls();
  console.log(`Found ${productList.length} product pages total`);
  
  // Filter out already scraped
  const toScrape = productList.filter(p => !existingUrls.has(p.url));
  console.log(`${toScrape.length} new products to scrape\n`);
  
  const products = [...existingData];
  
  for (let i = 0; i < toScrape.length; i++) {
    const { url, slug } = toScrape[i];
    console.log(`[${i + 1}/${toScrape.length}] ${slug}`);
    
    const detail = await scrapeProductDetail(url, slug);
    if (detail) {
      products.push(detail);
      saveData(products); // Save after each product
      console.log(`  ✓ ${detail.name.substring(0, 50)}`);
      console.log(`    Ingredients: ${detail.ingredients ? '✓' : '✗'} | Directions: ${detail.directions ? '✓' : '✗'} | Images: ${detail.images.length}`);
    } else {
      console.log(`  ✗ Skipped (not a product page or error)`);
    }
    
    await new Promise(r => setTimeout(r, 1000));
  }
  
  console.log(`\n✅ Done! Total products: ${products.length}`);
  console.log(`📁 Images: ${IMAGES_DIR}`);
  console.log(`📄 Data: ${DATA_FILE}`);
}

main().catch(console.error);
