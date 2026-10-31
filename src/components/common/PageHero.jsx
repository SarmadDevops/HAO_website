import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import ResponsiveImage from "./ResponsiveImage";

/**
 * Banner at the top of inner pages: title, breadcrumb and optional photo.
 * `crumbs` is a list of { label, to } leading up to the current page.
 */
export default function PageHero({ title, intro, image, imagePosition = "50% 50%", crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark text-white">
      {image && (
        <>
          <ResponsiveImage
            image={image}
            alt=""
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/45" aria-hidden="true" />
        </>
      )}
      <div className="container-site py-14 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/80">
            <li>
              <Link to="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.to} className="flex items-center gap-1.5">
                <LuChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                <Link to={crumb.to} className="hover:text-white hover:underline">
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <LuChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span aria-current="page" className="font-semibold text-accent">
                {title}
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="heading-xl mt-4 max-w-3xl text-white">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-white/85">{intro}</p>}
      </div>
    </section>
  );
}
