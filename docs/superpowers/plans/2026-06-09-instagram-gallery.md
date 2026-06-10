# Instagram Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/gallery` page to the DIBI Milano Hydrogen storefront that displays a curated grid of Instagram-sourced images and muted-loop video clips.

**Architecture:** Static content baked into the repo. A typed data file (`app/data/gallery.ts`) lists items; media files live in `public/gallery/`. A presentational `GalleryGrid` component renders image or video tiles by type. A file-based route `gallery.tsx` wires it together with page meta. A nav link is added to `Navbar.tsx`.

**Tech Stack:** React 19, React Router 7 (Hydrogen flatRoutes), TypeScript, Tailwind CSS v4, `motion/react`, `lucide-react`.

**Verification note:** This project has no unit-test runner (no vitest/jest). Verification gates are `npm run typecheck`, `npm run lint`, and a manual dev-server check. Run all npm commands from the `hydrogen/` directory.

---

### Task 1: Create the media folder

**Files:**
- Create: `hydrogen/public/gallery/.gitkeep`

- [ ] **Step 1: Create the folder with a keep file**

Create `hydrogen/public/gallery/.gitkeep` (empty file). This ensures the
static media folder exists and is committed even before real assets are added.
Hydrogen serves files under `public/` at the site root, so a file at
`public/gallery/clip-01.mp4` is reachable at `/gallery/clip-01.mp4`.

- [ ] **Step 2: Commit**

```bash
git add hydrogen/public/gallery/.gitkeep
git commit -m "chore: add public/gallery media folder"
```

---

### Task 2: Gallery data model

**Files:**
- Create: `hydrogen/app/data/gallery.ts`

- [ ] **Step 1: Write the data file**

Mirror the conventions in `app/data/services.ts` (exported interface + exported
typed array). Seed with placeholder entries that reference files the client will
add to `public/gallery/`. The placeholder entries make the page render during
development; the client replaces `src`/`poster`/`alt` values with real media.

Create `hydrogen/app/data/gallery.ts`:

```ts
export interface GalleryItem {
  type: 'image' | 'video';
  // Path under /public, served at site root. e.g. /gallery/photo-01.jpg
  src: string;
  // Required for type 'video': first-frame image shown before/while loading.
  poster?: string;
  // Accessibility / fallback text. Always provide something meaningful.
  alt: string;
  // Display order, ascending.
  order: number;
}

// Curated Instagram content. Add an entry per file dropped in public/gallery/.
// Keep `order` values spaced (10, 20, 30...) so reordering is easy later.
export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/gallery/photo-01.jpg',
    alt: 'DIBI Milano treatment moment',
    order: 10,
  },
  {
    type: 'video',
    src: '/gallery/clip-01.mp4',
    poster: '/gallery/clip-01.jpg',
    alt: 'DIBI Milano treatment reel',
    order: 20,
  },
];
```

- [ ] **Step 2: Typecheck**

Run (from `hydrogen/`): `npm run typecheck`
Expected: PASS (no type errors introduced by the new file).

- [ ] **Step 3: Commit**

```bash
git add hydrogen/app/data/gallery.ts
git commit -m "feat: add gallery data model"
```

---

### Task 3: GalleryGrid component

**Files:**
- Create: `hydrogen/app/components/GalleryGrid.tsx`

- [ ] **Step 1: Write the component**

Presentational only. Sorts items by `order`, renders a responsive masonry-style
grid using CSS columns, and renders each item as an image or muted-loop video by
`type`. No click behavior (v1 has no lightbox). Subtle entrance animation via
`motion/react`, consistent with `careers.tsx`.

Create `hydrogen/app/components/GalleryGrid.tsx`:

```tsx
import {motion} from 'motion/react';
import type {GalleryItem} from '~/data/gallery';

export function GalleryGrid({items}: {items: GalleryItem[]}) {
  const sorted = [...items].sort((a, b) => a.order - b.order);

  if (sorted.length === 0) {
    return (
      <p className="text-center text-gray-400 font-serif italic py-24">
        Gallery coming soon.
      </p>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
      {sorted.map((item, index) => (
        <motion.div
          key={item.src}
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.5, delay: Math.min(index * 0.05, 0.4), ease: 'easeOut'}}
          className="mb-4 break-inside-avoid overflow-hidden rounded-sm bg-gray-100"
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              poster={item.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="none"
              aria-label={item.alt}
              className="w-full h-auto object-cover"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Typecheck**

Run (from `hydrogen/`): `npm run typecheck`
Expected: PASS.

- [ ] **Step 3: Lint**

Run (from `hydrogen/`): `npm run lint`
Expected: PASS (no errors for the new component). Note: `jsx-a11y` is enabled —
the `aria-label` on `<video>` and `alt` on `<img>` satisfy it.

- [ ] **Step 4: Commit**

```bash
git add hydrogen/app/components/GalleryGrid.tsx
git commit -m "feat: add GalleryGrid component"
```

---

### Task 4: Gallery route

**Files:**
- Create: `hydrogen/app/routes/gallery.tsx`

- [ ] **Step 1: Write the route**

File-based route resolves to `/gallery` via existing `flatRoutes()` (no change to
`routes.ts`). Follow the `meta` + section layout patterns from `careers.tsx`
(`#F9F9F7` background, light uppercase serif headings). Import data and render
`GalleryGrid`.

Create `hydrogen/app/routes/gallery.tsx`:

```tsx
import type {Route} from './+types/gallery';
import {motion} from 'motion/react';
import {galleryItems} from '~/data/gallery';
import {GalleryGrid} from '~/components/GalleryGrid';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Gallery | DIBI Milano Skin Center'},
    {
      name: 'description',
      content:
        'A look inside DIBI Milano Skin Center — treatments, results, and moments from our studio.',
    },
  ];
};

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <section className="pt-40 pb-16 px-4 text-center">
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, ease: 'easeOut'}}
          className="text-4xl md:text-5xl font-light text-gray-900 tracking-[0.15em] uppercase mb-6"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2, ease: 'easeOut'}}
          className="text-lg text-gray-600 font-serif italic max-w-2xl mx-auto"
        >
          Moments from our studio.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <GalleryGrid items={galleryItems} />
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Typecheck (regenerates route types)**

Run (from `hydrogen/`): `npm run typecheck`
Expected: PASS. `react-router typegen` generates `./+types/gallery`; if the
import errors before typegen runs, the typecheck script runs typegen first.

- [ ] **Step 3: Visual check in dev server**

Run (from `hydrogen/`): `npm run dev`
Navigate to `http://localhost:3000/gallery` (use the port the CLI prints).
Expected: page renders with the "Gallery" heading and a grid. With only
placeholder data and no real media files yet, tiles show broken-image/empty
boxes — that is expected until the client adds files to `public/gallery/`.
Stop the dev server when done.

- [ ] **Step 4: Commit**

```bash
git add hydrogen/app/routes/gallery.tsx
git commit -m "feat: add gallery route"
```

---

### Task 5: Add Gallery to the navbar

**Files:**
- Modify: `hydrogen/app/components/Navbar.tsx`

- [ ] **Step 1: Add the desktop nav link**

In `hydrogen/app/components/Navbar.tsx`, in the desktop left cluster, add a
GALLERY link after the PRODUCTS link. Find this line:

```tsx
            <Link to="/products" className="hover:text-gray-500 transition-colors">PRODUCTS</Link>
```

Add immediately after it:

```tsx
            <Link to="/gallery" className="hover:text-gray-500 transition-colors">GALLERY</Link>
```

- [ ] **Step 2: Add the mobile nav link**

In the mobile menu section, find this line:

```tsx
          <Link to="/products" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">PRODUCTS</Link>
```

Add immediately after it:

```tsx
          <Link to="/gallery" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">GALLERY</Link>
```

- [ ] **Step 3: Typecheck and lint**

Run (from `hydrogen/`): `npm run typecheck && npm run lint`
Expected: PASS.

- [ ] **Step 4: Visual check**

Run (from `hydrogen/`): `npm run dev`
Expected: GALLERY appears in the desktop header and mobile menu; clicking it
navigates to `/gallery`. Stop the dev server when done.

- [ ] **Step 5: Commit**

```bash
git add hydrogen/app/components/Navbar.tsx
git commit -m "feat: add gallery link to navbar"
```

---

## Content handoff (client task, not code)

After the build, the client populates the gallery:

1. Download chosen photos/reels from Instagram.
2. Web-optimize: resize images to ~1600px max width, compress; export reels as
   short muted H.264 MP4 + a poster JPG (first frame).
3. Drop files into `hydrogen/public/gallery/`.
4. Add/adjust entries in `hydrogen/app/data/gallery.ts` to match the filenames,
   set `alt` text, and order.
5. Remove the two placeholder entries once real media is in.

**Consent reminder:** only publish media of recognizable client faces with
documented consent.
