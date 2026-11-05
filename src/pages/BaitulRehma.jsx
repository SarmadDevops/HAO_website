import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { useUI } from "../context/ui-context";
import { getProject } from "../data/projects";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";

const DONATE_PATH = "/baitul-rehma/donate/";

export default function BaitulRehma() {
  const { openVolunteer } = useUI();
  const project = getProject("baitul-rehma");
  const Icon = project.icon;

  useSeo({
    title: project.title,
    description: project.summary,
    path: project.href,
    image: project.image.src,
  });

  return (
    <>
      <PageHero
        title={project.title}
        intro={project.summary}
        image={project.image}
        logo={project.logo}
        logoClassName="w-44 sm:w-56"
        crumbs={[{ label: "Projects", to: "/projects" }]}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[7fr_4fr] lg:gap-16">
          <article>
            <h2 className="heading-lg">About Baitul Rehma</h2>
            <div className="prose-hao mt-4">
              {project.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h2 className="heading-lg mt-12">Our purpose</h2>
            <div className="prose-hao mt-4">
              <p>
                Baitul Rehma carries HAO's founding belief into action: every human being deserves access to the basic
                necessities of life, and deserves to be treated with compassion and dignity.
              </p>
            </div>

            <div className="mt-10 rounded-lg bg-light p-6 sm:p-8">
              <h2 className="heading-md">How your support helps</h2>
              <p className="mt-3">
                Donations made to the Baitul Rehma Fund are intended for this project. No payment is taken on this
                website: you transfer directly to HAO and share your receipt with our team.
              </p>
              <Link to={DONATE_PATH} className="btn-link mt-4">
                See how to give
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-8 rounded-md border-l-4 border-accent bg-accent-soft p-4 text-ink">
              We are preparing more information about this project. To learn about current activities or to get
              involved, please{" "}
              <Link to="/contact" className="font-semibold text-primary underline">
                contact us
              </Link>
              .
            </p>

            <Link to="/projects" className="btn-link mt-10">
              <LuArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all projects
            </Link>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Support Baitul Rehma">
            <div className="rounded-lg bg-primary-dark p-6 text-white sm:p-8">
              <Icon className="h-10 w-10 text-accent" aria-hidden="true" />
              <h2 className="heading-md mt-4 text-white">Support Baitul Rehma</h2>
              <p className="mt-2 text-white/80">Give directly to the Baitul Rehma Fund in a few short steps.</p>
              <Link to={DONATE_PATH} className="btn btn-donate mt-6 w-full">
                Donate to Baitul Rehma
              </Link>
            </div>
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
    </>
  );
}
