import { LuMail, LuPhone } from "react-icons/lu";
import { site } from "../../config/site";
import SocialLinks from "../common/SocialLinks";

export default function TopBar() {
  return (
    <div className="hidden bg-dark text-sm text-white/85 md:block">
      <div className="container-site flex h-10 items-center justify-between gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-accent">
              <LuMail className="h-4 w-4 text-accent" aria-hidden="true" />
              {site.contact.email}
            </a>
          </li>
          <li>
            <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 hover:text-accent">
              <LuPhone className="h-4 w-4 text-accent" aria-hidden="true" />
              {site.contact.phone}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <span className="text-white/70">Follow us</span>
          <SocialLinks variant="plain" size="sm" label="HAO on social media" />
        </div>
      </div>
    </div>
  );
}
