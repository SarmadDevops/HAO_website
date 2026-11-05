import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { getProject } from "../data/projects";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import DonatePanel from "../components/donate/DonatePanel";

export default function BaitulRehmaDonate() {
  const project = getProject("baitul-rehma");

  useSeo({
    title: "Support Baitul Rehma",
    description:
      "Donate to the Baitul Rehma Fund of Humanity Alliance Organization. Transfer directly to HAO and share your receipt with our team.",
    path: "/baitul-rehma/donate/",
    image: project.image.src,
  });

  return (
    <>
      <PageHero
        title="Support Baitul Rehma"
        intro="Your donation is intended for Baitul Rehma. Transfer directly to HAO. No payment is taken on this website."
        image={project.image}
        logo={project.logo}
        logoClassName="w-32 sm:w-40"
        crumbs={[
          { label: "Projects", to: "/projects" },
          { label: project.title, to: project.href },
        ]}
      />
      <section aria-labelledby="baitul-rehma-donate-steps" className="section bg-surface">
        <div className="container-site max-w-3xl">
          <Link to={project.href} className="btn-link mb-6">
            <LuArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Baitul Rehma
          </Link>
          <h2 id="baitul-rehma-donate-steps" className="heading-lg">
            How to give to Baitul Rehma
          </h2>
          <p className="lead mb-10 mt-3">
            The Baitul Rehma Fund is already selected for you. Choose an amount, see how to transfer, then share your
            receipt with our team. Questions? We are happy to help on WhatsApp.
          </p>
          <div className="rounded-2xl border border-border/60 bg-surface p-5 shadow-[0_18px_40px_-24px_rgb(var(--color-dark)/0.3)] sm:p-8">
            <DonatePanel initialFundId="baitul-rehma" />
          </div>
        </div>
      </section>
    </>
  );
}
