import { useEffect, useRef, useState } from "react";

/** Returns [ref, inView]. Becomes true once the element enters the viewport. */
export function useInView({ rootMargin = "0px 0px -10% 0px", threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return [ref, inView];
}
