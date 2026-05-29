// Generate a Shopify-importable products.csv from products-detailed.json.
// Status: draft. Placeholder price: 1.00. No images (uploaded separately).
//
// Run: node scripts/build-product-csv.mjs

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const INPUT = path.join(ROOT, 'public', 'products-detailed.json');
const OUTPUT = path.join(__dirname, '..', 'products.csv');
const IMAGE_BASE =
  'https://raw.githubusercontent.com/sharu28/dibi-milano-skin-center/main/public/product-images';

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100);
}

function cleanText(s) {
  if (!s) return '';
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildBodyHtml(p) {
  const blocks = [];
  if (p.description) {
    blocks.push(`<p>${cleanText(p.description)}</p>`);
  } else {
    blocks.push(
      `<p>${cleanText(p.name)} from the ${cleanText(p.line)} collection, available through DIBI Milano Skin Center Colombo.</p>`,
    );
  }
  if (p.directions) {
    blocks.push(
      `<h3>Directions for Use</h3><p>${cleanText(p.directions)}</p>`,
    );
  }
  if (p.ingredients) {
    blocks.push(
      `<h3>Ingredients</h3><p style="font-family: monospace; font-size: 0.875rem;">${cleanText(p.ingredients)}</p>`,
    );
  }
  return blocks.join('');
}

function csvField(v) {
  const s = v == null ? '' : String(v);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function buildTags(p) {
  const tags = new Set();
  tags.add(cleanText(p.line));
  const ing = (p.ingredients || '').toUpperCase();
  if (ing.includes('HYALURONIC') || ing.includes('SODIUM HYALURONATE')) tags.add('Hydrating');
  if (ing.includes('RETINOL') || ing.includes('PEPTIDE') || ing.includes('COLLAGEN')) tags.add('Anti-Aging');
  if (ing.includes('VITAMIN C') || ing.includes('ASCORB') || ing.includes('FERULIC')) tags.add('Brightening');
  if (ing.includes('NIACINAMIDE')) tags.add('Niacinamide');
  if (ing.includes('CERAMIDE')) tags.add('Barrier Repair');
  return [...tags].join(', ');
}

const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
const products = Array.isArray(data) ? data : Object.values(data);

const headers = [
  'Handle',
  'Title',
  'Body (HTML)',
  'Vendor',
  'Type',
  'Tags',
  'Published',
  'Option1 Name',
  'Option1 Value',
  'Variant SKU',
  'Variant Grams',
  'Variant Inventory Tracker',
  'Variant Inventory Qty',
  'Variant Inventory Policy',
  'Variant Fulfillment Service',
  'Variant Price',
  'Variant Requires Shipping',
  'Variant Taxable',
  'Image Src',
  'Image Position',
  'Image Alt Text',
  'Status',
];

const rows = [headers.join(',')];
const seenHandles = new Set();

function imageUrl(rel) {
  const filename = path.basename(rel.replace(/\\/g, '/'));
  return `${IMAGE_BASE}/${encodeURIComponent(filename)}`;
}

for (const p of products) {
  let handle = slugify(p.name);
  if (!handle) continue;
  let h = handle;
  let i = 2;
  while (seenHandles.has(h)) h = `${handle}-${i++}`;
  seenHandles.add(h);

  const imgs = (p.images || []).map(imageUrl);
  const firstImg = imgs[0] || '';

  // Main product row
  rows.push(
    [
      h, // Handle
      cleanText(p.name), // Title
      buildBodyHtml(p), // Body (HTML)
      'DIBI Milano', // Vendor
      cleanText(p.line), // Type
      buildTags(p), // Tags
      'TRUE', // Published
      'Title', // Option1 Name
      'Default Title', // Option1 Value
      h.toUpperCase().slice(0, 32), // SKU
      '50', // Grams
      'shopify', // Inventory Tracker
      '0', // Inventory Qty
      'deny', // Inventory Policy
      'manual', // Fulfillment Service
      '1.00', // Price
      'TRUE', // Requires Shipping
      'TRUE', // Taxable
      firstImg, // Image Src
      firstImg ? '1' : '', // Image Position
      firstImg ? cleanText(p.name) : '', // Image Alt
      'active', // Status
    ]
      .map(csvField)
      .join(','),
  );

  // Additional image rows (only Handle + image columns populated)
  for (let idx = 1; idx < imgs.length; idx++) {
    const blanks = Array(headers.length).fill('');
    blanks[0] = h; // Handle
    blanks[headers.indexOf('Image Src')] = imgs[idx];
    blanks[headers.indexOf('Image Position')] = String(idx + 1);
    blanks[headers.indexOf('Image Alt Text')] = cleanText(p.name);
    rows.push(blanks.map(csvField).join(','));
  }
}

fs.writeFileSync(OUTPUT, rows.join('\n'), 'utf8');
console.log(
  `Wrote ${seenHandles.size} products / ${rows.length - 1} rows to ${OUTPUT}`,
);
