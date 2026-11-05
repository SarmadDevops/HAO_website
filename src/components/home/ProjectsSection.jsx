import { Link } from "react-router-dom";
import { LuArrowRight, LuHeartHandshake } from "react-icons/lu";
import { featuredProjects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

// The large bento tile needs a photo, so lead with the first featured project that has one.
const lead = featuredProjects.find((project) => project.image) ?? featuredProjects[0];
const rest = featuredProjects.filter((project) => project !== lead);

export default function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title" className="section bg-primary-dark">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            id="projects-title"
            tone="light"
            icon={LuHeartHandshake}
            eyebrow="Together, we can change lives"
            title="Key Services & Projects"
            intro="From a ration bag in 2020 to schools, water pumps and emergency relief. Here is what our volunteers do every day."
          />
          <Link to="/projects" className="btn btn-outline-light shrink-0 self-start md:self-auto">
            All projects
            <LuArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal as="li" index={0} className="sm:col-span-2 lg:row-span-2">
            <ProjectCard project={lead} featured />
          </Reveal>
          {rest.map((project, index) => (
            <Reveal as="li" key={project.slug} index={index + 1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
