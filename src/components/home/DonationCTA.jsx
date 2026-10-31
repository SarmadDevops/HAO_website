import { FaWhatsapp } from "react-icons/fa6";
import { whatsappLink } from "../../config/site";
import { donationFunds } from "../../config/donations";
import { useUI } from "../../context/ui-context";
import { images } from "../../data/images";
import Reveal from "../common/Reveal";
import ResponsiveImage from "../common/ResponsiveImage";

const steps = [
  { title: "Choose a cause", text: "Give to a specific campaign or to our General Fund." },
  { title: "Transfer directly", text: "Send your donation to HAO's account by bank or mobile wallet." },
  { title: "Share your receipt", text: "Send us the receipt on WhatsApp so we can confirm and thank you." },
];

export default function DonationCTA() {
  const { openDonate } = useUI();

  return (
    <section aria-labelledby="donate-cta-title" className="relative isolate overflow-hidden bg-dark text-white">
      <ResponsiveImage
        image={images.waterPump}
        alt=""
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/90 to-dark/70" aria-hidden="true" />

      <div className="container-site section grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow eyebrow-light">Make a donation</p>
          <h2 id="donate-cta-title" className="heading-lg text-white">
            Helping each other can make the world better
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            A single donation can pay for a family's monthly rations, a child's school books or part of a new water
            pump. You choose the cause, and we put your donation to work there.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">You can support</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {donationFunds.map((fund) => (
              <li key={fund.id} className="rounded-full border border-white/25 px-3.5 py-1.5 text-[0.95rem] text-white/90">
                {fund.name}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row">
            <button type="button" onClick={() => openDonate()} className="btn btn-donate btn-lg">
              Donate Now
            </button>
            <a
              href={whatsappLink("Assalam o Alaikum, I would like to know more about donating to HAO.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Ask us a question
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg bg-surface p-6 text-ink sm:p-8">
            <h3 className="heading-md">How to donate</h3>
            <ol className="mt-6 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-dark">{step.title}</p>
                    <p className="mt-0.5 text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
