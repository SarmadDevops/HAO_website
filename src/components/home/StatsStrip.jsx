import { impactStats } from "../../data/organization";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";
import { formatNumber } from "../../utils/format";

function Stat({ stat, start }) {
  const count = useCountUp(stat.value ?? 0, start && stat.value != null);
  const finalText = stat.display ?? `${stat.prefix ?? ""}${formatNumber(stat.value)}${stat.suffix ?? ""}`;

  return (
    <div className="min-w-0 px-2 text-center max-md:odd:last:col-span-2">
      <dt className="sr-only">{stat.label}</dt>
      <dd>
        <span className="sr-only">{finalText}</span>
        <span
          aria-hidden="true"
          className={`flex min-h-[clamp(2rem,1.5rem+2vw,3.25rem)] items-end justify-center break-words font-heading font-bold leading-tight text-white ${
            stat.display
              ? "text-[clamp(1.35rem,1.1rem+0.8vw,1.85rem)]"
              : "text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)]"
          }`}
        >
          {stat.display ?? `${stat.prefix ?? ""}${formatNumber(count)}${stat.suffix ?? ""}`}
        </span>
        <span aria-hidden="true" className="mt-1 block text-[0.95rem] text-white/80">
          {stat.label}
        </span>
      </dd>
    </div>
  );
}

export default function StatsStrip() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section aria-label="Our impact in numbers" className="bg-secondary">
      <div ref={ref} className="container-site py-12 sm:py-14">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {impactStats.map((stat) => (
            <Stat key={stat.id} stat={stat} start={inView} />
          ))}
        </dl>
      </div>
    </section>
  );
}
