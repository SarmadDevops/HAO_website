import { Link, useParams } from "react-router-dom";
import { LuArrowLeft, LuCheck } from "react-icons/lu";
import { getCause } from "../data/causes";
import { getProject, projects } from "../data/projects";
import { useUI } from "../context/ui-context";
import { useSeo } from "../hooks/useSeo";
import CauseCard from "../components/common/CauseCard";
import PageHero from "../components/common/PageHero";
import ProjectCard from "../components/common/ProjectCard";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  return <ProjectContent key={project.slug} project={project} />;
}

function ProjectContent({ project }) {
  const { openDonate, openVolunteer } = useUI();
  const cause = project.causeId ? getCause(project.causeId) : null;
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const Icon = project.icon;

  useSeo({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image?.src,
  });

  return (
    <>
      <PageHero
        title={project.title}
        intro={project.summary}
        image={project.image}
        crumbs={[{ label: "Projects", to: "/projects" }]}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[7fr_4fr] lg:gap-16">
          <article>
            <div className="prose-hao">
              {project.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            {project.highlights.length > 0 && (
              <div className="mt-10 rounded-lg bg-light p-6 sm:p-8">
                <h2 className="heading-md">At a glance</h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <LuCheck className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.detailsPending && (
              <p className="mt-8 rounded-md border-l-4 border-accent bg-accent-soft p-4 text-ink">
                We are preparing more information about this project. To learn about current activities or to get
                involved, please{" "}
                <Link to="/contact" className="font-semibold text-primary underline">
                  contact us
                </Link>
                .
              </p>
            )}

            <Link to="/projects" className="btn-link mt-10">
              <LuArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all projects
            </Link>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Support this project">
            {cause ? (
              <CauseCard cause={cause} headingLevel="h2" showDetails={false} />
            ) : (
              <div className="rounded-lg bg-primary-dark p-6 text-white sm:p-8">
                {Icon && <Icon className="h-10 w-10 text-accent" aria-hidden="true" />}
                <h2 className="heading-md mt-4 text-white">Support {project.title}</h2>
                <p className="mt-2 text-white/80">
                  Your donation to the HAO General Fund helps keep projects like this running.
                </p>
                <button type="button" onClick={() => openDonate("general")} className="btn btn-donate mt-6 w-full">
                  Donate Now
                </button>
              </div>
            )}
            <div className="rounded-lg border border-border p-6 sm:p-8">
              <h2 className="heading-md">Give your time</h2>
              <p className="mt-2 text-muted">Volunteers make every HAO project possible. Join a chapter in your city.</p>
              <button type="button" onClick={openVolunteer} className="btn btn-outline mt-5 w-full">
                Become a Volunteer
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="more-projects" className="section bg-light">
        <div className="container-site">
          <h2 id="more-projects" className="heading-lg">
            More of our work
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <ProjectCard project={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
