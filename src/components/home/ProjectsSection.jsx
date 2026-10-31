import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { featuredProjects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title" className="section bg-primary-dark">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            id="projects-title"
            tone="light"
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
          {featuredProjects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={(index % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
