import { useCallback, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";
import { site } from "../../config/site";
import { getCause } from "../../data/causes";
import { heroSlides } from "../../data/hero";
import { impactStats } from "../../data/organization";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import ActionButton from "../common/ActionButton";
import ResponsiveImage from "../common/ResponsiveImage";
import { formatNumber, percentOf } from "../../utils/format";

const INTERVAL_MS = 8000;

const volunteers = impactStats.find((stat) => stat.id === "volunteers");
const trustPoints = [
  `Since ${site.foundedYear}`,
  "Nationwide",
  `${formatNumber(volunteers.value)}${volunteers.suffix} volunteers`,
];

const controlClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-dark transition-colors hover:border-primary hover:text-primary";

/** Progress card floating over the slide photo, linked to the slide's campaign. */
function CampaignCard({ causeId }) {
  const cause = getCause(causeId);
  if (!cause) return null;
  const percent = Math.floor(percentOf(cause.raised, cause.goal));

  return (
    <div className="absolute bottom-4 left-4 max-w-[240px] rounded-xl bg-surface p-4 shadow-lg lg:-bottom-8 lg:-left-8">
      <p className="text-sm font-semibold text-muted">{cause.title}</p>
      <p className="mt-1 font-heading text-2xl font-bold text-dark">{percent}% funded</p>
      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-accent-soft" aria-hidden="true">
        <div className="h-full rounded-full bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const count = heroSlides.length;
  const autoplay = count > 1 && !paused && !hovering && !reducedMotion;

  const goTo = useCallback((next) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (!autoplay) return undefined;
    const timer = setTimeout(() => setIndex((current) => (current + 1) % count), INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [autoplay, index, count]);

  const fade = (active) =>
    `[grid-area:1/1] transition-opacity duration-700 ease-in-out ${active ? "z-10 opacity-100" : "z-0 opacity-0"}`;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Our current campaigns"
      className="relative overflow-hidden bg-light"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocusCapture={() => setHovering(true)}
      onBlurCapture={() => setHovering(false)}
    >
      <h1 className="sr-only">Humanity Alliance Organization</h1>
      <div className="container-site grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="flex flex-col justify-center lg:col-span-6">
          <div className="grid">
            {heroSlides.map((slide, slideIndex) => {
              const active = slideIndex === index;
              return (
                <div
                  key={slide.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${slideIndex + 1} of ${count}: ${slide.title}`}
                  aria-hidden={!active}
                  inert={!active}
                  className={fade(active)}
                >
                  {slide.badge && (
                    <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-dark">
                      {slide.badge}
                    </span>
                  )}
                  <p className="eyebrow">{slide.eyebrow}</p>
                  <h2 className="font-heading text-[clamp(2.6rem,1.6rem+4vw,4.4rem)] font-bold leading-[1.05] tracking-tight text-dark">
                    {slide.title}
                  </h2>
                  <p className="lead mt-5 max-w-xl">{slide.description}</p>
                  <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                    <ActionButton action={slide.primary} className="btn btn-donate btn-lg" />
                    <ActionButton action={slide.secondary} className="btn btn-outline btn-lg" />
                  </div>
                </div>
              );
            })}
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-muted" aria-label="About HAO">
            {trustPoints.map((point, pointIndex) => (
              <li key={point} className="flex items-center gap-2.5">
                {pointIndex > 0 && (
                  <span className="text-accent" aria-hidden="true">
                    ·
                  </span>
                )}
                {point}
              </li>
            ))}
          </ul>

          {count > 1 && (
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {heroSlides.map((slide, slideIndex) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    className="group flex h-10 items-center"
                    aria-label={`Show slide ${slideIndex + 1}: ${slide.title}`}
                    aria-current={slideIndex === index ? "true" : undefined}
                  >
                    <span
                      className={`block h-1 rounded-full transition-all duration-300 ${
                        slideIndex === index ? "w-10 bg-accent" : "w-5 bg-border group-hover:bg-muted"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {!reducedMotion && (
                  <button
                    type="button"
                    onClick={() => setPaused((value) => !value)}
                    className={controlClass}
                    aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                  >
                    {paused ? <LuPlay className="h-4 w-4" aria-hidden="true" /> : <LuPause className="h-4 w-4" aria-hidden="true" />}
                  </button>
                )}
                <button type="button" onClick={() => goTo(index - 1)} className={controlClass} aria-label="Previous slide">
                  <LuChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => goTo(index + 1)} className={controlClass} aria-label="Next slide">
                  <LuChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid">
            {heroSlides.map((slide, slideIndex) => {
              const active = slideIndex === index;
              return (
                <div key={slide.id} aria-hidden={!active} inert={!active} className={`relative ${fade(active)}`}>
                  <div className="aspect-[16/11] overflow-hidden rounded-2xl bg-border lg:aspect-[4/5] lg:max-h-[min(620px,calc(100svh-210px))] lg:w-full">
                    <ResponsiveImage
                      image={slide.image}
                      priority={slideIndex === 0}
                      eager
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className={`hero-image h-full w-full object-cover transition-transform duration-[9000ms] ease-out ${
                        active && !reducedMotion ? "scale-[1.04]" : "scale-100"
                      }`}
                      style={{
                        "--pos-mobile": slide.position.mobile,
                        "--pos-desktop": slide.position.desktop,
                      }}
                    />
                  </div>
                  <CampaignCard causeId={slide.primary?.causeId} />
                </div>
              );
            })}
          </div>
          <span className="absolute right-4 top-4 z-20 rounded-full bg-accent px-3 py-1 text-sm font-bold text-dark">
            Est. {site.foundedYear}
          </span>
        </div>
      </div>
    </section>
  );
}
