# DIBI Milano — Hydrogen → Liquid Theme Migration

**Date:** 2026-06-24
**Status:** Approved design, pending implementation plan
**Author:** brainstorming session

## Goal

Replace the headless Hydrogen (React on Oxygen) storefront with a standard
Shopify **Liquid theme** uploaded to the same store, so that:

1. The client can edit content/layout visually in the **Shopify theme editor**.
2. The store runs on the conventional Shopify theme + app ecosystem (lower
   maintenance, no Oxygen/headless infra).

The visual design must match the current Hydrogen site; custom regions are
rebuilt as **editor-configurable Liquid sections**, not hardcoded markup.

## Load-Bearing Fact: No Commerce Data Migration

Products, collections, cart, checkout, customers, orders, and inventory
**already live in the same Shopify store**. Hydrogen only renders them via the
Storefront API. A Liquid theme renders the *same* catalog. Therefore:

- **Zero data migration** for commerce.
- Checkout remains Shopify-hosted and unchanged.
- We rebuild **only the presentation layer**: React → Liquid.

## Architecture

### Base theme
Scaffold from **Dawn** (Shopify reference theme) to inherit, for free and
Shopify-maintained: product template, collection template, cart drawer/page,
search + predictive search, customer accounts. Dawn's marketing sections are
removed; bespoke sections matching the DIBI design are built on top.

### Content modeling — Hybrid (approved)
- **Metaobjects** for the 8 structured **Services**. A `service` metaobject
  definition mirrors the existing `Service` TS interface:
  - fields: `slug`, `name`, `hero_image`, `short_description`, `booking_link`
  - `sections`: list (metaobject reference) of `service_section`
    (`title`, `subtitle`, `layout`, `content`, `image`, `items`)
  - `service_section.items`: list of `service_item` (`name`, `price`,
    `description`)
  - `faqs`: list of `service_faq` (`question`, `answer`)
  - Rendered by one dynamic metaobject template → consistent across all 8.
  - Edited in **admin → Content → Metaobjects**.
- **Visual section-blocks** (theme editor) for looser marketing content:
  homepage, training, careers, gallery. Repeatable blocks where content
  repeats (e.g. course list, gallery items, price rows).

### Page / template map

| Today (Hydrogen) | Liquid target | Notes |
|---|---|---|
| `Navbar.tsx` | `sections/header.liquid` + theme settings | links, logo, colors editable |
| `Footer.tsx` | `sections/footer.liquid` | contact pulled from theme settings |
| `_index.tsx` | `templates/index.json` + custom sections | hero carousel, services grid, testimonials, Instagram, CTA |
| `products._index.tsx` | native `collection` template (restyled) | native |
| `products.$handle.tsx` | native `product` template (restyled) | native add-to-cart form |
| `cart.tsx` | native cart drawer + `cart` template | major simplification |
| `service.$slug.tsx` | `service` metaobject template | dynamic, 1 template for all 8 |
| `training.tsx` | Page + `page.training` template w/ custom sections | course blocks, FAQ blocks, enroll CTA |
| `careers.tsx` | Page + `page.careers` template w/ custom sections | |
| `gallery.tsx` + `GalleryGrid.tsx` | custom `gallery` section | image/video blocks |
| `contact.ts` (WhatsApp/phone/email) | global theme settings | single source, used by header/footer/CTAs |
| `motion` animations | CSS transitions + IntersectionObserver reveals | hero already CSS crossfade |

### Global concerns
- **Design tokens:** port the existing palette (e.g. `#F9F9F7` background) and
  typography into `settings_schema.json` + CSS custom properties so the client
  can adjust colors/fonts.
- **WhatsApp booking CTA:** theme setting for the number + prefilled message;
  a `booking_url` snippet builds the `wa.me` deep link (replaces
  `bookingWhatsAppUrl` / `trainingWhatsAppUrl`).
- **Animations:** reproduce entrance reveals with a small CSS/JS
  IntersectionObserver utility; hero crossfade is CSS opacity (already is).

### URLs & redirects (approved)
Custom top-level routes become native Shopify URLs; **Shopify URL redirects**
preserve old links:
- `/training` → `/pages/training`
- `/gallery` → `/pages/gallery`
- `/careers` → `/pages/careers`
- service detail paths → metaobject/page URLs as finalized during build
Products/collections already use native Shopify URLs.

## Cutover

1. Build + QA the theme as an **unpublished theme on the live store**
   (approved). Service pricing metaobjects are seeded from `services.ts` via a
   one-time Admin API script.
2. Populate metaobjects (services) and pages (training/careers/gallery) +
   theme settings (contact, colors, nav).
3. Set up URL redirects.
4. **Publish** the Liquid theme (replaces Hydrogen as the live storefront).
5. Re-point the custom domain from Oxygen to the Online Store channel.
6. Decommission the Oxygen deployment once verified.
7. Keep the Hydrogen repo archived as reference (do not delete until stable).

Note: an existing `DOMAIN-CUTOVER-RUNBOOK.md` covers domain mechanics; reconcile
the redirect/domain steps with it during the cutover phase.

## Out of Scope / YAGNI
- No redesign — match current look only.
- No new commerce features (subscriptions, B2B, etc.).
- No migration of product data (already in Shopify).
- Pixel-exact reproduction of complex Motion sequences — CSS approximations
  (~95%) are acceptable; flag any that materially differ.

## Risks
- **Editability vs. exactness tension:** sections must expose schema settings,
  not bake content in. Each section spec includes its settings.
- **Service data entry:** 8 services × nested pricing must be re-entered as
  metaobjects (one-time content migration from `services.ts`); scriptable via
  Admin API if desired.
- **Animation fidelity:** a few Motion reveals may simplify.
- **Domain cutover:** brief care needed to avoid downtime; stage on unpublished
  theme first.

## Phasing (for the implementation plan)
0. Theme scaffold + `shopify theme dev` against the store; Git-backed theme.
1. Global chrome: layout, header, footer, theme settings, design tokens, CSS.
2. Commerce templates: collection, product, cart, search (restyle native).
3. Homepage sections (hero, services grid, testimonials, IG, CTA).
4. Content models + pages: service metaobjects + template, training, careers,
   gallery.
5. Animation/polish pass (CSS reveals).
6. SEO + redirects + 404.
7. QA + cutover (publish, domain repoint, decommission Oxygen).
