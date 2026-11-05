import { images } from "./images";

/**
 * Active fundraising campaigns.
 * Amounts are in Pakistani rupees. The progress percentage is calculated
 * from `raised` and `goal`, so only these two numbers need updating.
 *
 * TODO(HAO): Figures below are carried over from the earlier HAO website.
 * Update them from finance records whenever new totals are confirmed.
 */
export const causes = [
  {
    id: "clean-water-tharparkar",
    title: "Clean Water Projects in Tharparkar",
    summary:
      "Access to safe water improves health, keeps children in school and gives families back hours of their day. Help us reach more villages.",
    image: images.handPump,
    goal: 10000000,
    raised: 5750000,
    projectSlug: "water-for-all",
  },
  {
    id: "education-rural-kids",
    title: "Education Support for Rural Kids",
    summary:
      "Education is the surest way out of poverty. Help us build more classrooms and provide books, bags and stationery to children in rural areas.",
    image: images.classroom,
    goal: 5000000,
    raised: 4000000,
    projectSlug: "education",
  },
  {
    // TODO(HAO): Add `goal` and `raised` once verified, and replace the placeholder photo.
    // Without them the card shows "Funding details coming soon" instead of figures.
    id: "baitul-rehma",
    title: "Baitul Rehma",
    summary:
      "Baitul Rehma, meaning “house of mercy”, is an HAO project with its own dedicated fund. Give directly to support this work.",
    image: images.elderlyVisit,
    logo: images.baitulRehmaLogo,
    detailsHref: "/baitul-rehma/",
    donateHref: "/baitul-rehma/donate/",
  },
];

export const getCause = (id) => causes.find((cause) => cause.id === id);
