import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { useUI } from "../../context/ui-context";
import { formatRupees, percentOf } from "../../utils/format";
import { fundIcon } from "../donate/icons";
import ProgressBar from "./ProgressBar";
import ResponsiveImage from "./ResponsiveImage";

export default function CauseCard({ cause, headingLevel: Heading = "h3", showDetails = true }) {
  const { openDonate } = useUI();
  const percent = percentOf(cause.raised, cause.goal);
  const Icon = fundIcon(cause.id);

  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-surface transition-shadow duration-300 hover:shadow-[0_18px_40px_-16px_rgb(var(--color-dark)/0.35)]">
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden rounded-t-[calc(theme(borderRadius.lg)-1px)] bg-light">
          <ResponsiveImage
            image={cause.image}
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute bottom-0 left-5 inline-flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-xl bg-accent text-dark shadow-sm">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-9 sm:p-6 sm:pt-10">
        <Heading className="heading-md">{cause.title}</Heading>
        <p className="mt-2 flex-1 text-muted">{cause.summary}</p>

        <div className="mt-5">
          <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
            <span className="font-semibold text-dark">{percent}% funded</span>
          </div>
          <ProgressBar percent={percent} label={`${cause.title}: ${percent}% of goal raised`} />
          <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-muted">Raised</dt>
              <dd className="font-semibold text-dark">{formatRupees(cause.raised)}</dd>
            </div>
            <div className="text-right">
              <dt className="text-muted">Goal</dt>
              <dd className="font-semibold text-dark">{formatRupees(cause.goal)}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="btn btn-donate flex-1" onClick={() => openDonate(cause.id)}>
            Donate
          </button>
          {showDetails && cause.projectSlug && (
            <Link to={`/projects/${cause.projectSlug}`} className="btn btn-outline flex-1">
              Details
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">about {cause.title}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
