# Training Page + Book Online Wiring — Design

**Date:** 2026-06-09
**Site:** DIBI Milano Skin Center marketing site (Vite/React, `src/`)

## Goal

Populate the `TRAINING` nav destination with a real page, and make the
`BOOK ONLINE` nav action functional — both matching the existing design system.

## Design System (existing, to match)

- **Palette:** `#F9F9F7` cream bg, `#1A1A1A` near-black, `#D4C5B9` taupe accent, gray text.
- **Type:** `font-light` + `tracking-[0.15em]` uppercase headings; `font-serif italic`
  taglines; `font-serif` body.
- **Patterns:** image hero + `bg-black/40` overlay + `motion/react` fade-in; alternating
  white / `#F9F9F7` sections; `menu`-style rows (name + description + price); FAQ accordion;
  dark CTA button hovering to taupe.
- Reference files: `src/pages/Careers.tsx`, `src/pages/Service.tsx`, `src/data/services.ts`.

## Decisions (from brainstorming)

- Training content: **realistic placeholder** courses, editable later.
- Book Online destination: **WhatsApp** (`wa.me/94776333505`) — primary booking channel.
- Page structure: **single** `/training` page.
- Nav Book Online: **filled accent button** (dark → taupe hover), not a plain text link.
- Wiring scope: **all booking CTAs** — nav (desktop + mobile), Footer "Book Online",
  Service page "Book Now".

## Components / Changes

### 1. `src/data/contact.ts` (new)

Single source for contact details (currently the WhatsApp number is hardcoded in the footer).

```ts
export const contact = {
  phone: '0112 674 546',
  phoneHref: 'tel:+94112674546',
  whatsapp: '+94 77 633 3505',
  whatsappNumber: '94776333505',
  email: 'hello@dibimilano.com',
};
export function whatsappUrl(message: string): string;
export const bookingWhatsAppUrl: string;   // "...book an appointment."
export const trainingWhatsAppUrl: string;  // "...enquire about course enrolment."
```

### 2. `src/pages/Training.tsx` (new)

Single page composed from existing primitives:

- **Hero** — bg image, overlay, motion fade-in. "DIBI Milano Academy" + serif-italic tagline.
- **Intro** — white section, centered serif philosophy statement (mirrors Careers "Our Culture").
- **Courses** — two `menu`-style groupings ("Professional Certifications",
  "Masterclasses & Workshops"); each row = name + short description + indicative price.
  Placeholder set: Foundation Skin Science Certification, Advanced Chemical Peels Masterclass,
  Laser Safety & Operation, Dermaplaning & Microdermabrasion Workshop, Microblading & SPMU
  Certification, Injectables Fundamentals (medical). Defined as a local array in the component.
- **FAQ accordion** — who it's for, certification, prerequisites, how to enrol, VAT note.
  Same accordion behavior as `Service.tsx`.
- **CTA** — "Enquire about Enrolment" → `trainingWhatsAppUrl`.

### 3. `src/App.tsx`

Add `<Route path="/training" element={<Training />} />` and import.

### 4. `src/components/Navbar.tsx`

- `BOOK ONLINE` (desktop + mobile) → filled accent button linking to `bookingWhatsAppUrl`
  (`target="_blank" rel="noopener noreferrer"`).
- `TRAINING` (desktop + mobile) → `<Link to="/training">`.

### 5. `src/components/Footer.tsx`

- "Book Online" quick link → `bookingWhatsAppUrl`.
- Refactor hardcoded `wa.me/94776333505` to use `contact`.

### 6. `src/pages/Service.tsx`

- Replace dead `bookingLink: '#'` usage: "Book Now" → `bookingWhatsAppUrl`
  (`bookingLink` in `services.ts` left as-is or pointed at the helper).

## Out of scope

- SHOP / EGIFT CARDS / MORE nav links (still `#`).
- Course detail subpages, real course data, enrolment forms, payment.

## Testing

- `npm run build` (or `tsc`) passes.
- Manual: `/training` renders, nav Book Online opens WhatsApp, TRAINING routes to page,
  all booking CTAs resolve to the WhatsApp link.
