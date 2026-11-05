import { Link } from "react-router-dom";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { site, whatsappLink } from "../../config/site";
import { footerLinks } from "../../data/navigation";
import { projects } from "../../data/projects";
import SocialLinks from "../common/SocialLinks";
import NewsletterForm from "../forms/NewsletterForm";
import EmailText from "../common/EmailText";
import Logo from "./Logo";

const linkClass = "text-white/80 transition-colors hover:text-accent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-white/80">
            A volunteer-led charity serving communities across Pakistan since {site.foundedYear}, with clean water,
            education, food and emergency relief.
          </p>
          <p className="mt-4 text-white/70">
            <span lang="ur" dir="rtl" className="mr-2 inline-block font-semibold text-accent">
              {site.taglineUrdu}
            </span>
            <span className="text-sm">— {site.tagline}</span>
          </p>
          <SocialLinks variant="dark" className="mt-6" label="HAO on social media" />
        </div>

        <nav aria-labelledby="footer-links" className="lg:col-span-2">
          <h2 id="footer-links" className="font-sans text-sm font-bold uppercase tracking-wider text-accent">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-projects" className="lg:col-span-3">
          <h2 id="footer-projects" className="font-sans text-sm font-bold uppercase tracking-wider text-accent">
            Our projects
          </h2>
          <ul className="mt-4 space-y-2.5">
            {projects.slice(0, 6).map((project) => (
              <li key={project.slug}>
                <Link to={`/projects/${project.slug}`} className={linkClass}>
                  {project.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/projects" className="font-semibold text-accent hover:underline">
                All projects
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-3">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-accent">Get in touch</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={site.contact.phoneHref} className={`inline-flex items-center gap-3 ${linkClass}`}>
                <LuPhone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 ${linkClass}`}>
                <FaWhatsapp className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className={`inline-flex max-w-full items-center gap-3 ${linkClass}`}>
                <LuMail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="min-w-0 [overflow-wrap:anywhere]">
                  <EmailText email={site.contact.email} />
                </span>
              </a>
            </li>
            {site.contact.address && (
              <li className="flex items-start gap-3 text-white/80">
                <LuMapPin className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.contact.address}
              </li>
            )}
          </ul>

          <h2 className="mt-8 font-sans text-sm font-bold uppercase tracking-wider text-accent">Newsletter</h2>
          <p className="mb-3 mt-2 text-white/80">Occasional updates from our projects.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Formerly {site.formerName}</p>
        </div>
      </div>
    </footer>
  );
}
