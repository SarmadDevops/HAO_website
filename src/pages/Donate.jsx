import { useSearchParams } from "react-router-dom";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import DonatePanel from "../components/donate/DonatePanel";
import CausesSection from "../components/home/CausesSection";

export default function Donate() {
  const [params] = useSearchParams();

  useSeo({
    title: "Donate",
    description:
      "Support clean water in Tharparkar, education for rural children and HAO's community projects. Learn how to donate to Humanity Alliance Organization.",
    path: "/donate",
    image: images.waterPump.src,
  });

  return (
    <>
      <PageHero
        title="Donate"
        intro="Choose a cause and transfer directly to HAO. No payment is taken on this website."
        image={images.waterPump}
        imagePosition="50% 60%"
      />
      <section aria-labelledby="donate-steps" className="section bg-surface">
        <div className="container-site max-w-3xl">
          <h2 id="donate-steps" className="heading-lg">
            How to give
          </h2>
          <p className="lead mb-10 mt-3">
            A few short steps: choose an amount and a cause, see how to transfer, then share your receipt with our team.
            Questions? We are happy to help on WhatsApp.
          </p>
          <div className="rounded-2xl border border-border/60 bg-surface p-5 shadow-[0_18px_40px_-24px_rgb(var(--color-dark)/0.3)] sm:p-8">
            <DonatePanel initialFundId={params.get("cause") || undefined} />
          </div>
        </div>
      </section>
      <CausesSection />
    </>
  );
}
