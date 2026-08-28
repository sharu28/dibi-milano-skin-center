import {motion} from 'motion/react';
import {Instagram} from 'lucide-react';
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
          key={item.type === 'instagram' ? item.code : item.src}
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
          {item.type === 'instagram' ? (
            // The link sits behind the iframe and shows through whenever the
            // embed fails to paint — Instagram unreachable, or a content
            // blocker stopping the frame. A loaded embed covers it entirely.
            <div className="relative w-full aspect-[9/16] bg-[#F1EFEA]">
              <a
                href={`https://www.instagram.com/reel/${item.code}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center"
              >
                <Instagram className="w-7 h-7 text-gray-400" />
                <span className="font-serif italic text-gray-600 leading-relaxed">
                  {item.alt}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
                  View on Instagram
                </span>
              </a>
              <iframe
                src={`https://www.instagram.com/reel/${item.code}/embed/`}
                title={item.alt}
                loading="lazy"
                allowFullScreen
                scrolling="no"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          ) : item.type === 'video' ? (
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
