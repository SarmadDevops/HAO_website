import { gallery } from "../data/gallery";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function GalleryPage() {
  useSeo({
    title: "Gallery",
    description: "Photos from Humanity Alliance Organization's water, education and community projects.",
    path: "/gallery",
    image: images.waterPump.src,
  });

  return (
    <>
      <PageHero
        title="Gallery"
        intro="Photos taken by our volunteers in Tharparkar and the communities we serve."
        image={images.villageVisit}
      />
      <section aria-label="Photo gallery" className="section">
        <div className="container-site">
          <GalleryGrid items={gallery} />
        </div>
      </section>
    </>
  );
}
