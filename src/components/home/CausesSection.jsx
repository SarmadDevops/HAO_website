import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuHeart } from "react-icons/lu";
import { causes } from "../../data/causes";
import CauseCard from "../common/CauseCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

const ARROW_CLASS =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-dark transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-dark";

export default function CausesSection() {
  const scroller = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByCard = (direction) => {
    const el = scroller.current;
    const card = el?.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section aria-labelledby="causes-title" className="section bg-light">
      <div className="container-site grid gap-10 lg:grid-cols-3 lg:gap-8">
        <Reveal className="lg:pr-6 lg:pt-4">
          <SectionHeader
            id="causes-title"
            icon={LuHeart}
            eyebrow="Donate for causes"
            title="Where your donation goes right now"
            intro="These are the campaigns we are raising funds for today. Every rupee brings a village closer to clean water or a child closer to a proper classroom."
          />
        </Reveal>

        <Reveal delay={120} className="min-w-0 lg:col-span-2">
          <ul
            ref={scroller}
            onScroll={updateEdges}
            tabIndex={0}
            aria-label="Fundraising campaigns"
            className="-mx-1 flex snap-x snap-mandatory scroll-px-1 gap-6 overflow-x-auto px-1 pb-6 [scrollbar-width:none] lg:gap-8 [&::-webkit-scrollbar]:hidden"
          >
            {causes.map((cause) => (
              <li
                key={cause.id}
                className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-2rem)/2)]"
              >
                <CauseCard cause={cause} />
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={edges.start}
              aria-label="Previous campaign"
              className={ARROW_CLASS}
            >
              <LuChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={edges.end}
              aria-label="Next campaign"
              className={ARROW_CLASS}
            >
              <LuChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
