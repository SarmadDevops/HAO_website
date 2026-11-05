import { LuHandCoins, LuHeart, LuLandmark, LuReceipt } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { whatsappLink } from "../../config/site";
import { donationFunds } from "../../config/donations";
import { useUI } from "../../context/ui-context";
import { images } from "../../data/images";
import Reveal from "../common/Reveal";
import ResponsiveImage from "../common/ResponsiveImage";
import SectionHeader from "../common/SectionHeader";

const steps = [
  { icon: LuHeart, title: "Choose a cause", text: "Give to a specific campaign or to our General Fund." },
  { icon: LuLandmark, title: "Transfer directly", text: "Send your donation to HAO's account by bank or mobile wallet." },
  { icon: LuReceipt, title: "Share your receipt", text: "Send us the receipt on WhatsApp so we can confirm and thank you." },
];

export default function DonationCTA() {
  const { openDonate } = useUI();

  return (
    <section aria-labelledby="donate-cta-title" className="relative isolate overflow-hidden bg-dark text-white">
      <ResponsiveImage
        image={images.waterPump}
        alt=""
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark/80 via-dark/90 to-dark" aria-hidden="true" />

      <div className="container-site section">
        <Reveal className="text-center">
          <SectionHeader
            id="donate-cta-title"
            align="center"
            tone="light"
            icon={LuHandCoins}
            eyebrow="Make a donation"
            title="Helping each other can make the world better"
            intro="A single donation can pay for a family's monthly rations, a child's school books or part of a new water pump. You choose the cause, and we put your donation to work there."
          />
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2" aria-label="You can support">
            {donationFunds.map((fund) => (
              <li key={fund.id} className="rounded-full border border-white/25 px-3.5 py-1.5 text-[0.95rem] text-white/90">
                {fund.name}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col justify-center gap-3 xs:flex-row">
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

        <div className="mt-14">
          <h3 className="sr-only">How to donate</h3>
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  index={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-dark">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-2xl font-semibold text-white/25" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-5 text-lg font-bold text-white">{step.title}</p>
                  <p className="mt-1 text-white/70">{step.text}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
