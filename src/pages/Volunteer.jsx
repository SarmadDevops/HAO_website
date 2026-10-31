import { LuCheck } from "react-icons/lu";
import { images } from "../data/images";
import { volunteerDepartments } from "../data/organization";
import { useSeo } from "../hooks/useSeo";
import PageHero from "../components/common/PageHero";
import VolunteerForm from "../components/forms/VolunteerForm";

export default function Volunteer() {
  useSeo({
    title: "Volunteer With Us",
    description:
      "Join more than 1,500 Humanity Alliance Organization volunteers. Register as a member and help with education, clean water and community projects.",
    path: "/volunteer",
    image: images.villageVisit.src,
  });

  return (
    <>
      <PageHero
        title="Become a Change Maker"
        intro="Join HAO as a member or volunteer and help us bring education and clean water to communities like Tharparkar."
        image={images.villageVisit}
      />
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <h2 className="heading-lg">Why volunteer with HAO</h2>
            <p className="lead mt-4">
              HAO is run by more than 1,500 volunteers, organised into city chapters across Pakistan and supported by
              ambassadors abroad. Whatever your skills, there is a place for you.
            </p>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-secondary">Departments you can join</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {volunteerDepartments.map((department) => (
                <li key={department} className="flex items-center gap-2">
                  <LuCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {department}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-light p-5 sm:p-8">
            <h2 className="heading-md">Application form</h2>
            <p className="mb-6 mt-1 text-muted">It takes about two minutes. Our team will contact you after reviewing it.</p>
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
