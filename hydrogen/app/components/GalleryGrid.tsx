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
          transition={{
            duration: 0.5,
            delay: Math.min(index * 0.05, 0.4),
            ease: 'easeOut',
          }}
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
