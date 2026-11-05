import { Link } from "react-router-dom";
import { LuArrowRight, LuCamera } from "react-icons/lu";
import { gallery } from "../../data/gallery";
import GalleryGrid from "../gallery/GalleryGrid";
import SectionHeader from "../common/SectionHeader";

const PREVIEW_COUNT = 6;

export default function GallerySection() {
  return (
    <section aria-labelledby="gallery-title" className="section bg-surface">
      <div className="container-site">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            id="gallery-title"
            icon={LuCamera}
            eyebrow="We are always open for children"
            title="Moments from the field"
            intro="Photos taken by our volunteers in Tharparkar and the communities we serve."
          />
          {gallery.length > PREVIEW_COUNT && (
            <Link to="/gallery" className="btn btn-outline shrink-0 self-start md:self-auto">
              View full gallery
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
        <GalleryGrid items={gallery.slice(0, PREVIEW_COUNT)} />
      </div>
    </section>
  );
}
