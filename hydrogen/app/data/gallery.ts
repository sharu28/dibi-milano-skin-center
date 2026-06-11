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

// Curated Instagram content. One entry per file in public/gallery/.
//
// HOW TO POPULATE:
//   1. Drop your optimized files into hydrogen/public/gallery/ using these
//      exact filenames (or rename both the file and the `src` here to match).
//      - Images: ~1600px long edge, compressed JPG/WebP.
//      - Videos: short muted H.264 MP4 + a poster JPG (first frame).
//   2. Update each `alt` to describe the actual shot.
//   3. Delete any rows you don't fill. Reorder via the `order` field.
//
// Mix below = 11 images + 4 clips (~70/30). `order` spaced by 10 for easy
// reordering. Clips are interleaved so video isn't clustered.
export const galleryItems: GalleryItem[] = [
  {type: 'image', src: '/gallery/photo-01.jpg', alt: 'DIBI Milano studio interior', order: 10},
  {type: 'image', src: '/gallery/photo-02.jpg', alt: 'Treatment in progress', order: 20},
  {type: 'video', src: '/gallery/clip-01.mp4', poster: '/gallery/clip-01.jpg', alt: 'DIBI Milano treatment reel', order: 30},
  {type: 'image', src: '/gallery/photo-03.jpg', alt: 'Product close-up', order: 40},
  {type: 'image', src: '/gallery/photo-04.jpg', alt: 'Facial treatment detail', order: 50},
  {type: 'image', src: '/gallery/photo-05.jpg', alt: 'DIBI Milano team', order: 60},
  {type: 'video', src: '/gallery/clip-02.mp4', poster: '/gallery/clip-02.jpg', alt: 'Behind the scenes at the studio', order: 70},
  {type: 'image', src: '/gallery/photo-06.jpg', alt: 'Skincare products on display', order: 80},
  {type: 'image', src: '/gallery/photo-07.jpg', alt: 'Treatment room', order: 90},
  {type: 'image', src: '/gallery/photo-08.jpg', alt: 'Client consultation', order: 100},
  {type: 'video', src: '/gallery/clip-03.mp4', poster: '/gallery/clip-03.jpg', alt: 'Treatment technique close-up', order: 110},
  {type: 'image', src: '/gallery/photo-09.jpg', alt: 'Studio detail', order: 120},
  {type: 'image', src: '/gallery/photo-10.jpg', alt: 'Skincare application', order: 130},
  {type: 'video', src: '/gallery/clip-04.mp4', poster: '/gallery/clip-04.jpg', alt: 'DIBI Milano studio moment', order: 140},
  {type: 'image', src: '/gallery/photo-11.jpg', alt: 'Finished result', order: 150},
];
