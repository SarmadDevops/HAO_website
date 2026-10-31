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
      <section aria-labelledby="donate-steps" className="section">
        <div className="container-site max-w-3xl">
          <h2 id="donate-steps" className="heading-lg">
            How to give
          </h2>
          <p className="lead mb-10 mt-3">
            It takes three simple steps. If you have any questions, our team is happy to help on WhatsApp.
          </p>
          <DonatePanel initialFundId={params.get("cause") || undefined} />
        </div>
      </section>
      <CausesSection />
    </>
  );
}
