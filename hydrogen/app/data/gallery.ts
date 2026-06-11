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
