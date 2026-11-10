import { images } from "../data/images";
import { history } from "../data/organization";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import AboutPreview from "../components/home/AboutPreview";
import DonationCTA from "../components/home/DonationCTA";
import FounderMessage from "../components/home/FounderMessage";
import ImpactSection from "../components/home/ImpactSection";
import StatsStrip from "../components/home/StatsStrip";
import TeamSection from "../components/home/TeamSection";
import VolunteerCTA from "../components/home/VolunteerCTA";

export default function About() {
  useSeo({
    title: "About Us",
    description:
      "Humanity Alliance Organization began its charitable work in 2019 and today is a network of more than 1,500 volunteers across Pakistan and abroad.",
    path: "/about",
    image: images.villageVisit.src,
  });

  return (
    <>
      <PageHero
        title="About Us"
        intro="A volunteer-led charity, started by a small group of people in 2019 and grown into a network that reaches across Pakistan and beyond."
        image={images.villageVisit}
        imagePosition="50% 40%"
      />

      <AboutPreview showLink={false} showTimeline={false} />

      <section aria-labelledby="journey-title" className="section bg-light">
        <div className="container-site">
          <SectionHeader id="journey-title" eyebrow="Our journey" title="How HAO grew" align="center" />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {history.map((item, index) => (
              <Reveal as="li" key={item.year} index={index} className="rounded-lg border-t-4 border-accent bg-surface p-6">
                <p className="font-heading text-2xl font-bold text-primary">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <StatsStrip />
      <FounderMessage />
      <TeamSection />
      <ImpactSection />
      <VolunteerCTA />
      <DonationCTA />
    </>
  );
}
