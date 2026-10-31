import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { site } from "../../config/site";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

/** Scrolls to the top on page change, or to the #hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

/** schema.org Organization data built only from verified facts in config/site.js. */
function OrganizationSchema() {
  const origin = site.url || (typeof window !== "undefined" ? window.location.origin : "");
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: [site.shortName, site.formerName],
    url: `${origin}/`,
    logo: `${origin}/icon-512.png`,
    description: site.description,
    foundingDate: String(site.foundedYear),
    email: site.contact.email,
    telephone: site.contact.phone.replace(/\s/g, ""),
    sameAs: site.social.filter((link) => link.id !== "whatsapp").map((link) => link.href),
  };
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

function PageFallback() {
  return (
    <div className="container-site flex min-h-[50vh] items-center justify-center" role="status">
      <span className="sr-only">Loading page…</span>
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary-soft border-t-primary" aria-hidden="true" />
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollManager />
      <OrganizationSchema />
      <TopBar />
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
