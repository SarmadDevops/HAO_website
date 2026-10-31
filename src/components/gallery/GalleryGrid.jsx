import { useState } from "react";
import { LuExpand } from "react-icons/lu";
import ResponsiveImage from "../common/ResponsiveImage";
import Lightbox from "./Lightbox";

/**
 * Masonry-style photo grid. Photos keep their natural proportions (no
 * stretching) and open in a full-screen viewer.
 */
export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <ul className="columns-1 gap-4 xs:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((item, index) => (
          <li key={item.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block w-full overflow-hidden rounded-lg bg-light text-left"
              aria-label={`View photo: ${item.caption}`}
            >
              <ResponsiveImage
                image={item.image}
                sizes="(min-width: 1024px) 400px, (min-width: 400px) 50vw, 100vw"
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
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
