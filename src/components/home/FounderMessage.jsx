import { LuQuote } from "react-icons/lu";
import { site } from "../../config/site";
import { founder } from "../../data/team";
import Reveal from "../common/Reveal";
import ResponsiveImage from "../common/ResponsiveImage";

export default function FounderMessage() {
  return (
    <section aria-labelledby="founder-title" className="section overflow-hidden">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-x-0 bottom-0 top-[18%] rounded-lg bg-primary-soft" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 h-1.5 w-full rounded-b-lg bg-accent" aria-hidden="true" />
          <ResponsiveImage
            image={founder.photo}
            sizes="(min-width: 1024px) 400px, 320px"
            className="relative mx-auto h-auto w-[82%]"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">A message from our founder</p>
          <h2 id="founder-title" className="heading-lg">
            Serving humanity, together
          </h2>
          <figure className="mt-6">
            <LuQuote className="h-9 w-9 text-accent" aria-hidden="true" />
            <blockquote className="mt-3 space-y-4 font-heading text-[1.15rem] leading-relaxed text-ink sm:text-xl">
              {founder.message.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </blockquote>
            <figcaption className="mt-8 border-l-4 border-secondary pl-4">
              <span className="block font-heading text-xl font-bold text-dark">{founder.name}</span>
              <span className="block text-muted">
                {founder.role}, {site.name}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
