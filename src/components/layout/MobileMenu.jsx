import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { LuMail, LuPhone, LuX } from "react-icons/lu";
import { site } from "../../config/site";
import { mainNav } from "../../data/navigation";
import { useDialog } from "../../hooks/useDialog";
import SocialLinks from "../common/SocialLinks";
import EmailText from "../common/EmailText";
import Logo from "./Logo";

/** Off-canvas navigation for screens narrower than the desktop menu. */
export default function MobileMenu({ isOpen, onClose, onDonate, onVolunteer }) {
  const containerRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div className="absolute inset-0 bg-dark/60 motion-safe:animate-[fadeIn_200ms_ease-out]" onClick={onClose} aria-hidden="true" />
      <div
        id="mobile-menu"
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-surface shadow-2xl focus:outline-none motion-safe:animate-[slideInRight_280ms_cubic-bezier(0.22,1,0.36,1)]"
      >
        <div className="flex h-[72px] items-center justify-between border-b border-border px-4 sm:px-6">
          <Logo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-dark hover:bg-light"
            aria-label="Close menu"
          >
            <LuX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex min-h-[48px] items-center rounded-md px-3 text-lg font-semibold transition-colors ${
                        isActive ? "bg-primary-soft text-primary" : "text-dark hover:bg-light"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 grid gap-3">
            <button type="button" onClick={onDonate} className="btn btn-donate btn-lg w-full">
              Donate Now
            </button>
            <button type="button" onClick={onVolunteer} className="btn btn-outline btn-lg w-full">
              Become a Volunteer
            </button>
          </div>

          <div className="mt-8 space-y-3 border-t border-border pt-6 text-[0.975rem]">
            <a href={site.contact.phoneHref} className="flex items-center gap-3 text-dark hover:text-primary">
              <LuPhone className="h-5 w-5 text-primary" aria-hidden="true" />
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 text-dark hover:text-primary">
              <LuMail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <EmailText email={site.contact.email} />
              </span>
            </a>
            <SocialLinks className="pt-2" label="HAO on social media" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
