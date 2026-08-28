# Hydrogen → Liquid Theme Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the headless Hydrogen storefront with a custom, editor-configurable Shopify Liquid theme that matches the current design, built on the same store (`us0bdu-g1.myshopify.com`).

**Architecture:** Scaffold from Dawn for native commerce templates (product/collection/cart/search). Strip Dawn's marketing sections; build bespoke Liquid sections matching the existing Hydrogen React components. Structured Services data lives in **metaobjects**; homepage/training/careers/gallery use **visual section-blocks**. The Hydrogen React source (`hydrogen/app/`) is the **visual reference spec** — match it, don't re-derive.

**Tech Stack:** Shopify Liquid, Shopify CLI 3.x, Theme Check, Dawn base theme, Admin GraphQL API (metaobjects), CSS custom properties, vanilla JS IntersectionObserver. No build step.

**Reference spec:** `docs/superpowers/specs/2026-06-24-hydrogen-to-liquid-theme-migration-design.md`

---

## Conventions for this plan

There is no Liquid unit-test runner. "Verify" in each task means the theme-appropriate equivalent, run from `theme/`:

- **Lint:** `shopify theme check` → expect **0 errors** (warnings noted, not blocking unless stated).
- **Render:** with `shopify theme dev --store us0bdu-g1` running, load the stated path in the preview and visually compare against the Hydrogen reference route/component named in the task.
- **Reference:** every UI task cites the exact Hydrogen file to match (`hydrogen/app/...`). Open it side-by-side.

Commit after every task. The theme lives in a new top-level `theme/` directory; `hydrogen/` is left untouched as reference until cutover.

---

## File Structure

```
theme/
  layout/theme.liquid              # global shell (header/footer include, <head>, tokens)
  templates/index.json             # homepage section composition
  templates/product.json           # native product (restyled)
  templates/collection.json        # native collection (restyled)
  templates/cart.json              # native cart
  templates/search.json            # native search
  templates/page.training.json     # training page sections
  templates/page.careers.json      # careers page sections
  templates/page.gallery.json      # gallery page section
  templates/metaobject.service.json# service detail composition
  templates/404.json
  sections/header.liquid           # <- Navbar.tsx
  sections/footer.liquid           # <- Footer.tsx
  sections/hero-carousel.liquid    # <- _index hero
  sections/services-grid.liquid    # <- _index services section
  sections/testimonials.liquid     # <- _index testimonials
  sections/instagram-feed.liquid   # <- _index IG section
  sections/cta-banner.liquid       # <- _index CTA
  sections/training-courses.liquid # <- training.tsx
  sections/careers-listing.liquid  # <- careers.tsx
  sections/gallery-grid.liquid     # <- gallery.tsx + GalleryGrid.tsx
  sections/service-detail.liquid   # <- service.$slug.tsx (reads metaobject)
  snippets/booking-url.liquid      # <- contact.ts WhatsApp helper
  snippets/price-menu.liquid       # shared service price-row markup
  snippets/reveal-init.liquid      # IntersectionObserver bootstrap
  assets/dibi.css                  # design tokens + custom section styles
  assets/reveal.js                 # scroll-reveal animation
  config/settings_schema.json      # global theme settings (brand, contact)
  config/settings_data.json        # default setting values
  locales/en.default.json
scripts/
  seed-services.mjs                # one-time metaobject seeding from services.ts
```

---

## Phase 0 — Scaffold & Dev Environment

### Task 0.1: Scaffold the theme from Dawn

**Files:**
- Create: `theme/` (entire Dawn tree via CLI)

- [ ] **Step 1: Verify Shopify CLI is available**

Run: `shopify version`
Expected: prints a 3.x version. If missing: `npm i -g @shopify/cli@latest`.

- [ ] **Step 2: Scaffold Dawn into `theme/`**

Run from repo root:
```bash
shopify theme init theme --clone-url https://github.com/Shopify/dawn.git
```
Expected: `theme/` populated with Dawn (layout, templates, sections, snippets, assets, config, locales).

- [ ] **Step 3: Verify Theme Check baseline passes**

Run: `cd theme && shopify theme check`
Expected: 0 errors (Dawn ships clean). Note any warnings.

- [ ] **Step 4: Commit**

```bash
git add theme
git commit -m "chore(theme): scaffold Liquid theme from Dawn base"
```

### Task 0.2: Connect dev server to the live store

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server against the store**

Run: `cd theme && shopify theme dev --store us0bdu-g1`
Expected: prints a local preview URL (e.g. `http://127.0.0.1:9292`) and a theme-editor URL. Browser auth to the store completes on first run.

- [ ] **Step 2: Confirm catalog renders**

Load the preview URL `/collections/all`.
Expected: existing products from the store appear (proves Storefront data is live with zero migration).

- [ ] **Step 3: Stop the server** (Ctrl-C). No commit (no file changes).

---

## Phase 1 — Global Chrome (tokens, layout, header, footer, settings)

### Task 1.1: Define design tokens and base stylesheet

**Files:**
- Create: `theme/assets/dibi.css`
- Reference: `hydrogen/app/styles/app.css`, `hydrogen/app/routes/_index.tsx` (palette `#F9F9F7`, dark text, accent)

- [ ] **Step 1: Extract the palette/typography from the reference**

Read `hydrogen/app/styles/app.css` and the inline Tailwind classes in `_index.tsx`. Record: background `#F9F9F7`, body text near-black, any accent/serif heading font.

- [ ] **Step 2: Write `theme/assets/dibi.css` with tokens**

```css
:root {
  --dibi-bg: #F9F9F7;
  --dibi-ink: #1A1A1A;
  --dibi-muted: #6B6B6B;
  --dibi-accent: #1A1A1A;       /* refine to match reference */
  --dibi-line: rgba(0,0,0,0.08);
  --dibi-maxw: 1200px;
  --dibi-radius: 0px;
  --dibi-font-heading: var(--font-heading-family, serif);
  --dibi-font-body: var(--font-body-family, sans-serif);
}
body { background: var(--dibi-bg); color: var(--dibi-ink); }
.dibi-container { max-width: var(--dibi-maxw); margin-inline: auto; padding-inline: 1rem; }
.dibi-reveal { opacity: 0; transform: translateY(20px); transition: opacity .8s ease, transform .8s ease; }
.dibi-reveal.is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .dibi-reveal { opacity: 1; transform: none; transition: none; } }
```

- [ ] **Step 3: Verify Theme Check passes**

Run: `cd theme && shopify theme check`
Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add theme/assets/dibi.css
git commit -m "feat(theme): add DIBI design tokens and base stylesheet"
```

### Task 1.2: Add global theme settings (brand + contact)

**Files:**
- Modify: `theme/config/settings_schema.json`
- Modify: `theme/config/settings_data.json`
- Reference: `hydrogen/app/data/contact.ts`

- [ ] **Step 1: Add a DIBI settings group to `settings_schema.json`**

Append this object to the top-level array in `theme/config/settings_schema.json`:
```json
{
  "name": "DIBI — Brand & Contact",
  "settings": [
    { "type": "text", "id": "dibi_phone", "label": "Phone (display)", "default": "0112 674 546" },
    { "type": "text", "id": "dibi_phone_href", "label": "Phone (tel link)", "default": "tel:+94112674546" },
    { "type": "text", "id": "dibi_whatsapp_number", "label": "WhatsApp number (digits only)", "default": "94776333505" },
    { "type": "text", "id": "dibi_email", "label": "Email", "default": "hello@dibimilano.com" },
    { "type": "text", "id": "dibi_booking_message", "label": "Booking prefilled message", "default": "Hi DIBI Milano, I'd like to book an appointment." },
    { "type": "text", "id": "dibi_training_message", "label": "Training prefilled message", "default": "Hi DIBI Milano Academy, I'd like to enquire about course enrolment." }
  ]
}
```

- [ ] **Step 2: Mirror defaults in `settings_data.json`**

In `theme/config/settings_data.json` under `current`, add the same `dibi_*` keys with the default values above (so they persist before any editor save).

- [ ] **Step 3: Verify**

Run: `cd theme && shopify theme check`
Expected: 0 errors. With `theme dev` running, open the theme editor → Theme settings → "DIBI — Brand & Contact" shows the fields.

- [ ] **Step 4: Commit**

```bash
git add theme/config/settings_schema.json theme/config/settings_data.json
git commit -m "feat(theme): add DIBI brand and contact theme settings"
```

### Task 1.3: WhatsApp booking-URL snippet

**Files:**
- Create: `theme/snippets/booking-url.liquid`
- Reference: `hydrogen/app/data/contact.ts` (`whatsappUrl`, `bookingWhatsAppUrl`)

- [ ] **Step 1: Write the snippet**

```liquid
{%- comment -%}
  Renders a wa.me booking deep link.
  Usage: {% render 'booking-url', message: settings.dibi_booking_message %}
  Defaults to the global booking message when no message is passed.
{%- endcomment -%}
{%- assign msg = message | default: settings.dibi_booking_message -%}
https://wa.me/{{ settings.dibi_whatsapp_number }}?text={{ msg | url_encode }}
```

- [ ] **Step 2: Verify rendering**

Temporarily add `{% render 'booking-url' %}` to `templates/index.json`'s rendered output via a test section, or check in dev once header (Task 1.4) consumes it. For now run `cd theme && shopify theme check` → 0 errors.

- [ ] **Step 3: Commit**

```bash
git add theme/snippets/booking-url.liquid
git commit -m "feat(theme): add WhatsApp booking-url snippet"
```

### Task 1.4: Header section (Navbar)

**Files:**
- Create: `theme/sections/header.liquid` (replace Dawn's header include in layout)
- Modify: `theme/layout/theme.liquid` (ensure `dibi.css` is loaded; section group or direct render)
- Reference: `hydrogen/app/components/Navbar.tsx` (links: HOME, PRODUCTS, services dropdown, TRAINING, GALLERY, CAREERS, BOOK ONLINE → WhatsApp; solid white bg, no transparency per recent commits)

- [ ] **Step 1: Load `dibi.css` in `theme.liquid`**

In `theme/layout/theme.liquid` `<head>`, after Dawn's stylesheet link, add:
```liquid
{{ 'dibi.css' | asset_url | stylesheet_tag }}
```

- [ ] **Step 2: Write `header.liquid` matching Navbar.tsx**

Implement: logo (text or `settings.logo`), nav links to `/`, `/collections/all` (PRODUCTS), service links, `/pages/training`, `/pages/gallery`, `/pages/careers`, and a "BOOK ONLINE" link whose href is the booking snippet. Use a `{% schema %}` exposing: menu (`type: link_list`), logo image, and a checkbox `sticky`. Booking link:
```liquid
<a class="dibi-nav__cta" href="{% render 'booking-url' %}" target="_blank" rel="noopener">BOOK ONLINE</a>
```
Match the solid white background and plain-text link styling from the recent Navbar commits (no transparency, Book Online is a plain link).

- [ ] **Step 3: Wire it into the layout**

Replace Dawn's header section group reference so `header.liquid` renders at the top of `<body>` (edit `theme/layout/theme.liquid` or the relevant `sections/header-group.json`).

- [ ] **Step 4: Verify**

Run `cd theme && shopify theme check` → 0 errors. In dev preview `/`, header matches Navbar.tsx; BOOK ONLINE opens WhatsApp with the prefilled message.

- [ ] **Step 5: Commit**

```bash
git add theme/sections/header.liquid theme/layout/theme.liquid
git commit -m "feat(theme): build header section matching Hydrogen Navbar"
```

### Task 1.5: Footer section

**Files:**
- Create/replace: `theme/sections/footer.liquid`
- Reference: `hydrogen/app/components/Footer.tsx` (quick links incl. BOOK ONLINE → WhatsApp; contact details from `contact.ts`)

- [ ] **Step 1: Write `footer.liquid` matching Footer.tsx**

Columns: brand blurb, Quick Links (Home, Products, services, Training, Gallery, Careers, Book Online → `{% render 'booking-url' %}`), Contact (phone `settings.dibi_phone` linked via `settings.dibi_phone_href`, email `settings.dibi_email`, WhatsApp). Add `{% schema %}` with editable blocks for columns/links and a `text` setting for the brand blurb.

- [ ] **Step 2: Wire into layout** (replace Dawn footer group reference).

- [ ] **Step 3: Verify** — `shopify theme check` 0 errors; dev preview footer matches Footer.tsx; phone/email/WhatsApp links correct.

- [ ] **Step 4: Commit**

```bash
git add theme/sections/footer.liquid theme/layout/theme.liquid
git commit -m "feat(theme): build footer section matching Hydrogen Footer"
```

---

## Phase 2 — Commerce Templates (restyle native)

### Task 2.1: Restyle product template

**Files:**
- Modify: `theme/sections/main-product.liquid` (Dawn), `theme/assets/dibi.css`
- Reference: `hydrogen/app/routes/products.$handle.tsx`, `hydrogen/app/components/ProductForm.tsx`, `ProductImage.tsx`, `ProductPrice.tsx`, `AddToCartButton.tsx`

- [ ] **Step 1: Compare Dawn product page to the reference**

Load dev `/products/<any-handle>`. Note differences from `products.$handle.tsx` (gallery layout, price style, add-to-cart button styling, typography).

- [ ] **Step 2: Apply DIBI styles**

Add scoped overrides in `dibi.css` (and minimal `main-product.liquid` class hooks) so the native product page matches the reference. Do **not** rebuild add-to-cart logic — keep Dawn's native form.

- [ ] **Step 3: Verify** — `shopify theme check` 0 errors; dev `/products/<handle>` matches reference; "Add to cart" still opens the native cart drawer.

- [ ] **Step 4: Commit**

```bash
git add theme/sections/main-product.liquid theme/assets/dibi.css
git commit -m "style(theme): restyle native product page to match Hydrogen"
```

### Task 2.2: Restyle collection (products listing)

**Files:**
- Modify: `theme/sections/main-collection-product-grid.liquid`, `theme/sections/main-collection-banner.liquid`, `theme/assets/dibi.css`
- Reference: `hydrogen/app/routes/products._index.tsx`

- [ ] **Step 1: Compare** dev `/collections/all` to `products._index.tsx` (grid columns, card style, spacing).
- [ ] **Step 2: Apply DIBI grid/card styles** via `dibi.css` + class hooks.
- [ ] **Step 3: Verify** — `shopify theme check` 0 errors; grid matches reference; pagination works.
- [ ] **Step 4: Commit**

```bash
git add theme/sections theme/assets/dibi.css
git commit -m "style(theme): restyle collection grid to match Hydrogen"
```

### Task 2.3: Verify cart & search styling

**Files:**
- Modify: `theme/assets/dibi.css` (+ Dawn cart/search sections as needed)
- Reference: `hydrogen/app/routes/cart.tsx`, `CartMain.tsx`, `CartLineItem.tsx`, `CartSummary.tsx`

- [ ] **Step 1: Compare** native cart drawer and `/cart` to the reference; note line-item and summary styling.
- [ ] **Step 2: Apply minimal DIBI styling** to cart drawer/page and search results.
- [ ] **Step 3: Verify** — add a product, open drawer, proceed to checkout (Shopify-hosted) loads. `shopify theme check` 0 errors.
- [ ] **Step 4: Commit**

```bash
git add theme/assets/dibi.css theme/sections
git commit -m "style(theme): align native cart and search with DIBI design"
```

---

## Phase 3 — Homepage Sections

> Homepage composition lives in `templates/index.json`. Build each section, then assemble. Reference: `hydrogen/app/routes/_index.tsx` throughout.

### Task 3.1: Hero carousel section

**Files:**
- Create: `theme/sections/hero-carousel.liquid`
- Reference: `_index.tsx` HERO block (CSS opacity crossfade across N images, 5s interval, dark overlay, centered heading/subhead/CTA)

- [ ] **Step 1: Write the section with editable slide blocks**

Markup: stacked `<img>` slides with `.is-active` opacity crossfade + `bg-black/30` overlay + centered heading/subhead + CTA button (href = `{% render 'booking-url' %}` or section setting). `{% schema %}`:
- settings: `heading` (text), `subheading` (richtext), `cta_label` (text), `interval_ms` (number, default 5000), `overlay_opacity` (range)
- blocks: `slide` (image_picker `image`, text `alt`), max 8
- presets: one default preset

- [ ] **Step 2: Add crossfade JS inline (scoped)**

Within the section, a small `<script>` cycling `.is-active` on slides every `interval_ms`, guarded by `prefers-reduced-motion`. Scope by `section.id`.

- [ ] **Step 3: Add hero styles** to `dibi.css` (75vh, object-cover, overlay, z-index).

- [ ] **Step 4: Verify** — `shopify theme check` 0 errors; add the section in the editor, see slides crossfade; matches `_index` hero.

- [ ] **Step 5: Commit**

```bash
git add theme/sections/hero-carousel.liquid theme/assets/dibi.css
git commit -m "feat(theme): add editable hero carousel section"
```

### Task 3.2: Services grid section

**Files:**
- Create: `theme/sections/services-grid.liquid`
- Reference: `_index.tsx` services section + `hydrogen/app/data/services.ts` (8 services, each name + shortDescription + heroImage, link to detail)

- [ ] **Step 1: Write the section**

Two source modes via a `source` setting: (a) **metaobject list** — loop `shop.metaobjects.service.values` (after Phase 4 seeding); (b) **manual blocks** fallback. Each card: image, name, short description, link to the service URL. Start with metaobject mode; if metaobjects not yet seeded, the manual blocks render. `{% schema %}` includes `heading`, `block: service_card` (image, title, text, url), presets.

- [ ] **Step 2: Card styles** in `dibi.css` to match `_index` grid.
- [ ] **Step 3: Verify** — `shopify theme check` 0 errors; cards render (manual blocks until Phase 4); layout matches reference.
- [ ] **Step 4: Commit**

```bash
git add theme/sections/services-grid.liquid theme/assets/dibi.css
git commit -m "feat(theme): add services grid section"
```

### Task 3.3: Testimonials section

**Files:**
- Create: `theme/sections/testimonials.liquid`
- Reference: `_index.tsx` testimonials/Star block

- [ ] **Step 1: Write section** with `block: testimonial` (richtext quote, text author, range stars 1–5), `heading` setting, presets.
- [ ] **Step 2: Styles** in `dibi.css`.
- [ ] **Step 3: Verify** — `shopify theme check` 0 errors; matches reference.
- [ ] **Step 4: Commit**

```bash
git add theme/sections/testimonials.liquid theme/assets/dibi.css
git commit -m "feat(theme): add testimonials section"
```

### Task 3.4: Instagram + CTA sections

**Files:**
- Create: `theme/sections/instagram-feed.liquid`, `theme/sections/cta-banner.liquid`
- Reference: `_index.tsx` Instagram block (links to IG) and closing CTA

- [ ] **Step 1: `instagram-feed.liquid`** — grid of `block: post` (image_picker + link), `heading`, `instagram_url` setting. Static images (no IG API). Presets.
- [ ] **Step 2: `cta-banner.liquid`** — heading + subtext + button (href `{% render 'booking-url' %}` or setting). Presets.
- [ ] **Step 3: Styles** in `dibi.css`.
- [ ] **Step 4: Verify** — `shopify theme check` 0 errors; both match reference.
- [ ] **Step 5: Commit**

```bash
git add theme/sections/instagram-feed.liquid theme/sections/cta-banner.liquid theme/assets/dibi.css
git commit -m "feat(theme): add Instagram feed and CTA banner sections"
```

### Task 3.5: Assemble homepage template

**Files:**
- Modify: `theme/templates/index.json`
- Reference: `_index.tsx` section order

- [ ] **Step 1: Compose `index.json`** with section order: `hero-carousel`, `services-grid`, `testimonials`, `instagram-feed`, `cta-banner`, each with sensible default settings/blocks matching the reference content.

- [ ] **Step 2: Verify** — `shopify theme check` 0 errors; dev `/` top-to-bottom matches `_index.tsx`; sections reorderable in the editor.

- [ ] **Step 3: Commit**

```bash
git add theme/templates/index.json
git commit -m "feat(theme): assemble homepage from custom sections"
```

---

## Phase 4 — Content Models (Services metaobjects) + Content Pages

### Task 4.1: Define the service metaobject schema

**Files:**
- Create: `scripts/seed-services.mjs` (definition + data; run once)
- Reference: `hydrogen/app/data/services.ts` (the `Service` interface is the schema source of truth)

> Run mutations via the connected Shopify Admin MCP (`graphql_mutation`) or `shopify` CLI with an Admin API token for `us0bdu-g1`. The script is idempotent (check-then-create).

- [ ] **Step 1: Define metaobject types via Admin GraphQL**

Create three definitions with `metaobjectDefinitionCreate`:
- `service_item`: fields `name` (single_line_text), `price` (single_line_text), `description` (single_line_text, optional)
- `service_section`: fields `title` (single_line_text), `subtitle` (multi_line_text), `layout` (single_line_text), `content` (multi_line_text, optional), `image` (file_reference, optional), `items` (list.metaobject_reference → service_item)
- `service`: fields `slug` (single_line_text), `name` (single_line_text), `hero_image` (file_reference), `short_description` (multi_line_text), `booking_link` (url, optional), `sections` (list.metaobject_reference → service_section), `faqs` (list.metaobject_reference → service_faq), and define `service_faq` (`question`, `answer`).

Enable **Storefront/Online Store access** on `service` with a URL handle (path prefix `services`) so it renders via `templates/metaobject.service.json`.

Capture the example mutation in the script:
```js
// metaobjectDefinitionCreate(definition: { type: "service_item", fieldDefinitions: [...] })
// ...repeat for service_faq, service_section, service
```

- [ ] **Step 2: Run definition creation**

Run the definition portion of `scripts/seed-services.mjs` (or paste mutations into the Shopify MCP). Verify in admin → Settings → Custom data → Metaobjects that all four types exist.

- [ ] **Step 3: Commit the script**

```bash
git add scripts/seed-services.mjs
git commit -m "feat(theme): add service metaobject definitions + seed script"
```

### Task 4.2: Seed service data from services.ts

**Files:**
- Modify: `scripts/seed-services.mjs` (data section)
- Reference: `hydrogen/app/data/services.ts` (all 8 services)

- [ ] **Step 1: Translate `services.ts` into seed payloads**

In the script, read/transcribe the 8 services. For each, create child `service_item`/`service_section`/`service_faq` entries, then the parent `service` entry referencing them. Use `metaobjectCreate` (or `metaobjectUpsert` with a stable handle = slug) so re-runs are idempotent.

- [ ] **Step 2: Run the seed**

Run the data portion. Verify in admin: 8 `service` entries (skin-conditions, anti-aging-energy, peels-refresh, laser-hair-removal, injectables-boosters, eye-body-enhancements, specialized-laser, semi-permanent-makeup), each with its sections/items/FAQs.

- [ ] **Step 3: Spot-check one entry** against `services.ts` (e.g. `laser-hair-removal` item count = 14 ladies + 11 gents).

- [ ] **Step 4: Commit**

```bash
git add scripts/seed-services.mjs
git commit -m "feat(theme): seed 8 services into metaobjects from services.ts"
```

### Task 4.3: Service detail section + template

**Files:**
- Create: `theme/sections/service-detail.liquid`, `theme/snippets/price-menu.liquid`, `theme/templates/metaobject.service.json`
- Reference: `hydrogen/app/routes/service.$slug.tsx` (hero, sections by `layout`, price menus, FAQs, booking CTA)

- [ ] **Step 1: Write `price-menu.liquid` snippet**

Renders one `service_section`'s items as a price list: each row = `name` … `price` (+ optional `description`). Input: `section_obj` (a `service_section` metaobject).
```liquid
{%- comment -%} Usage: {% render 'price-menu', section_obj: s %} {%- endcomment -%}
<div class="dibi-menu">
  {%- for item in section_obj.items.value -%}
    <div class="dibi-menu__row">
      <span class="dibi-menu__name">{{ item.name.value }}{% if item.description.value != blank %} <em>{{ item.description.value }}</em>{% endif %}</span>
      <span class="dibi-menu__price">{{ item.price.value }}</span>
    </div>
  {%- endfor -%}
</div>
```

- [ ] **Step 2: Write `service-detail.liquid`**

Reads the current metaobject via `section.settings` or the template context object. Render: hero (`hero_image`, `name`, `short_description`), loop `sections` switching on `layout` (`menu` → `price-menu` snippet; `split-left-image`/`split-right-image`/`split-text`/`full` → matching layouts), FAQs as an accordion, and a booking CTA (`booking_link` if set else `{% render 'booking-url' %}`). Match `service.$slug.tsx`.

- [ ] **Step 3: Create `templates/metaobject.service.json`** referencing the `service-detail` section.

- [ ] **Step 4: Add service styles** to `dibi.css` (menu rows, split layouts, FAQ accordion).

- [ ] **Step 5: Verify** — `shopify theme check` 0 errors; dev load a service URL (e.g. `/services/laser-hair-removal` per the definition's URL config); matches `service.$slug.tsx`; prices/sections/FAQs correct.

- [ ] **Step 6: Commit**

```bash
git add theme/sections/service-detail.liquid theme/snippets/price-menu.liquid theme/templates/metaobject.service.json theme/assets/dibi.css
git commit -m "feat(theme): add service detail template rendering metaobjects"
```

### Task 4.4: Point services-grid at metaobjects

**Files:**
- Modify: `theme/sections/services-grid.liquid`, `theme/sections/header.liquid`
- Reference: `services.ts` order

- [ ] **Step 1: Switch services-grid to metaobject mode** — loop `shop.metaobjects.service.values`, card links to each service's `.system.url`.
- [ ] **Step 2: Populate the header services dropdown** from the same metaobject loop (or a linked menu).
- [ ] **Step 3: Verify** — `shopify theme check` 0 errors; homepage grid + nav dropdown show all 8 services linking to detail pages.
- [ ] **Step 4: Commit**

```bash
git add theme/sections/services-grid.liquid theme/sections/header.liquid
git commit -m "feat(theme): wire services grid and nav to service metaobjects"
```

### Task 4.5: Training page

**Files:**
- Create: `theme/sections/training-courses.liquid`, `theme/templates/page.training.json`
- Reference: `hydrogen/app/routes/training.tsx` (courses, FAQs, enrolment CTA → `trainingWhatsAppUrl`)

- [ ] **Step 1: Create the Page in admin** — title "Training", handle `training`, template suffix `training`.
- [ ] **Step 2: Write `training-courses.liquid`** — hero, `block: course` (title, richtext description, optional price), `block: faq` (question, answer), enrolment CTA href = `{% render 'booking-url', message: settings.dibi_training_message %}`. Presets.
- [ ] **Step 3: Create `templates/page.training.json`** composing hero + training-courses, with default blocks transcribed from `training.tsx`.
- [ ] **Step 4: Style** in `dibi.css`.
- [ ] **Step 5: Verify** — `shopify theme check` 0 errors; dev `/pages/training` matches `training.tsx`; enrol CTA opens WhatsApp with the training message.
- [ ] **Step 6: Commit**

```bash
git add theme/sections/training-courses.liquid theme/templates/page.training.json theme/assets/dibi.css
git commit -m "feat(theme): add training page matching Hydrogen training route"
```

### Task 4.6: Careers page

**Files:**
- Create: `theme/sections/careers-listing.liquid`, `theme/templates/page.careers.json`
- Reference: `hydrogen/app/routes/careers.tsx`

- [ ] **Step 1: Create the Page** — title "Careers", handle `careers`, template suffix `careers`.
- [ ] **Step 2: Write `careers-listing.liquid`** — intro + `block: role` (title, richtext description, apply link/email). Presets. Match `careers.tsx`.
- [ ] **Step 3: Create `templates/page.careers.json`** with default blocks transcribed from `careers.tsx`.
- [ ] **Step 4: Style** in `dibi.css`.
- [ ] **Step 5: Verify** — `shopify theme check` 0 errors; dev `/pages/careers` matches `careers.tsx`.
- [ ] **Step 6: Commit**

```bash
git add theme/sections/careers-listing.liquid theme/templates/page.careers.json theme/assets/dibi.css
git commit -m "feat(theme): add careers page matching Hydrogen careers route"
```

### Task 4.7: Gallery page

**Files:**
- Create: `theme/sections/gallery-grid.liquid`, `theme/templates/page.gallery.json`
- Reference: `hydrogen/app/routes/gallery.tsx`, `hydrogen/app/components/GalleryGrid.tsx`, `hydrogen/app/data/gallery.ts` (image/video items, responsive grid, ordered)
- Assets: copy gallery media from `hydrogen/public/gallery/` to `theme/assets/` (or upload to Files and reference)

- [ ] **Step 1: Create the Page** — title "Gallery", handle `gallery`, template suffix `gallery`.
- [ ] **Step 2: Move gallery media** — copy `hydrogen/public/gallery/*` into `theme/assets/` (Liquid `asset_url`) or upload to Shopify Files; record the chosen URLs.
- [ ] **Step 3: Write `gallery-grid.liquid`** — responsive masonry/grid; `block: item` with `media_type` (image/video), image_picker/video, optional poster, alt. Match `GalleryGrid.tsx` layout/animations (CSS reveal). Presets.
- [ ] **Step 4: Create `templates/page.gallery.json`** with default item blocks transcribed/ordered from `gallery.ts`.
- [ ] **Step 5: Style** in `dibi.css`.
- [ ] **Step 6: Verify** — `shopify theme check` 0 errors; dev `/pages/gallery` matches `gallery.tsx`; videos play with posters.
- [ ] **Step 7: Commit**

```bash
git add theme/sections/gallery-grid.liquid theme/templates/page.gallery.json theme/assets theme/assets/dibi.css
git commit -m "feat(theme): add gallery page matching Hydrogen gallery route"
```

---

## Phase 5 — Animation / Polish

### Task 5.1: Scroll-reveal utility

**Files:**
- Create: `theme/assets/reveal.js`, `theme/snippets/reveal-init.liquid`
- Modify: `theme/layout/theme.liquid`
- Reference: Motion entrance reveals in `_index.tsx`, `service.$slug.tsx`, `GalleryGrid.tsx`

- [ ] **Step 1: Write `reveal.js`**

IntersectionObserver that adds `.is-visible` to `.dibi-reveal` elements on enter; respects `prefers-reduced-motion` (already short-circuited in CSS).
```js
const els = document.querySelectorAll('.dibi-reveal');
if ('IntersectionObserver' in window && els.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
} else { els.forEach((el) => el.classList.add('is-visible')); }
```

- [ ] **Step 2: Load it** — in `theme.liquid` before `</body>`: `<script src="{{ 'reveal.js' | asset_url }}" defer></script>`.
- [ ] **Step 3: Add `dibi-reveal` classes** to the entrance-animated wrappers in the custom sections built in Phases 3–4.
- [ ] **Step 4: Verify** — `shopify theme check` 0 errors; scrolling the homepage/service/gallery reveals elements; reduced-motion shows them immediately.
- [ ] **Step 5: Commit**

```bash
git add theme/assets/reveal.js theme/layout/theme.liquid theme/sections
git commit -m "feat(theme): add scroll-reveal animations to custom sections"
```

---

## Phase 6 — SEO, Redirects, 404

### Task 6.1: Per-page meta & social

**Files:**
- Modify: section schemas / templates as needed; verify Dawn's `<head>` meta
- Reference: `meta` exports in each Hydrogen route (titles/descriptions)

- [ ] **Step 1: Set page titles/descriptions** — for Pages (training/careers/gallery) set SEO fields in admin; for metaobject services ensure title/description map; homepage title via Dawn SEO settings. Match the `meta` text in the Hydrogen routes (e.g. homepage title "DIBI Milano Skin Center").
- [ ] **Step 2: Verify** — view-source on each page shows correct `<title>`/`<meta description>`.
- [ ] **Step 3: Commit** (only if template/section files changed)

```bash
git add theme
git commit -m "feat(theme): align page SEO titles and descriptions with Hydrogen"
```

### Task 6.2: URL redirects for legacy paths

**Files:** none in theme (admin config) — record in `DOMAIN-CUTOVER-RUNBOOK.md`

- [ ] **Step 1: Create redirects** (admin → Online Store → Navigation → URL Redirects, or `urlRedirectCreate` via Admin API):
  - `/training` → `/pages/training`
  - `/gallery` → `/pages/gallery`
  - `/careers` → `/pages/careers`
  - legacy service paths → each service's metaobject URL
- [ ] **Step 2: Verify** — visiting each old path on the live domain (post-publish) 301s correctly.
- [ ] **Step 3: Document** the redirect list in `DOMAIN-CUTOVER-RUNBOOK.md`.

```bash
git add DOMAIN-CUTOVER-RUNBOOK.md
git commit -m "docs: record legacy URL redirects for theme cutover"
```

### Task 6.3: 404 page

**Files:**
- Modify: `theme/templates/404.json` / `sections/main-404.liquid`
- Reference: `hydrogen/app/routes/$.tsx`

- [ ] **Step 1: Style the 404** to match the brand (heading, link home, link to products).
- [ ] **Step 2: Verify** — dev `/this-does-not-exist` shows the styled 404. `shopify theme check` 0 errors.
- [ ] **Step 3: Commit**

```bash
git add theme/templates/404.json theme/sections/main-404.liquid
git commit -m "style(theme): brand the 404 page"
```

---

## Phase 7 — QA & Cutover

### Task 7.1: Push as an unpublished theme

**Files:** none

- [ ] **Step 1: Push** — `cd theme && shopify theme push --unpublished --theme "DIBI Liquid"`
  Expected: theme uploaded to `us0bdu-g1`, appears under Online Store → Themes as unpublished, with a preview link.
- [ ] **Step 2: Run Theme Check once more** — `shopify theme check` → 0 errors.

### Task 7.2: Full QA pass on the preview

**Files:** none (fixes go back into the relevant task's files)

- [ ] **Step 1: Walk every page** on the unpublished preview: home, each of 8 services, products listing, a product, cart→checkout, training, careers, gallery, 404.
- [ ] **Step 2: Test devices** — mobile + desktop widths; header mobile menu; gallery video; WhatsApp CTAs (booking + training).
- [ ] **Step 3: Confirm editor experience** — client can edit hero, services, testimonials, training/careers/gallery blocks, and theme settings (contact/brand).
- [ ] **Step 4: Log + fix** any defects in the owning section/template, recommit. Re-push (`shopify theme push --theme "DIBI Liquid"`).

### Task 7.3: Cutover

**Files:** `DOMAIN-CUTOVER-RUNBOOK.md`

- [ ] **Step 1: Final content check** — metaobjects seeded, pages created, redirects in place, theme settings populated.
- [ ] **Step 2: Publish** the "DIBI Liquid" theme (Online Store → Themes → Publish). The Liquid theme is now the live storefront.
- [ ] **Step 3: Re-point the custom domain** from Oxygen to the Online Store channel per `DOMAIN-CUTOVER-RUNBOOK.md`.
- [ ] **Step 4: Smoke test the live domain** — all pages, redirects, checkout.
- [ ] **Step 5: Decommission Oxygen** deployment once verified stable (keep `hydrogen/` in the repo as archived reference; do not delete).
- [ ] **Step 6: Update the runbook** with the completed cutover steps/date.

```bash
git add DOMAIN-CUTOVER-RUNBOOK.md
git commit -m "docs: record completed Liquid theme cutover"
```

---

## Self-Review Notes (spec coverage)

- Goal (editor-editable + ecosystem): every custom section has `{% schema %}` + presets (Phases 1,3,4); commerce is native Dawn (Phase 2). ✅
- No commerce data migration: Phase 0.2 proves live catalog renders. ✅
- Base = Dawn: Task 0.1. ✅
- Hybrid content model: metaobjects for services (Phase 4.1–4.4), visual blocks for home/training/careers/gallery (Phases 3, 4.5–4.7). ✅
- Page/template map: covered task-by-task; header/footer (1.4/1.5), product/collection/cart/search (Phase 2), homepage (Phase 3), service/training/careers/gallery (Phase 4), contact→settings (1.2/1.3), animations→CSS/JS (Phase 5). ✅
- Redirects for legacy URLs: Task 6.2. ✅
- Staging on unpublished theme: Phase 7.1–7.2. ✅
- Cutover incl. domain repoint + Oxygen decommission + keep Hydrogen archived: Task 7.3. ✅
- Animation fidelity risk: Phase 5 CSS reveals + hero crossfade (3.1); ~95% acceptable per spec. ✅
- Service data re-entry risk: scripted + idempotent (Task 4.2). ✅
```
