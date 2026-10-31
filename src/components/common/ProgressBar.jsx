import { useInView } from "../../hooks/useInView";

/** Fundraising progress bar that fills when it scrolls into view. */
export default function ProgressBar({ percent, label }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-label={label}
      className="h-2.5 w-full overflow-hidden rounded-full bg-primary-soft"
    >
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-[1400ms] ease-out"
        style={{ width: inView ? `${percent}%` : "0%" }}
      />
    </div>
  );
}
