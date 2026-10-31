import { waysWeHelp } from "../../data/organization";
import { images } from "../../data/images";
import Reveal from "../common/Reveal";
import ResponsiveImage from "../common/ResponsiveImage";
import SectionHeader from "../common/SectionHeader";

/** "How we help": a numbered list beside a photo rather than a grid of boxes. */
export default function ImpactSection() {
  return (
    <section aria-labelledby="impact-title" className="section">
      <div className="container-site grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            id="impact-title"
            eyebrow="Compassion in action"
            title="How we help people"
            intro="Our work is practical and close to the ground. These are the ways HAO volunteers support families across Pakistan."
          />
          <div className="mt-8 hidden aspect-[4/3] overflow-hidden rounded-lg lg:block">
            <ResponsiveImage image={images.elderlyVisit} sizes="480px" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <ol className="grid gap-x-10 sm:grid-cols-2">
          {waysWeHelp.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.id} delay={(index % 2) * 80} className="border-t border-border py-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-secondary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-2xl font-semibold text-border" aria-hidden="true">
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
    </section>
  );
}
