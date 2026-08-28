interface GalleryItemBase {
  // Accessibility / fallback text. Always provide something meaningful.
  alt: string;
  // Display order, ascending.
  order: number;
}

export interface GalleryImageItem extends GalleryItemBase {
  type: 'image';
  // Path under /public, served at site root. e.g. /gallery/photo-01.jpg
  src: string;
}

export interface GalleryVideoItem extends GalleryItemBase {
  type: 'video';
  // Path under /public. Short muted H.264 MP4.
  src: string;
  // First-frame image shown before/while loading.
  poster?: string;
}

export interface GalleryInstagramItem extends GalleryItemBase {
  type: 'instagram';
  // Instagram post/reel shortcode, e.g. 'DbqZFXaonW_' from
  // instagram.com/reel/DbqZFXaonW_/. Embedded via the official
  // instagram.com/reel/<code>/embed/ endpoint.
  code: string;
}

export type GalleryItem =
  | GalleryImageItem
  | GalleryVideoItem
  | GalleryInstagramItem;

// Curated gallery content.
//
// Instagram reels from @dibimilano_skincentre are embedded directly — to add
// one, copy the shortcode from the reel URL and add an `instagram` entry.
//
// Local files can be mixed in too:
//   1. Drop optimized files into hydrogen/public/gallery/.
//      - Images: ~1600px long edge, compressed JPG/WebP.
//      - Videos: short muted H.264 MP4 + a poster JPG (first frame).
//   2. Add an `image`/`video` entry pointing at the file.
//
// `order` spaced by 10 for easy reordering.
export const galleryItems: GalleryItem[] = [
  {
    type: 'instagram',
    code: 'DbljI2HIpQ8',
    alt: 'Discover your signature glow — skin treatments at DIBI Milano',
    order: 10,
  },
  {
    type: 'instagram',
    code: 'DbFucOEI1WE',
    alt: 'Scabbing after laser: is it normal? Aftercare explained',
    order: 20,
  },
  {
    type: 'instagram',
    code: 'DcI4WWxoGE3',
    alt: 'Reading the visible signs that show what your skin needs',
    order: 30,
  },
  {
    type: 'instagram',
    code: 'Db2hyTkom4M',
    alt: 'DIBI HIFU — a facelift without surgery, using focused ultrasound',
    order: 40,
  },
  {
    type: 'instagram',
    code: 'Db2gfsTIl4l',
    alt: 'How the layers of your skin protect, repair and renew themselves',
    order: 50,
  },
];
