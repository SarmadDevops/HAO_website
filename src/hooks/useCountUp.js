import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/** Animates from 0 to `target` once `start` becomes true. */
export function useCountUp(target, start, duration = 1600) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reducedMotion) return undefined;

    let frame;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, reducedMotion]);

  return reducedMotion ? target : value;
}
