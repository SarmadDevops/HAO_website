import { LuArrowRight } from "react-icons/lu";
import { useUI } from "../../context/ui-context";
import { images } from "../../data/images";
import ResponsiveImage from "../common/ResponsiveImage";

/** Membership / volunteer call to action shown under the hero. */
export default function VolunteerCTA() {
  const { openVolunteer } = useUI();

  return (
    <section aria-labelledby="volunteer-cta-title" className="bg-light">
      <div className="container-site py-10 sm:py-12">
        <div className="grid items-center gap-6 rounded-lg border border-border bg-surface p-5 sm:grid-cols-[auto_1fr] sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:p-7">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-md sm:aspect-square sm:w-32 lg:w-36">
            <ResponsiveImage
              image={images.villageVisit}
              sizes="(min-width: 640px) 144px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow !mb-1">Membership</p>
            <h2 id="volunteer-cta-title" className="heading-md sm:text-[1.65rem]">
              Become a Change Maker
            </h2>
            <p className="mt-1.5 max-w-2xl text-muted">
              Register as a member of HAO and help us bring education and clean water to rural areas like
              Tharparkar. Students and professionals from every city are welcome.
            </p>
          </div>
          <button type="button" onClick={openVolunteer} className="btn btn-primary btn-lg sm:col-span-2 lg:col-span-1">
            Apply as Volunteer
            <LuArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
