import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { useUI } from "../../context/ui-context";
import { formatRupees, percentOf } from "../../utils/format";
import ProgressBar from "./ProgressBar";
import ResponsiveImage from "./ResponsiveImage";

export default function CauseCard({ cause, headingLevel: Heading = "h3", showDetails = true }) {
  const { openDonate } = useUI();
  const percent = percentOf(cause.raised, cause.goal);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface">
      <div className="aspect-[16/10] overflow-hidden bg-light">
        <ResponsiveImage
          image={cause.image}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
