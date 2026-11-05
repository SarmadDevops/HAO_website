import { useInView } from "../../hooks/useInView";

/** Delay added per item when revealing cards in a grid. */
export const REVEAL_STAGGER_MS = 60;

/**
 * Fades its content up when it scrolls into view (disabled for reduced motion).
 * Pass `index` for grid items to stagger them by REVEAL_STAGGER_MS each.
 */
export default function Reveal({ as: Tag = "div", delay = 0, index, className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  if (index !== undefined) delay += index * REVEAL_STAGGER_MS;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
