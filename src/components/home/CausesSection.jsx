import { causes } from "../../data/causes";
import CauseCard from "../common/CauseCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function CausesSection() {
  return (
    <section aria-labelledby="causes-title" className="section bg-light">
      <div className="container-site grid gap-10 lg:grid-cols-3 lg:gap-8">
        <Reveal className="lg:pr-6 lg:pt-4">
          <SectionHeader
            id="causes-title"
            eyebrow="Donate for causes"
            title="Where your donation goes right now"
            intro="These are the campaigns we are raising funds for today. Every rupee brings a village closer to clean water or a child closer to a proper classroom."
          />
        </Reveal>
        {causes.map((cause, index) => (
          <Reveal key={cause.id} delay={(index + 1) * 100}>
            <CauseCard cause={cause} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
