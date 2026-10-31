import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { site } from "../../config/site";

const ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
};

/**
 * Icon links to social profiles. Defaults to HAO's own accounts.
 * `variant`: "dark" (on dark backgrounds), "light" (on light backgrounds), "plain".
 */
export default function SocialLinks({ links = site.social, variant = "light", size = "md", label, className = "" }) {
  const box = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-[18px] w-[18px]";
  const styles = {
    dark: "border border-white/25 text-white hover:border-accent hover:bg-accent hover:text-dark",
    light: "border border-border text-primary hover:border-primary hover:bg-primary hover:text-white",
    plain: "text-white/85 hover:text-accent",
  }[variant];

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`} aria-label={label}>
      {links.map((link) => {
        const Icon = ICONS[link.id];
        if (!Icon || !link.href) return null;
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in a new tab)`}
              className={`inline-flex items-center justify-center rounded-full transition-colors ${box} ${styles}`}
            >
              <Icon className={icon} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
