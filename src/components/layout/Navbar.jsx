import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useUI } from "../../context/ui-context";
import { mainNav } from "../../data/navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const linkClass = ({ isActive }) =>
  `relative py-2 font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform ${
    isActive ? "text-primary after:scale-x-100" : "text-dark hover:text-primary after:scale-x-0 hover:after:scale-x-100"
  }`;

export default function Navbar() {
  const { openDonate, openVolunteer } = useUI();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90 transition-shadow ${
        scrolled ? "border-border shadow-[0_6px_20px_-12px_rgb(16_33_26/0.25)]" : "border-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" onClick={openVolunteer} className="btn btn-outline btn-sm hidden xl:inline-flex">
            Volunteer
          </button>
          <button type="button" onClick={() => openDonate()} className="btn btn-donate btn-sm sm:px-5">
            <span>
              Donate<span className="hidden sm:inline"> Now</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-dark transition-colors hover:bg-light lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <LuMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onDonate={() => {
          setMenuOpen(false);
          openDonate();
        }}
        onVolunteer={() => {
          setMenuOpen(false);
          openVolunteer();
        }}
      />
    </header>
  );
}
