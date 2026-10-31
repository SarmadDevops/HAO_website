import { useId } from "react";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";
import { useDialog } from "../../hooks/useDialog";

/**
 * Accessible dialog. On phones it fills the screen; on larger screens it is
 * a centred panel. The body scrolls internally so long forms stay usable.
 */
export default function Modal({ isOpen, onClose, title, description, size = "md", children }) {
  const containerRef = useDialog(isOpen, onClose);
  const titleId = useId();
  const descriptionId = useId();

  if (!isOpen) return null;

  const width = { sm: "sm:max-w-md", md: "sm:max-w-xl", lg: "sm:max-w-3xl" }[size];

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-dark/70 motion-safe:animate-[fadeIn_200ms_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={`relative flex max-h-[100dvh] w-full flex-col overflow-hidden rounded-t-xl bg-surface shadow-2xl focus:outline-none sm:max-h-[calc(100dvh-3rem)] sm:rounded-xl ${width}`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <h2 id={titleId} className="heading-md">
              {title}
            </h2>
            {description && (
              <p id={descriptionId} className="mt-1 text-[0.975rem] text-muted">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 -mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-light hover:text-dark"
            aria-label="Close dialog"
          >
            <LuX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-5 py-5 sm:px-7 sm:py-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
