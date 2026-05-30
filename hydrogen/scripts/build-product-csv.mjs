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

// Per-line marketing template seed. Each product inherits its line's
// defaults. Merchant edits in Shopify Admin override after import.
const GENERIC_DEFAULT = {
  productType: 'Skincare',
  tagline:
    'Professional formula crafted by DIBI Milano for visible, lasting results.',
  keyBenefits: [
    'Targets visible signs of aging for a renewed appearance',
    'Hydrates and supports skin comfort',
    'Strengthens skin tone and texture over time',
    'Suitable for daily use under sunscreen or makeup',
  ],
  bestFor: 'All Skin Types',
};

const LINE_DEFAULTS = {
  NUOVAPELLE: {
    productType: 'Cream and Serum Anti Aging Age Method',
    tagline:
      'Advanced formulation targeting visible signs of aging with clinically-proven active ingredients.',
    keyBenefits: [
      'Deeply hydrates and plumps skin for a youthful appearance',
      'Reduces the appearance of fine lines and wrinkles',
      'Strengthens skin barrier for improved resilience',
      'Enhances natural radiance and even skin tone',
    ],
    bestFor: 'All Skin Types',
  },
  LIFTOSOME: {
    productType: 'Lifting and Firming Treatment',
    tagline:
      'Sculpting ritual that visibly redefines facial contours and restores elasticity.',
    keyBenefits: [
      'Visibly redefines facial contours',
      'Restores firmness and bounce',
      'Smooths the appearance of expression lines',
      'Leaves skin toned and luminous',
    ],
    bestFor: 'Mature Skin',
  },
  HYDRA: {
    productType: 'Intensive Hydration',
    tagline: 'Deep moisture replenishment for skin that feels comfortable and looks vibrant.',
    keyBenefits: [
      'Floods skin with long-lasting hydration',
      'Restores supple, dewy texture',
      'Calms tightness and dehydration lines',
      'Layers easily under SPF and makeup',
    ],
    bestFor: 'Dehydrated Skin',
  },
  LUMINOSITY: {
    productType: 'Brightening and Radiance',
    tagline: 'Targeted radiance ritual that evens tone and revives dull complexions.',
    keyBenefits: [
      'Evens skin tone and reduces dark spots',
      'Boosts natural radiance',
      'Refines surface texture',
      'Improves clarity over time',
    ],
    bestFor: 'Dull or Uneven Skin Tone',
  },
  PURIFYING: {
    productType: 'Purifying and Balancing',
    tagline: 'Daily clarity for skin prone to imperfections and excess shine.',
    keyBenefits: [
      'Visibly reduces excess shine',
      'Helps prevent blemishes',
      'Refines the look of pores',
      'Maintains skin comfort',
    ],
    bestFor: 'Oily or Combination Skin',
  },
  SENSITIVE: {
    productType: 'Soothing and Comfort',
    tagline: 'Gentle daily comfort for skin that reacts easily.',
    keyBenefits: [
      'Calms visible redness',
      'Strengthens the skin barrier',
      'Reduces feelings of tightness',
      'Fragrance-conscious formula',
    ],
    bestFor: 'Sensitive or Reactive Skin',
  },
  CLEANSING: {
    productType: 'Cleansing Ritual',
    tagline: 'A complete cleansing step that respects the skin barrier.',
    keyBenefits: [
      'Removes makeup and impurities thoroughly',
      'Preserves skin moisture balance',
      'Leaves skin soft and ready for serums',
      'Suitable for daily morning and evening use',
    ],
    bestFor: 'All Skin Types',
  },
  EYE: {
    productType: 'Eye Contour Care',
    tagline: 'Precision care for the delicate eye contour area.',
    keyBenefits: [
      'Smooths the look of fine lines',
      'Reduces puffiness and shadowing',
      'Hydrates without heaviness',
      'Brightens the under-eye area',
    ],
    bestFor: 'All Skin Types',
  },
  BODY: {
    productType: 'Body Ritual',
    tagline: 'Spa-grade body care from the DIBI Milano professional line.',
    keyBenefits: [
      'Nourishes and softens the skin',
      'Supports body contour and tone',
      'Sensorial textures with a long-lasting finish',
      'Crafted for daily ritual use',
    ],
    bestFor: 'All Skin Types',
  },
  SUN: {
    productType: 'Sun Protection',
    tagline: 'Broad-spectrum protection paired with advanced skin care.',
    keyBenefits: [
      'Broad-spectrum UV defense',
      'Lightweight, non-greasy finish',
      'Layers under makeup',
      'Helps prevent photoaging',
    ],
    bestFor: 'All Skin Types',
  },
  MEN: {
    productType: 'Men’s Grooming',
    tagline: 'Targeted grooming care developed for men’s skin needs.',
    keyBenefits: [
      'Refreshes and tones tired skin',
      'Smooths post-shave irritation',
      'Layers easily into a quick routine',
      'Crafted for daily use',
    ],
    bestFor: 'Men’s Skin',
  },
};

function getDefaults(line) {
  const key = (line || '').toUpperCase().replace(/\s+/g, ' ').trim();
  return LINE_DEFAULTS[key] ?? GENERIC_DEFAULT;
}

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
  'Metafield: custom.tagline [single_line_text_field]',
  'Metafield: custom.key_benefits [list.single_line_text_field]',
  'Metafield: custom.best_for [single_line_text_field]',
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
  const defaults = getDefaults(p.line);
  const benefitsCell = JSON.stringify(defaults.keyBenefits);

  // Main product row
  rows.push(
    [
      h, // Handle
      cleanText(p.name), // Title
      buildBodyHtml(p), // Body (HTML)
      'DIBI Milano', // Vendor
      defaults.productType, // Type (drives PDP eyebrow)
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
      defaults.tagline, // Metafield: custom.tagline
      benefitsCell, // Metafield: custom.key_benefits (JSON array)
      defaults.bestFor, // Metafield: custom.best_for
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
