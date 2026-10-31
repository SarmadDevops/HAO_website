import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

let openDialogs = 0;

/**
 * Behaviour shared by modals, the lightbox and the mobile menu:
 * - closes on Escape
 * - keeps keyboard focus inside the dialog
 * - locks page scrolling while open
 * - returns focus to the element that opened it
 */
export function useDialog(isOpen, onClose) {
  const containerRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const container = containerRef.current;

    const focusFirst = () => {
      const target =
        container?.querySelector("[data-autofocus]") || container?.querySelector(FOCUSABLE) || container;
      target?.focus({ preventScroll: true });
    };
    const frame = requestAnimationFrame(focusFirst);

    openDialogs += 1;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onCloseRef.current?.();
        return;
      }
      if (event.key !== "Tab" || !container) return;

      const items = [...container.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null || el === document.activeElement
      );
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      openDialogs -= 1;
      if (openDialogs === 0) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return containerRef;
}
