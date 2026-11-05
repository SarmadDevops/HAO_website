import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import { useDialog } from "../../hooks/useDialog";

/** Full-screen photo viewer with keyboard (←/→/Esc) and swipe navigation. */
export default function Lightbox({ items, index, onClose, onChange }) {
  const isOpen = index !== null;
  const containerRef = useDialog(isOpen, onClose);
  const touchStartX = useRef(null);
  const count = items.length;

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === "ArrowRight") onChange((index + 1) % count);
      if (event.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, index, count, onChange]);

  // Preload neighbouring photos so navigation feels instant.
  useEffect(() => {
    if (!isOpen || count < 2) return;
    [index + 1, index - 1].forEach((i) => {
      const preload = new Image();
      preload.src = items[(i + count) % count].image.full;
    });
  }, [isOpen, index, count, items]);

  if (!isOpen) return null;
  const item = items[index];

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) onChange((index + (delta < 0 ? 1 : -1) + count) % count);
    touchStartX.current = null;
  };

  const navButton =
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-dark";

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      tabIndex={-1}
      className="fixed inset-0 z-[90] flex flex-col bg-dark text-white focus:outline-none motion-safe:animate-[fadeIn_200ms_ease-out]"
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-sm text-white/80" aria-live="polite">
          {index + 1} / {count}
        </p>
        <button type="button" onClick={onClose} className={navButton} aria-label="Close photo viewer" data-autofocus>
          <LuX className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={(event) => event.target === event.currentTarget && onClose()}
      >
        <img
          key={item.id}
          src={item.image.full}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          className="max-h-[calc(100dvh-170px)] w-auto max-w-full select-none rounded-sm object-contain motion-safe:animate-[fadeIn_250ms_ease-out]"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => onChange((index - 1 + count) % count)}
              className={`${navButton} absolute left-3 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}
              aria-label="Previous photo"
            >
              <LuChevronLeft className="h-7 w-7" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onChange((index + 1) % count)}
              className={`${navButton} absolute right-3 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}
              aria-label="Next photo"
            >
              <LuChevronRight className="h-7 w-7" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:justify-center sm:px-6">
        {count > 1 && (
          <button type="button" onClick={() => onChange((index - 1 + count) % count)} className={`${navButton} sm:hidden`} aria-label="Previous photo">
            <LuChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
        )}
        <p className="text-center text-[0.975rem] text-white/90">{item.caption}</p>
        {count > 1 && (
          <button type="button" onClick={() => onChange((index + 1) % count)} className={`${navButton} sm:hidden`} aria-label="Next photo">
            <LuChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
