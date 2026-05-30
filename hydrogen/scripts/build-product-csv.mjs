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
  'ACID INFUSION': {
    tagline: 'Targeted acid renewal that refines texture and reveals brighter skin.',
    keyBenefits: [
      'Gently exfoliates for smoother surface texture',
      'Boosts cell turnover for renewed radiance',
      'Refines the look of pores',
      'Preps skin for better serum absorption',
    ],
    bestFor: 'Dull or Textured Skin',
  },
  'ANTI AGING WITH GOLD THE GOLD': {
    tagline: 'Luxurious gold-infused ritual designed to recapture youthful radiance.',
    keyBenefits: [
      'Visibly redensifies and firms mature skin',
      'Restores a luminous, gold-tinted glow',
      'Smooths the look of deep wrinkles',
      'Indulgent, multi-sensory ritual',
    ],
    bestFor: 'Mature Skin',
  },
  'BIOSTIMULATING SYSTEM LAB': {
    tagline: 'High-performance biostimulating actives engineered to revitalize cellular vitality.',
    keyBenefits: [
      "Reactivates skin's natural renewal processes",
      'Restores tone and density',
      'Visibly improves overall skin quality',
      'Recommended after professional treatments',
    ],
    bestFor: 'Tired or Devitalized Skin',
  },
  'COLLAGE SYSTEM LAB': {
    tagline: 'Collagen-targeting system lab formulated for visibly firmer, plumper skin.',
    keyBenefits: [
      'Supports collagen-rich skin structure',
      'Plumps the look of fine lines',
      'Improves skin firmness over time',
      'Layers seamlessly under daily routines',
    ],
    bestFor: 'Mature or Loss-of-Firmness Skin',
  },
  'COSMETICS LIFTING EFFECT LIFT CREATOR': {
    tagline: 'Sculpting lifting ritual that visibly redefines facial contours.',
    keyBenefits: [
      'Visibly redefines facial contours',
      'Restores firmness and bounce',
      'Smooths expression lines',
      'Leaves skin toned and luminous',
    ],
    bestFor: 'Loss-of-Firmness Skin',
  },
  'COSMETICS SEBUM BALANCING PURE EQUALIZER': {
    tagline: 'Daily balance for skin prone to imperfections and excess shine.',
    keyBenefits: [
      'Visibly reduces excess shine',
      'Helps prevent blemishes',
      'Refines the look of pores',
      'Maintains skin comfort',
    ],
    bestFor: 'Oily or Combination Skin',
  },
  'CREAM AND SERUM ANTI AGING AGE METHOD': {
    tagline: 'Advanced formulation targeting visible signs of aging with clinically-proven active ingredients.',
    keyBenefits: [
      'Deeply hydrates and plumps skin for a youthful appearance',
      'Reduces the appearance of fine lines and wrinkles',
      'Strengthens skin barrier for improved resilience',
      'Enhances natural radiance and even skin tone',
    ],
    bestFor: 'All Skin Types',
  },
  'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION': {
    tagline: 'Deep moisture replenishment for skin that feels comfortable and looks vibrant.',
    keyBenefits: [
      'Floods skin with long-lasting hydration',
      'Restores supple, dewy texture',
      'Calms tightness and dehydration lines',
      'Layers easily under SPF and makeup',
    ],
    bestFor: 'Dehydrated Skin',
  },
  'CREAMS AND SERUM ANTI WRINKLE WHITE SCIENCE': {
    tagline: 'Brightening science that evens tone and reduces the look of wrinkles.',
    keyBenefits: [
      'Evens skin tone and reduces dark spots',
      'Smooths the look of fine wrinkles',
      'Boosts overall radiance',
      'Improves clarity over time',
    ],
    bestFor: 'Dull or Uneven Skin Tone',
  },
  'CREME AND COSMETICS DEFENCE SOLUTION': {
    tagline: 'Daily defence for skin that needs comfort and protection.',
    keyBenefits: [
      'Calms visible redness',
      'Strengthens the skin barrier',
      'Reduces feelings of tightness',
      'Fragrance-conscious comfort',
    ],
    bestFor: 'Sensitive or Reactive Skin',
  },
  'FACE ANTI OXIDANT MAGNIFIC MASK': {
    tagline: 'Antioxidant ritual mask that revives stressed, tired-looking skin.',
    keyBenefits: [
      'Revives dull, fatigued complexion',
      'Helps neutralize environmental stress',
      'Leaves skin smooth and luminous',
      'Spa-grade weekly ritual',
    ],
    bestFor: 'Stressed or Dull Skin',
  },
  'FACE PERFECTION': {
    tagline: 'Daily essentials engineered for visibly perfected skin.',
    keyBenefits: [
      'Refines and smooths skin texture',
      'Supports a fresh, perfected look',
      'Layers easily across your routine',
      'Suitable for daily use',
    ],
    bestFor: 'All Skin Types',
  },
  'FACE REGENERATING PRODUCTS PROCELLULAR 365': {
    tagline: 'Year-round cellular regeneration for visibly renewed skin.',
    keyBenefits: [
      'Supports continuous skin renewal',
      'Improves visible signs of fatigue',
      "Restores skin's natural vitality",
      'Designed for everyday use',
    ],
    bestFor: 'Devitalized Skin',
  },
  'FILLER CODE COSMETIC EFFECT FILLERS': {
    tagline: 'Topical filler ritual that visibly plumps and smooths wrinkles.',
    keyBenefits: [
      'Visibly plumps deep wrinkles',
      'Smooths expression lines',
      'Restores skin density',
      'Cosmetic alternative to professional fillers',
    ],
    bestFor: 'Mature Skin',
  },
  'NUOVAPELLE': {
    tagline: 'Iconic DIBI Milano line for visibly renewed, radiant skin.',
    keyBenefits: [
      "Restores skin's natural radiance",
      'Improves overall skin quality',
      'Daily ritual essentials',
      'Layers across the full Nuovapelle system',
    ],
    bestFor: 'All Skin Types',
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

function titleCase(s) {
  return cleanText(s)
    .toLowerCase()
    .replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
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
  const lineKey = (p.line || '').toUpperCase().replace(/\s+/g, ' ').trim();
  if (!(lineKey in LINE_DEFAULTS)) {
    console.warn(`No line template matched for: ${JSON.stringify(p.line)}`);
  }
  const defaults = getDefaults(p.line);
  const benefitsCell = JSON.stringify(defaults.keyBenefits);

  // Main product row
  rows.push(
    [
      h, // Handle
      cleanText(p.name), // Title
      buildBodyHtml(p), // Body (HTML)
      'DIBI Milano', // Vendor
      titleCase(p.line), // Type (drives PDP eyebrow)
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
