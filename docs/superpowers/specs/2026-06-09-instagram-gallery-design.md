# Instagram Gallery — Design Spec

**Date:** 2026-06-09
**Project:** DIBI Milano Skin Centre — Hydrogen storefront (`hydrogen/`)
**Status:** Approved scope, pending spec review

## Goal

Reuse curated Instagram content (photos + short reels) on the website as a
single branded gallery. Content is hand-picked and you-own-it — not an
auto-syncing IG feed widget.

## Scope (locked)

In scope:
- One `/gallery` page: responsive grid of images and muted-loop video clips.
- Media downloaded manually from Instagram, committed to the repo.
- Baked-in content model (a typed data file), matching the existing
  `app/data/services.ts` pattern.

Out of scope (explicitly):
- No hero/full-bleed video.
- No before/after framing or comparison UI.
- No click-to-expand / lightbox (plain grid for v1).
- No live Instagram API / auto-updating feed.
- No Shopify Metaobject (no-code editing) for v1 — can be added later if staff
  need to edit without a developer.

## Content model

New file `hydrogen/app/data/gallery.ts`, exporting a typed array (mirrors
`services.ts` conventions):

```ts
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;        // path under /public, e.g. /gallery/clip-01.mp4
  poster?: string;    // required for video: first-frame image
  alt: string;        // accessibility / fallback text
  order: number;      // display order, ascending
}

export const galleryItems: GalleryItem[] = [ /* ... */ ];
```

Media files live in `hydrogen/public/gallery/` (served statically by Hydrogen).
Adding/swapping content = drop a file in that folder + add one entry to
`gallery.ts`. This is the "occasional update" path.

## Page / route

- New file-based route `hydrogen/app/routes/gallery.tsx` → resolves to
  `/gallery` via existing `flatRoutes()` convention. No change to `routes.ts`.
- Add a `meta` export (title + description), same pattern as `careers.tsx`.
- Add a nav link to the gallery in `app/components/Navbar.tsx`.

## Layout & behavior

- Responsive grid (CSS columns / masonry-style), Tailwind. Matches the existing
  aesthetic: `#F9F9F7` background, light serif/uppercase headings, generous
  spacing.
- Each tile renders by `type`:
  - `image`: `<img>` with `loading="lazy"`, `object-cover`.
  - `video`: `<video>` with `muted loop playsInline autoPlay preload="none"`
    and `poster`, `object-cover`. No audio, no controls.
- Optional light entrance animation via `motion/react` (consistent with
  `careers.tsx`), kept subtle.
- No click behavior on tiles in v1.

## Performance

- Images web-optimized before commit (resize to max display width, compress).
- Video clips: short, compressed MP4 (H.264), with poster frames so the grid
  paints fast. `preload="none"` so clips load lazily.
- `loading="lazy"` on images; consider only autoplaying videos in view later if
  the grid grows large (deferred).

## Constraints

- **Consent:** any recognizable client faces require documented consent to
  publish on the website (separate from IG posting). Only feature media you have
  rights to.

## Dependencies / open items

- None blocking. Asset preparation (download + web-optimize) is a content task
  done by the client, not code.

## Future (not now)

- Promote `gallery.ts` to a Shopify Metaobject for no-code editing by staff.
- Reuse a gallery strip section on the homepage.
- Add lightbox/expand if desired.
