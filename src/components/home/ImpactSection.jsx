import { LuHandHeart } from "react-icons/lu";
import { waysWeHelp } from "../../data/organization";
import { images } from "../../data/images";
import Reveal from "../common/Reveal";
import ResponsiveImage from "../common/ResponsiveImage";
import SectionHeader from "../common/SectionHeader";

/** "How we help": centred header, then a large photo beside a list of icon items. */
export default function ImpactSection() {
  return (
    <section aria-labelledby="impact-title" className="section bg-primary-soft">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            id="impact-title"
            align="center"
            icon={LuHandHeart}
            eyebrow="Compassion in action"
            title="How we help people"
            intro="Our work is practical and close to the ground. These are the ways HAO volunteers support families across Pakistan."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <ResponsiveImage
                image={images.elderlyVisit}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <ol className="grid gap-x-10 sm:grid-cols-2">
            {waysWeHelp.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.id} index={index} className="border-t border-primary/15 py-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-dark">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-2xl font-semibold text-primary/25" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="heading-md mt-4">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.text}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
