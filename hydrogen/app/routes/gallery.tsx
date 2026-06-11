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
