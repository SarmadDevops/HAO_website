import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { useUI } from "../../context/ui-context";
import ResponsiveImage from "./ResponsiveImage";

/**
 * Project/service card. Shows the project photo when one exists,
 * otherwise a calm icon panel in brand colours.
 */
export default function ProjectCard({ project, headingLevel: Heading = "h3", showDonate = true }) {
  const { openDonate } = useUI();
  const Icon = project.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-300 hover:shadow-[0_10px_30px_-12px_rgb(16_33_26/0.25)]">
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden bg-primary-dark">
          {project.image ? (
            <ResponsiveImage
              image={project.image}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgb(var(--color-primary))_0%,rgb(var(--color-primary-dark))_70%)]">
              <Icon className="h-16 w-16 text-accent/90" aria-hidden="true" />
            </div>
          )}
        </div>
        {project.image && Icon && (
          <span className="absolute bottom-0 left-5 inline-flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-md bg-accent text-dark shadow-sm">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${project.image ? "pt-9 sm:pt-10" : ""}`}>
        <Heading className="heading-md">{project.title}</Heading>
        <p className="mt-2 flex-1 text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <Link to={`/projects/${project.slug}`} className="btn-link after:absolute after:inset-0">
            View details
            <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </Link>
          {showDonate && (
            <button
              type="button"
              onClick={() => openDonate(project.causeId || null)}
              className="relative z-10 text-sm font-semibold text-secondary underline-offset-4 hover:underline"
            >
              Donate<span className="sr-only"> to {project.title}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
