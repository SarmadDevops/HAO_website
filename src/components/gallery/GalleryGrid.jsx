import { useState } from "react";
import { LuExpand } from "react-icons/lu";
import ResponsiveImage from "../common/ResponsiveImage";
import Lightbox from "./Lightbox";

// Desktop positions for the five showcase photos; the third is the large centre photo.
const SHOWCASE_SLOTS = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "md:col-span-2 md:aspect-[2/1] lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
];

/**
 * Photo grid that opens photos in a full-screen viewer. By default it shows
 * exactly five photos: a large centre photo with two smaller photos each side.
 *
 * `uniform` renders aligned 4:3 cards instead. Photos are cropped from the
 * centre unless a gallery entry sets its own `position`.
 */
export default function GalleryGrid({ items, uniform = false }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (uniform) {
    return (
      <>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-light transition-shadow duration-200 hover:shadow-[0_8px_20px_-10px_rgb(var(--color-dark)/0.35)]"
                aria-label={`View photo: ${item.caption}`}
              >
                <ResponsiveImage
                  image={item.image}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  style={{ objectPosition: item.position }}
                />
                <span
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    <LuExpand className="h-4 w-4" />
                    View Photo
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <Lightbox items={items} index={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
      </>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-[480px] lg:grid-cols-3 lg:grid-rows-2 lg:gap-5 xl:h-[600px]">
        {items.map((item, index) => (
          <li key={item.id} className={`aspect-[4/3] min-h-0 lg:aspect-auto ${SHOWCASE_SLOTS[index]}`}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block h-full w-full overflow-hidden rounded-lg bg-light text-left"
              aria-label={`View photo: ${item.caption}`}
            >
              <ResponsiveImage
                image={item.image}
                sizes={
                  index === 2
                    ? "(min-width: 1024px) 520px, 100vw"
                    : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                }
                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-dark/75 via-dark/0 to-transparent p-4 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <span className="flex w-full items-center justify-between gap-3 text-[0.95rem] font-semibold text-white">
                  {item.caption}
                  <LuExpand className="h-5 w-5 shrink-0" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
