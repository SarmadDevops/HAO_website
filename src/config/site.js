/**
 * Organisation-wide facts used across the site.
 * Only verified information belongs here. Leave a value as null to hide it.
 */

const phoneDigits = "923364304928";

export const site = {
  name: "Humanity Alliance Organization",
  shortName: "HAO",
  formerName: "Human Aid Organization",
  // Translation of the Urdu line on the HAO logo: "ایک قدم انسانیت کی طرف".
  tagline: "One step towards humanity",
  taglineUrdu: "ایک قدم انسانیت کی طرف",
  foundedYear: 2016,
  description:
    "Humanity Alliance Organization (HAO) is a volunteer-led charity in Pakistan. We bring clean water to Tharparkar, support the education of rural children, provide monthly rations and free meals, and respond when disaster strikes.",

  // Public production URL, e.g. https://www.example.org (set VITE_SITE_URL in .env).
  url: (import.meta.env.VITE_SITE_URL || "").replace(/\/+$/, ""),

  contact: {
    email: "humanityallianceorganization@gmail.com",
    phone: "+92 336 4304928",
    phoneHref: `tel:+${phoneDigits}`,
    whatsappNumber: phoneDigits,
    // TODO(HAO): The previous version of this site listed "24 Griffin Canal Road, Lahore".
    // Confirm the official address before setting it here; null keeps it hidden.
    address: null,
  },

  social: [
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/share/1MSFVsQgt9/",
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@humanityallianceorganization",
      href: "https://www.instagram.com/humanityallianceorganization/",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/${phoneDigits}`,
    },
  ],
};

/** Builds a WhatsApp chat link with an optional pre-filled message. */
export function whatsappLink(message) {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
