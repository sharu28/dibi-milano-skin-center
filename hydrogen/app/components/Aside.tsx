import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useId} from 'react';
import {X} from 'lucide-react';

type AsideType = 'search' | 'cart' | 'mobile' | 'closed';
type AsideContextValue = {
  type: AsideType;
  open: (mode: AsideType) => void;
  close: () => void;
};

/**
 * A right-side drawer with overlay backdrop.
 */
export function Aside({
  children,
  heading,
  type,
}: {
  children?: React.ReactNode;
  type: AsideType;
  heading: React.ReactNode;
}) {
  const {type: activeType, close} = useAside();
  const expanded = type === activeType;
  const id = useId();

  useEffect(() => {
    const abortController = new AbortController();
    if (expanded) {
      document.addEventListener(
        'keydown',
        function handler(event: KeyboardEvent) {
          if (event.key === 'Escape') close();
        },
        {signal: abortController.signal},
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      abortController.abort();
      document.body.style.overflow = '';
    };
  }, [close, expanded]);

  return (
    <div
      aria-modal
      role="dialog"
      aria-labelledby={id}
      aria-hidden={!expanded}
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        expanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        className="absolute inset-0 bg-black/40"
        onClick={close}
        aria-label="Close panel"
        tabIndex={expanded ? 0 : -1}
      />
      <aside
        className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl flex flex-col transition-transform duration-300 ${
          expanded ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h3
            id={id}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-900"
          >
            {heading}
          </h3>
          <button
            onClick={close}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-900 transition-colors"
            tabIndex={expanded ? 0 : -1}
          >
            <X className="w-5 h-5" />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto px-6 py-6">{children}</main>
      </aside>
    </div>
  );
}

const AsideContext = createContext<AsideContextValue | null>(null);

Aside.Provider = function AsideProvider({children}: {children: ReactNode}) {
  const [type, setType] = useState<AsideType>('closed');

  return (
    <AsideContext.Provider
      value={{
        type,
        open: setType,
        close: () => setType('closed'),
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export function useAside() {
  const aside = useContext(AsideContext);
  if (!aside) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return aside;
}
