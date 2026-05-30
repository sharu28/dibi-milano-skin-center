# Product Page Redesign — Match Original Wix Mockup

**Date:** 2026-05-30
**Status:** Draft — awaiting review
**Scope:** `hydrogen/app/routes/products.$handle.tsx` and supporting data layer

## Goal

Make the live Hydrogen storefront product detail page (PDP) visually match
the original Wix design (image 1 in the brainstorming session). The current
implementation (image 2) shows vendor as eyebrow, raw ingredient dump as
description, and accordions/WhatsApp CTA below the fold — none of which appear
in the target.

## Target layout (right column, top-to-bottom)

1. **Category eyebrow** — uppercase, letter-spaced, brand accent color
   (e.g. `CREAM AND SERUM ANTI AGING AGE METHOD`).
2. **Product title** — large, light weight, tracked, dark.
3. **Price** — kept from current implementation.
4. **Italic serif tagline** — one sentence, muted gray.
5. **Key Benefits card** — white card, soft border, heading with sparkle icon,
   4 starred bullet items.
6. **Add to Cart** — full-width solid black button.
7. **Share** — small icon button to the right of the cart button.
8. **Best for footer** — info icon + `Best for: <skin type>`.

Below the fold: nothing. No accordions, no WhatsApp CTA, no vendor eyebrow.

The left column (image carousel + thumbnails) stays as today.

## Data model

Three new Shopify product **metafields** in the `custom` namespace:

| Key            | Type                       | Example                                       |
|----------------|----------------------------|-----------------------------------------------|
| `tagline`      | `single_line_text_field`   | `Advanced formulation targeting visible signs of aging...` |
| `key_benefits` | `list.single_line_text_field` | `["Deeply hydrates...", "Reduces fine lines...", ...]` |
| `best_for`     | `single_line_text_field`   | `All Skin Types`                              |

The existing Shopify-standard **`productType`** field carries the category
eyebrow text. No new metafield needed for it.

### Seeding strategy

Per-line template seed. Each of the 15 skincare lines gets a default record
that applies to every product in that line, written by
`hydrogen/scripts/build-product-csv.mjs`:

```js
const LINE_DEFAULTS = {
  NUOVAPELLE: {
    productType: 'AGE METHOD',
    tagline: 'Advanced formulation targeting visible signs of aging with clinically-proven active ingredients.',
    keyBenefits: [
      'Deeply hydrates and plumps skin for a youthful appearance',
      'Reduces the appearance of fine lines and wrinkles',
      'Strengthens skin barrier for improved resilience',
      'Enhances natural radiance and even skin tone',
    ],
    bestFor: 'All Skin Types',
  },
  // ... 14 other lines
};
```

After seed import, the merchant can refine copy per product in Shopify Admin.

### CSV format additions

`build-product-csv.mjs` extends the header row with:

- `Type` (Shopify-standard productType column)
- `Metafield: custom.tagline [single_line_text_field]`
- `Metafield: custom.key_benefits [list.single_line_text_field]`
- `Metafield: custom.best_for [single_line_text_field]`

List metafields use JSON-array string form per Shopify CSV spec.

## GraphQL changes

Extend `PRODUCT_FRAGMENT` in `products.$handle.tsx`:

```graphql
fragment Product on Product {
  ...existing fields
  productType
  tagline:    metafield(namespace: "custom", key: "tagline")        { value }
  benefits:   metafield(namespace: "custom", key: "key_benefits")   { value }
  bestFor:    metafield(namespace: "custom", key: "best_for")       { value }
}
```

`benefits.value` is a JSON-encoded string array — parse at render time
(`JSON.parse(product.benefits.value)` inside try/catch, fallback to `[]`).

## Component changes

### `hydrogen/app/routes/products.$handle.tsx`

**Remove:**
- Vendor eyebrow block (lines 164–170 of current file)
- Italic-description block (lines 183–185)
- WhatsApp "Ask About This Product" block (lines 192–201)
- Bottom info span "Confirm suitability..." (lines 203–208)
- Both accordion sections (Details + Professional Guidance, lines 214–283)
- `expandedSection` state + `toggleSection` helper (no longer needed)
- `getWhatsAppHref` helper + `WHATSAPP_NUMBER` constant
- `Sparkles`, `Info`, `MessageCircle`, `ChevronDown`, `ChevronUp` imports
  (re-add `Sparkles` + `Info` for new sections, drop the rest)

**Add (right column, replacing the removed blocks):**
- Category eyebrow rendering `product.productType`
- Italic tagline rendering parsed `tagline` metafield
- Key Benefits card component (inline, ~25 LOC) with sparkle heading
  and `★` bullets — only rendered if benefits array non-empty
- Action row: full-width black `<button>` "Add to Cart" + share icon button
  (Share button uses `navigator.share` with clipboard fallback;
  Add to Cart wires through existing `ProductForm` / cart mutation)
- "Best for" footer with `Info` icon, only rendered if `bestFor` metafield present

**No heart icon** (decision).

### `hydrogen/scripts/build-product-csv.mjs`

- Add `LINE_DEFAULTS` constant (15 entries).
- Add helper `buildMetafields(line)` returning the three CSV cells.
- Add the three metafield columns + `Type` column to the header and each row.
- Quote/escape JSON-array values per Shopify CSV rules (double-quote with
  doubled-up inner quotes).

## Error handling

- Metafields missing → corresponding UI section silently omitted.
  No fallback text. No console warnings.
- `key_benefits` JSON parse failure → treat as empty list.
- `productType` empty string → eyebrow omitted.
- `navigator.share` not available → share button copies
  `window.location.href` to clipboard and shows a 2s "Link copied" toast
  (Tailwind class-based, no library).

## Out of scope

- Adding new wishlist/account functionality.
- Restructuring `ProductForm` or `ProductPrice` components.
- Changes to PLP (`products._index.tsx`) or home page.
- Editing nav (`EGIFT CARDS / MORE` vs `CAREERS`) — separate concern.
- Per-product copy refinement after seed (merchant task in Shopify Admin).

## Risks

- **Metafield definitions must exist in Shopify Admin before CSV import**
  populates them. Spec implementation includes a written admin-side step
  for the merchant: define the three metafields in
  Settings → Custom data → Products before re-importing the CSV.
- The 15-line `LINE_DEFAULTS` table is generic copy. Stakeholders may want
  per-product tailoring; this seeds a baseline, not a finished catalog.
- The "Add to Cart" button must integrate with the existing cart context —
  if `ProductForm` already renders its own button, we collapse the two
  rather than producing duplicates.

## Verification

After implementation:

1. `npm run build` in `hydrogen/` passes.
2. `npm run typecheck` in `hydrogen/` passes.
3. Dev server `npm run dev` shows redesigned PDP at `/products/the-cream`.
4. Visual diff against image 1: eyebrow, title, price, tagline, benefits card,
   black cart button, share icon, best-for footer all present in same order.
5. Re-imported CSV populates `productType` + three metafields visible in
   Shopify Admin product edit screen.
