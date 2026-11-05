import { images } from "../data/images";
import { projects } from "../data/projects";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import ProjectCard from "../components/common/ProjectCard";
import Reveal from "../components/common/Reveal";
import CausesSection from "../components/home/CausesSection";
import DonationCTA from "../components/home/DonationCTA";

export default function Projects() {
  useSeo({
    title: "Our Projects",
    description:
      "Ration Drive, Pakistan Dastarkhwan, Hem Help, disaster relief, Water for All, education and more: the projects run by Humanity Alliance Organization volunteers.",
    path: "/projects",
    image: images.school.src,
  });

  return (
    <>
      <PageHero
        title="Our Projects"
        intro="Every HAO project started with a need we saw in our own communities. Here is what our volunteers do, and how you can help."
        image={images.school}
        imagePosition="50% 35%"
      />

      <section aria-label="All projects" className="section">
        <div className="container-site">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal as="li" key={project.slug} index={index}>
                <ProjectCard project={project} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CausesSection />
      <DonationCTA />
    </>
  );
}
