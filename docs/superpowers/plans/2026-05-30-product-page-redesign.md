# Product Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reshape the Hydrogen PDP to match the original Wix mockup — category eyebrow, title, price, italic tagline, key benefits card, full-width black Add to Cart with share icon, and a "Best for" footer. Strip vendor eyebrow, accordions, and WhatsApp CTA.

**Architecture:**
- Three new `custom` Shopify metafields (`tagline`, `key_benefits`, `best_for`) + the standard `productType` field carry the layout's structured content.
- A per-line lookup table in `build-product-csv.mjs` seeds those fields for all 63 products on import.
- The PDP route fetches them through an extended `PRODUCT_FRAGMENT` and renders the new right-column layout. `ProductForm`/`AddToCartButton` are reused; only styling changes.

**Tech Stack:** Hydrogen 2026.4.2 (React Router 7), Tailwind 4, TypeScript, GraphQL codegen, Node 22 scripts, Shopify CSV import.

**Testing posture:** No unit test suite exists in `hydrogen/`. Verification is build/typecheck + visual diff against image 1 in a running dev server. Each task ends with the relevant verification step before commit.

**Working directory note:** All `npm` commands run inside `hydrogen/`. CSV regen script runs inside `hydrogen/` as well (`node scripts/build-product-csv.mjs`). Git commits use the repo root (parent of `hydrogen/`).

---

## Task 1: Add `LINE_DEFAULTS` table and metafield columns to CSV builder

**Files:**
- Modify: `hydrogen/scripts/build-product-csv.mjs`

- [ ] **Step 1: Add `LINE_DEFAULTS` constant near the top of the file**

Insert after the `IMAGE_BASE` constant (around line 16):

```js
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
```

- [ ] **Step 2: Replace the `Type` column source and add three metafield headers**

Replace the `headers` array (currently lines 79–102) with:

```js
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
```

- [ ] **Step 3: Use defaults inside the per-product row build**

Inside the `for (const p of products)` loop, immediately after the `firstImg` line, add:

```js
const defaults = getDefaults(p.line);
// Shopify CSV list metafield: JSON-array form
const benefitsCell = JSON.stringify(defaults.keyBenefits);
```

Then change the row push so `Type` and the three new trailing cells use the defaults. Replace the existing `rows.push([...])` block (currently lines 124–151) with:

```js
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
```

The image-row helper at the bottom of the loop already pads with blanks of `headers.length` — no change needed there.

- [ ] **Step 4: Regenerate the CSV and sanity-check the output**

From `hydrogen/`:

```bash
node scripts/build-product-csv.mjs
```

Expected last line: `Wrote 63 products / <N> rows to ...products.csv`.

Then inspect one product row to confirm the new columns are populated:

```bash
head -n 2 products.csv | tail -n 1
```

Expected: the last three CSV fields contain a tagline string, a quoted JSON-array of benefits (e.g. `"[""Deeply hydrates...""]"`), and a best-for label.

- [ ] **Step 5: Commit**

From the repo root:

```bash
git add hydrogen/scripts/build-product-csv.mjs hydrogen/products.csv
git commit -m "feat(csv): seed per-line tagline, benefits, best_for metafields"
```

---

## Task 2: Define metafields in Shopify Admin and re-import CSV (manual step, but plan it)

**Files:** none (Shopify Admin UI)

This is a human/admin step but the implementation can't be verified end-to-end without it. Record it in the plan so it isn't skipped.

- [ ] **Step 1: Define three metafields in Shopify Admin**

Settings → Custom data → Products → Add definition. Create three definitions:

| Name          | Namespace and key   | Type                          |
|---------------|---------------------|-------------------------------|
| Tagline       | `custom.tagline`    | Single line text              |
| Key Benefits  | `custom.key_benefits` | List of single line text    |
| Best For      | `custom.best_for`   | Single line text              |

For each: leave validation rules empty, and check "Storefront access" so they're exposed to the Storefront API.

- [ ] **Step 2: Re-import `hydrogen/products.csv`**

Shopify Admin → Products → Import. Use "Overwrite existing products with matching handles". After import, open one product (e.g. `the-cream`) and confirm:
- Type field shows the per-line productType (e.g. "Cream and Serum Anti Aging Age Method").
- The three metafields appear in the Metafields panel with seeded values.

- [ ] **Step 3: No commit (no file changes)**

---

## Task 3: Extend `PRODUCT_FRAGMENT` to fetch productType and the three metafields

**Files:**
- Modify: `hydrogen/app/routes/products.$handle.tsx` (the GraphQL fragment block near the bottom)

- [ ] **Step 1: Add the fields to `PRODUCT_FRAGMENT`**

Inside `PRODUCT_FRAGMENT` (currently starting around line 341), add four new fields between `description` and `encodedVariantExistence`:

```graphql
description
productType
tagline: metafield(namespace: "custom", key: "tagline") { value }
benefits: metafield(namespace: "custom", key: "key_benefits") { value }
bestFor: metafield(namespace: "custom", key: "best_for") { value }
encodedVariantExistence
```

- [ ] **Step 2: Run codegen and typecheck**

From `hydrogen/`:

```bash
npm run codegen
npm run typecheck
```

Expected: both pass. The generated `storefrontapi.generated.d.ts` now includes `productType: string`, `tagline: {value: string} | null`, etc. on the `ProductFragment`.

- [ ] **Step 3: Commit**

From the repo root:

```bash
git add hydrogen/app/routes/products.$handle.tsx hydrogen/storefrontapi.generated.d.ts
git commit -m "feat(pdp): fetch productType and tagline/benefits/best_for metafields"
```

(If codegen writes to a different generated path, `git status` will reveal it; stage that file instead.)

---

## Task 4: Create `ShareButton` component with `navigator.share` and clipboard fallback

**Files:**
- Create: `hydrogen/app/components/ShareButton.tsx`

- [ ] **Step 1: Write the component**

```tsx
import {useState} from 'react';
import {Share2} from 'lucide-react';

export function ShareButton({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window === 'undefined' ? '' : window.location.href;
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({title, url});
        return;
      } catch {
        // user cancelled or share unavailable; fall through to copy
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // give up silently
      }
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share this product"
        className={
          className ??
          'w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors'
        }
      >
        <Share2 className="w-4 h-4" />
      </button>
      {copied && (
        <span className="absolute -top-8 right-0 text-[11px] tracking-wider uppercase bg-gray-900 text-white px-2 py-1">
          Link copied
        </span>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Typecheck**

From `hydrogen/`:

```bash
npm run typecheck
```

Expected: pass.

- [ ] **Step 3: Commit**

From the repo root:

```bash
git add hydrogen/app/components/ShareButton.tsx
git commit -m "feat(ui): add ShareButton with web share + clipboard fallback"
```

---

## Task 5: Extend `AddToCartButton` to accept a `className`

**Files:**
- Modify: `hydrogen/app/components/AddToCartButton.tsx`

- [ ] **Step 1: Add the prop and pass it to the `<button>`**

Replace the file with:

```tsx
import {type FetcherWithComponents} from 'react-router';
import {CartForm, type OptimisticCartLineInput} from '@shopify/hydrogen';

export function AddToCartButton({
  analytics,
  children,
  className,
  disabled,
  lines,
  onClick,
}: {
  analytics?: unknown;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  lines: Array<OptimisticCartLineInput>;
  onClick?: () => void;
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher: FetcherWithComponents<any>) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            className={className}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}
```

- [ ] **Step 2: Update `ProductForm` to pass the new full-width black style**

In `hydrogen/app/components/ProductForm.tsx`, replace the `<AddToCartButton ... >` JSX (currently lines 104–122) with:

```tsx
<AddToCartButton
  className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black disabled:opacity-50 transition-colors"
  disabled={!selectedVariant || !selectedVariant.availableForSale}
  onClick={() => {
    open('cart');
  }}
  lines={
    selectedVariant
      ? [
          {
            merchandiseId: selectedVariant.id,
            quantity: 1,
            selectedVariant,
          },
        ]
      : []
  }
>
  {selectedVariant?.availableForSale ? 'Add to Cart' : 'Sold Out'}
</AddToCartButton>
```

- [ ] **Step 3: Typecheck**

From `hydrogen/`:

```bash
npm run typecheck
```

Expected: pass.

- [ ] **Step 4: Commit**

From the repo root:

```bash
git add hydrogen/app/components/AddToCartButton.tsx hydrogen/app/components/ProductForm.tsx
git commit -m "feat(pdp): style Add to Cart as full-width black button"
```

---

## Task 6: Rewrite the right column of the PDP to match the mockup

**Files:**
- Modify: `hydrogen/app/routes/products.$handle.tsx` (component body only — fragment and query stay as edited in Task 3)

- [ ] **Step 1: Replace the imports block**

Replace lines 1–17 with:

```tsx
import {useState} from 'react';
import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/products.$handle';
import {
  getSelectedProductOptions,
  Analytics,
  Image,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {motion, AnimatePresence} from 'motion/react';
import {ArrowLeft, ArrowRight, Info, Sparkles, Star} from 'lucide-react';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductForm} from '~/components/ProductForm';
import {ShareButton} from '~/components/ShareButton';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
```

(Removed: `ChevronDown`, `ChevronUp`, `MessageCircle`. Added: `Sparkles`, `Star`, `ShareButton`. `Info` was already imported.)

- [ ] **Step 2: Remove the WhatsApp constant + helper**

Delete the `WHATSAPP_NUMBER` constant (line 19) and the `getWhatsAppHref` helper (lines 52–57). The remaining `meta`, `loader`, and `loadCriticalData` functions stay as-is.

- [ ] **Step 3: Add a parse helper above the `Product` component**

Insert this helper just above `export default function Product()`:

```tsx
function parseBenefits(raw: string | null | undefined): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === 'string') : [];
  } catch {
    return [];
  }
}
```

- [ ] **Step 4: Remove the `expandedSection`/`toggleSection` state**

Inside the `Product` component, delete:

```tsx
const [expandedSection, setExpandedSection] = useState<string | null>('description');
```

and:

```tsx
const toggleSection = (section: string) =>
  setExpandedSection(expandedSection === section ? null : section);
```

The `selectedImage` state stays.

- [ ] **Step 5: Derive the new metafield values just after `displayImage`**

Add directly after the `displayImage` line in the component body:

```tsx
const tagline = product.tagline?.value ?? '';
const benefits = parseBenefits(product.benefits?.value);
const bestFor = product.bestFor?.value ?? '';
const eyebrow = product.productType ?? '';
```

- [ ] **Step 6: Replace the right-column JSX**

Inside the `<div className="lg:sticky lg:top-32 ...">` block, replace **everything between the opening `<div ...>` and its closing `</div>`** (currently lines 164–209) with:

```tsx
{eyebrow && (
  <div>
    <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#B8A99A] uppercase">
      {eyebrow}
    </span>
  </div>
)}

<h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide leading-tight">
  {product.title}
</h1>

<div className="text-2xl font-mono text-gray-900">
  <ProductPrice
    price={selectedVariant?.price}
    compareAtPrice={selectedVariant?.compareAtPrice}
  />
</div>

{tagline && (
  <p className="text-lg font-serif italic text-gray-600 leading-relaxed">
    {tagline}
  </p>
)}

{benefits.length > 0 && (
  <div className="bg-white border border-gray-200 p-6 md:p-7 space-y-4">
    <div className="flex items-center space-x-2">
      <Sparkles className="w-4 h-4 text-[#B8A99A]" />
      <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-900">
        Key Benefits
      </h2>
    </div>
    <ul className="space-y-3">
      {benefits.map((b, i) => (
        <li key={i} className="flex items-start space-x-3 text-sm text-gray-700">
          <Star className="w-4 h-4 mt-0.5 text-[#B8A99A] flex-shrink-0" />
          <span className="leading-relaxed">{b}</span>
        </li>
      ))}
    </ul>
  </div>
)}

<div className="flex items-stretch space-x-3">
  <div className="flex-1">
    <ProductForm
      productOptions={productOptions}
      selectedVariant={selectedVariant}
    />
  </div>
  <ShareButton title={product.title} />
</div>

{bestFor && (
  <div className="flex items-center space-x-2 text-xs text-gray-500">
    <Info className="w-4 h-4" />
    <span>Best for: {bestFor}</span>
  </div>
)}
```

- [ ] **Step 7: Delete the entire below-fold `<section>` block**

Remove the `<section className="border-t border-gray-200 bg-white">…</section>` block (currently lines 214–283) in its entirety. The `<Analytics.ProductView ... />` at the bottom stays.

- [ ] **Step 8: Typecheck and build**

From `hydrogen/`:

```bash
npm run typecheck
npm run build
```

Expected: both pass.

- [ ] **Step 9: Visual check in dev server**

From `hydrogen/`:

```bash
npm run dev
```

Open `http://localhost:3000/products/the-cream` (or any seeded product). Confirm against image 1:

- Vendor eyebrow gone; category eyebrow ("CREAM AND SERUM ANTI AGING AGE METHOD" or equivalent) present.
- Title large and light-weight.
- Price visible directly below title.
- Italic gray tagline below the price.
- White "Key Benefits" card with sparkle icon and 4 starred items.
- Full-width black `Add to Cart` button.
- Square share icon button to its right.
- `Best for: …` line with info icon below the action row.
- No accordions, no "Ask About This Product" button, no "Confirm suitability" footer.

Stop the dev server with Ctrl+C.

- [ ] **Step 10: Commit**

From the repo root:

```bash
git add hydrogen/app/routes/products.$handle.tsx
git commit -m "feat(pdp): redesign right column to match original mockup"
```

---

## Task 7: Final verification

**Files:** none — verification only.

- [ ] **Step 1: Clean build**

From `hydrogen/`:

```bash
npm run typecheck
npm run build
```

Expected: both pass with no errors or new warnings.

- [ ] **Step 2: Git status check**

From the repo root:

```bash
git status
```

Expected: clean working tree (every previous task committed).

- [ ] **Step 3: Confirm summary in chat**

Report to the user:
- Files touched (CSV builder, PDP route, ProductForm, AddToCartButton, ShareButton).
- Reminder that Shopify Admin metafield definitions + CSV re-import (Task 2) must be performed by them before the new sections render with content.
- Suggested next visual review: dev server vs image 1.
