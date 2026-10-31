import { useCallback, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";
import { heroSlides } from "../../data/hero";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import ActionButton from "../common/ActionButton";
import ResponsiveImage from "../common/ResponsiveImage";

const INTERVAL_MS = 8000;

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

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Our current campaigns"
      className="relative isolate overflow-hidden bg-dark"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocusCapture={() => setHovering(true)}
      onBlurCapture={() => setHovering(false)}
    >
      <h1 className="sr-only">Humanity Alliance Organization</h1>
      <div className="grid min-h-[580px] sm:min-h-[600px] lg:min-h-[min(760px,calc(100svh-112px))]">
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
              className={`relative flex [grid-area:1/1] transition-opacity duration-1000 ease-in-out ${
                active ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <ResponsiveImage
                  image={slide.image}
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className={`hero-image absolute inset-0 h-full w-full object-cover transition-transform duration-[9000ms] ease-out ${
                    active && !reducedMotion ? "scale-[1.04]" : "scale-100"
                  }`}
                  style={{
                    "--pos-mobile": slide.position.mobile,
                    "--pos-desktop": slide.position.desktop,
                  }}
                />
              <div
                className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-dark/20 md:bg-gradient-to-r md:from-dark/90 md:via-dark/55 md:to-transparent"
                aria-hidden="true"
              />

              <div className="container-site relative flex items-end pb-24 pt-20 md:items-center md:pb-20">
                <div className="max-w-2xl text-white">
                  <p className="eyebrow eyebrow-light">{slide.eyebrow}</p>
                  <h2 className="heading-xl text-white">{slide.title}</h2>
                  <p className="mt-4 max-w-xl text-[1.0625rem] text-white/85 sm:text-xl">{slide.description}</p>
                  <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                    <ActionButton action={slide.primary} className="btn btn-donate btn-lg" />
                    <ActionButton action={slide.secondary} className="btn btn-outline-light btn-lg" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="container-site flex items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goTo(slideIndex)}
                  className="group flex h-11 items-center"
                  aria-label={`Show slide ${slideIndex + 1}: ${slide.title}`}
                  aria-current={slideIndex === index ? "true" : undefined}
                >
                  <span
                    className={`block h-1 rounded-full transition-all duration-300 ${
                      slideIndex === index ? "w-10 bg-accent" : "w-5 bg-white/50 group-hover:bg-white"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-dark"
                  aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                >
                  {paused ? <LuPlay className="h-5 w-5" aria-hidden="true" /> : <LuPause className="h-5 w-5" aria-hidden="true" />}
                </button>
              )}
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-dark"
                aria-label="Previous slide"
              >
                <LuChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-dark"
                aria-label="Next slide"
              >
                <LuChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
