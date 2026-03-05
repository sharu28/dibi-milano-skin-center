import * as dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

async function scrapeDibiProducts() {
    const url = 'https://www.dibimilano.com/en-en/face/products';
    
    console.log("Fetching " + url + "...");
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const html = await response.text();
        console.log("Got HTML, length:", html.length);
        
        const products: any[] = [];
        
        // Parse product cards - looking for the structure in dibimilano.com
        // The products seem to be in article elements with class containing "product"
        const productCardRegex = /<article[^>]*class="[^"]*product[^"]*"[^>]*>(.*?)<\/article>/gis;
        const cards = [...html.matchAll(productCardRegex)];
        
        console.log(`Found ${cards.length} product cards`);
        
        for (const cardMatch of cards.slice(0, 50)) {
            const card = cardMatch[1] || cardMatch[0];
            
            // Extract product name from h2 or title
            const nameMatch = card.match(/<h2[^>]*>(.*?)<\/h2>/is) || 
                             card.match(/class="[^"]*title[^"]*"[^>]*>(.*?)<\/[^>]+>/i);
            const name = nameMatch ? nameMatch[1].replace(/<[^>]+>/g, '').trim() : '';
            
            // Extract image URL
            const imgMatch = card.match(/src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i) ||
                            card.match(/data-src="([^"]+)"/i);
            let imageUrl = imgMatch ? imgMatch[1] : '';
            
            // Make relative URLs absolute
            if (imageUrl && imageUrl.startsWith('/')) {
                imageUrl = 'https://www.dibimilano.com' + imageUrl;
            }
            
            // Extract description/subtitle
            const descMatch = card.match(/class="[^"]*subtitle[^"]*"[^>]*>(.*?)<\/[^>]+>/i) ||
                             card.match(/class="[^"]*description[^"]*"[^>]*>(.*?)<\/[^>]+>/i);
            const description = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';
            
            // Try to extract line/series from the name or URL
            // Dibi products usually have lines like "Age Method", "Acid Infusion", etc.
            let line = '';
            const linePatterns = [
                /Age Method/i, /Acid Infusion/i, /Biostimulating/i, 
                /Collage/i, /Defence/i, /Hydra/i, /Perfect/i, /Pure/i, /Reviva/i, /White/i
            ];
            for (const pattern of linePatterns) {
                const match = name.match(pattern);
                if (match) {
                    line = match[0];
                    break;
                }
            }
            
            if (name) {
                products.push({
                    name,
                    line,
                    description,
                    image_url: imageUrl
                });
            }
        }
        
        // Also try JSON-LD
        const jsonLdMatches = html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs);
        for (const match of jsonLdMatches) {
            try {
                const data = JSON.parse(match[1]);
                if (data['@type'] === 'ItemList' && data.itemListElement) {
                    for (const item of data.itemListElement) {
                        if (item.item && !products.find(p => p.name === item.item.name)) {
                            products.push({
                                name: item.item.name || '',
                                line: item.item.brand?.name || '',
                                description: item.item.description || '',
                                image_url: typeof item.item.image === 'string' ? item.item.image : (item.item.image?.[0] || '')
                            });
                        }
                    }
                }
            } catch (e) {}
        }
        
        // Deduplicate by name
        const uniqueProducts = products.filter((p, i, arr) => 
            p.name && arr.findIndex(t => t.name === p.name) === i
        );
        
        console.log(`Extracted ${uniqueProducts.length} unique products`);
        
        if (uniqueProducts.length === 0) {
            fs.writeFileSync('./debug.html', html.substring(0, 50000));
            console.log("No products found. Saved sample HTML to debug.html");
            return;
        }
        
        // Ensure public dir exists
        if (!fs.existsSync('./public')) {
            fs.mkdirSync('./public', { recursive: true });
        }
        
        fs.writeFileSync('./public/products.json', JSON.stringify(uniqueProducts, null, 2));
        console.log(`Success: ${uniqueProducts.length} products saved to ./public/products.json`);
        
        // Preview first few
        console.log("\nPreview:");
        uniqueProducts.slice(0, 3).forEach((p, i) => {
            console.log(`  ${i+1}. ${p.name} (${p.line || 'no line'})`);
        });
        
    } catch (error: any) {
        if (error.name === 'AbortError') {
            console.error('Request timed out after 60 seconds');
        } else {
            console.error('Error:', error.message);
        }
    }
}

scrapeDibiProducts();
