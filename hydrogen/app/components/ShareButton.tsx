import {useState} from 'react';
import {Share2} from 'lucide-react';

export function ShareButton({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window === 'undefined' ? '' : window.location.href;
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({title, url});
        return;
      } catch {
        // user cancelled or share unavailable; fall through to copy
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // give up silently
      }
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share this product"
        className={
          className ??
          'w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors'
        }
      >
        <Share2 className="w-4 h-4" />
      </button>
      {copied && (
        <span className="absolute -top-8 right-0 text-[11px] tracking-wider uppercase bg-gray-900 text-white px-2 py-1">
          Link copied
        </span>
      )}
    </div>
  );
}
