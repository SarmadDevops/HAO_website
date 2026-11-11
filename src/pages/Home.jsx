import AboutPreview from "../components/home/AboutPreview";
import BlogPreview from "../components/home/BlogPreview";
import CausesSection from "../components/home/CausesSection";
import DonationCTA from "../components/home/DonationCTA";
import FounderMessage from "../components/home/FounderMessage";
import GallerySection from "../components/home/GallerySection";
import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StatsStrip from "../components/home/StatsStrip";
import TeamSection from "../components/home/TeamSection";
import VolunteerCTA from "../components/home/VolunteerCTA";
import { useSeo } from "../hooks/useSeo";

export default function Home() {
  useSeo({ path: "/" });

  return (
    // Previous wrapper: <> … </>. "contents" keeps layout identical; "home-page" scopes homepage-only heading colours.
    <div className="home-page contents">
      <Hero />
      <VolunteerCTA />
      <AboutPreview />
      <StatsStrip />
      <CausesSection />
      <ProjectsSection />
      <ImpactSection />
      <GallerySection />
      <DonationCTA />
      <FounderMessage />
      <TeamSection />
      <BlogPreview />
    </div>
  );
}
