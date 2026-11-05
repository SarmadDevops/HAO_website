import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { site, whatsappLink } from "../config/site";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import EmailText from "../components/common/EmailText";
import SocialLinks from "../components/common/SocialLinks";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  useSeo({
    title: "Contact Us",
    description: `Get in touch with Humanity Alliance Organization by phone, WhatsApp or email: ${site.contact.phone}, ${site.contact.email}.`,
    path: "/contact",
  });

  const methods = [
    { icon: LuPhone, label: "Call us", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: LuMail, label: "Email us", value: <EmailText email={site.contact.email} />, href: `mailto:${site.contact.email}` },
    site.contact.address && { icon: LuMapPin, label: "Visit us", value: site.contact.address },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        title="Contact Us"
        intro="Questions about donating, volunteering or our projects? We would love to hear from you."
        image={images.elderlyVisit}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <h2 className="heading-lg">Get in touch</h2>
            <p className="lead mt-4">
              The quickest way to reach our team is WhatsApp. You can also call, email or send us a message using the
              form.
            </p>

            <a
              href={whatsappLink("Assalam o Alaikum, I would like to get in touch with HAO.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 rounded-lg bg-primary p-5 text-white transition-colors hover:bg-primary-dark"
            >
              <FaWhatsapp className="h-10 w-10 shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-lg font-semibold">Chat with us on WhatsApp</span>
                <span className="block text-white/85">{site.contact.phone}</span>
              </span>
            </a>

            <ul className="mt-6 space-y-4">
              {methods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">{method.label}</span>
                      <span className="block break-words font-semibold text-dark">{method.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={method.label}>
                    {method.href ? (
                      <a href={method.href} className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-primary">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-lg border border-border p-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Follow our work</h3>
              <SocialLinks className="mt-3" label="HAO on social media" />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-light p-5 sm:p-8">
            <h2 className="heading-md">Send us a message</h2>
            <p className="mb-6 mt-1 text-muted">We read every message and reply as soon as we can.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
