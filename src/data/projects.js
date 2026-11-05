import {
  LuPackage,
  LuSoup,
  LuDroplet,
  LuTent,
  LuGlassWater,
  LuSprout,
  LuHeartHandshake,
  LuHeartPulse,
  LuGraduationCap,
  LuPalette,
  LuHouse,
} from "react-icons/lu";
import { images } from "./images";

/**
 * HAO projects and services.
 *
 * - `image` is optional. Projects without a photo show their icon instead;
 *   add a photo to src/data/images.js and reference it here when available.
 * - `highlights` must contain verified facts only.
 * - `causeId` links a project to a fundraising campaign in causes.js.
 * - `detailsPending` shows a short note that more information is coming.
 * - `featured` projects appear on the home page.
 * - `href` sends the project to its own dedicated page instead of /projects/:slug.
 */
export const projects = [
  {
    slug: "ration-drive",
    title: "Ration Drive",
    icon: LuPackage,
    image: null,
    featured: true,
    summary:
      "Our founding project. Nearly 9,000 ration packages were distributed during the pandemic, and 191 registered families still receive rations every month.",
    body: [
      "Ration Drive is where HAO began. When Pakistan went into lockdown in March 2020, our founding team launched a self-financed ration distribution project for families struggling to get by.",
      "Nearly 9,000 packages were distributed during the pandemic. The need did not end with the lockdown, so the drive became a regular programme: today 191 registered families receive a ration package every month.",
      "Your donations directly fund these packages.",
    ],
    highlights: [
      "Started during the March 2020 COVID-19 lockdown",
      "Nearly 9,000 ration packages distributed during the pandemic",
      "Monthly rations for 191 registered families",
    ],
  },
  {
    slug: "pakistan-dastarkhwan",
    title: "Pakistan Dastarkhwan",
    icon: LuSoup,
    image: images.communityMeal,
    featured: true,
    summary:
      "A daily food drive offering a free meal to people in several cities across Pakistan, with open dastarkhwan setups during Ramadan.",
    body: [
      "Pakistan Dastarkhwan is a daily food drive that serves a free meal to anyone who needs one, in several cities across Pakistan.",
      "During Ramadan we expand the programme with open dastarkhwan setups so that people can break their fast together. Our aim is simple: no one should go to sleep hungry.",
    ],
    highlights: [
      "Free daily meals in multiple cities",
      "Open dastarkhwan setups during Ramadan",
    ],
  },
  {
    slug: "hem-help",
    title: "Hem Help",
    icon: LuDroplet,
    image: null,
    featured: true,
    summary:
      "A blood donation campaign working with hospitals and blood banks so that blood is available for patients in an emergency.",
    body: [
      "Hem Help is HAO's blood donation campaign. We work with major hospitals and blood banks to make sure blood is available for critically ill patients when they need it."
    ],
    highlights: [
      "Partnerships with hospitals and blood banks",
      "Emergency blood availability for critical patients",
    ],
  },
  {
    slug: "natural-disaster-relief",
    title: "Natural Disaster Relief",
    icon: LuTent,
    image: null,
    featured: true,
    summary:
      "Rapid support when disaster strikes, including rations, tents, hygiene kits and medical camps during the 2022 southern Punjab floods.",
    body: [
      "When floods and other disasters hit, families can lose their homes, food and income in a single day. HAO volunteers respond quickly with the essentials people need to get through the first weeks.",
      "During the 2022 floods in southern Punjab we distributed rations, tents and hygiene kits, and set up medical camps in affected areas.",
    ],
    highlights: [
      "Relief work during the 2022 southern Punjab floods",
      "Rations, tents and hygiene kits",
      "Medical camps in affected areas",
    ],
  },
  {
    slug: "water-for-all",
    title: "Water for All",
    icon: LuGlassWater,
    image: images.waterPump,
    featured: true,
    causeId: "clean-water-tharparkar",
    summary:
      "Hand pumps and water wells for remote villages in Tharparkar and beyond, so families have safe water close to home.",
    body: [
      "Tharparkar faces severe drought year after year, and many villages have no reliable source of safe drinking water. Water for All installs hand pumps and wells in the villages that need them most.",
      "Clean water close to home means fewer water-borne illnesses and more time for children to spend in school.",
    ],
    highlights: [
      "Hand pumps and wells in Tharparkar villages",
      "Focused on remote, drought-affected communities",
    ],
  },
  {
    slug: "education",
    title: "Education Initiatives",
    icon: LuGraduationCap,
    image: images.school,
    featured: true,
    causeId: "education-rural-kids",
    summary:
      "The HAO School System in Thar, free evening classes, and books, bags and stationery for children in rural schools.",
    body: [
      "A school bag and a few books can change a child's future. We believe education is the only lasting way to break the cycle of poverty, so it is at the heart of our work in rural areas.",
      "HAO runs the HAO School System in Thar and has started free evening classes in remote districts. We also provide free books and school bags, and recently distributed seating and stationery to three local schools.",
      "Donors can sponsor a child's education for a full year. Contact us to find out how.",
    ],
    highlights: [
      "HAO School System, Thar",
      "Free evening classes in remote districts",
      "Books, school bags, stationery and seating for rural schools",
    ],
  },
  {
    slug: "rang-e-thar",
    title: "Rang-e-Thar",
    icon: LuPalette,
    // TODO(HAO): Temporary placeholder. Replace with a Rang-e-Thar photo.
    image: images.villageVisit,
    featured: true,
    summary:
      "An HAO project dedicated to the people and communities of Tharparkar, where much of our work already takes place.",
    body: [
      "Rang-e-Thar, meaning “colours of Thar”, is an HAO project dedicated to the people and communities of Tharparkar.",
      "It is part of HAO's wider commitment to Thar, alongside our clean water and education work in the region.",
    ],
    highlights: [],
    detailsPending: true,
  },
  {
    slug: "baitul-rehma",
    title: "Baitul Rehma",
    href: "/baitul-rehma/",
    logo: images.baitulRehmaLogo,
    icon: LuHouse,
    // TODO(HAO): Temporary placeholder. Replace with a Baitul Rehma photo.
    image: images.elderlyVisit,
    featured: true,
    causeId: "baitul-rehma",
    summary:
      "An HAO project, meaning “house of mercy”, supported through its own dedicated Baitul Rehma Fund.",
    body: [
      "Baitul Rehma, meaning “house of mercy”, is a project of Humanity Alliance Organization.",
      "It has its own dedicated fund, so donors who want to support this work specifically can direct their giving to it.",
    ],
    highlights: [],
    detailsPending: true,
  },
  {
    slug: "green-pakistan",
    title: "Green Pakistan",
    icon: LuSprout,
    image: null,
    summary:
      "Our environmental conservation initiative, encouraging volunteers and communities to care for the places they live in.",
    body: [
      "Green Pakistan is HAO's environmental conservation initiative. It brings volunteers and local communities together to protect and care for their surroundings.",
    ],
    highlights: [],
    detailsPending: true,
  },
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    icon: LuHeartHandshake,
    image: null,
    summary: "An initiative supporting women in the communities we serve.",
    body: [
      "Our Women Empowerment initiative supports women in the communities we serve, as part of our wider commitment to healthy, self-reliant communities.",
    ],
    highlights: [],
    detailsPending: true,
  },
  {
    slug: "thalassemia-awareness",
    title: "Thalassemia Awareness",
    icon: LuHeartPulse,
    image: null,
    summary:
      "Raising awareness of thalassemia, an inherited blood disorder that affects many families in Pakistan.",
    body: [
      "Thalassemia is an inherited blood disorder, and many patients need regular blood transfusions throughout their lives. Awareness and testing help families understand the condition and make informed decisions."
    ],
    highlights: [],
    detailsPending: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug) => projects.find((project) => project.slug === slug);
