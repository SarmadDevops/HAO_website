import {
  LuGraduationCap,
  LuHandCoins,
  LuGlassWater,
  LuPackage,
  LuTent,
  LuUsers,
} from "react-icons/lu";

/** Milestones shown in the About sections. Verified facts only. */
export const history = [
  {
    // OLD CONTENT: year: "2016",
    year: "2019",
    title: "Charitable work begins",
    text: "A small group, then called Human Aid Organization, starts helping families in need.",
  },
  {
    year: "2020",
    title: "Official launch during lockdown",
    text: "In March 2020, as COVID-19 closed the country, we launched a self-financed ration distribution project.",
  },
  {
    year: "After the pandemic",
    title: "From relief to long-term work",
    text: "The need did not end with the lockdown, so we expanded into water, education, food and health projects.",
  },
  {
    year: "Today",
    title: "A national and international network",
    text: "More than 1,500 volunteers, city chapters across Pakistan and ambassadors in the USA, UK, Germany and Australia.",
  },
];

/**
 * Impact statistics. Edit values here only.
 * `value` animates as a count-up; `display` is shown as-is (no animation).
 */
export const impactStats = [
  { id: "volunteers", value: 1500, suffix: "+", label: "Volunteers worldwide" },
  { id: "rations", prefix: "~", value: 9000, label: "Ration packages during the pandemic" },
  { id: "families", value: 191, label: "Families receiving monthly rations" },
  { id: "chapters", display: "Nationwide", label: "City chapters across Pakistan" },
  { id: "ambassadors", display: "International", label: "Ambassadors in the USA, UK, Germany & Australia" },
];

/** "How we help" items on the home page. */
export const waysWeHelp = [
  {
    id: "education",
    icon: LuGraduationCap,
    // OLD CONTENT: title: "We educate deserving kids",
    // OLD CONTENT: text: "Free books, school bags and classes for children in rural areas who would otherwise miss out.",
    title: "Educational Development & Support",
    text: "Providing educational assistance to underprivileged children through free books, school supplies, and learning opportunities, particularly in underserved rural communities.",
  },
  {
    id: "funds",
    icon: LuHandCoins,
    // OLD CONTENT: title: "We collect funds and donate",
    // OLD CONTENT: text: "We raise money from individuals and families and put it to work in the communities that need it most.",
    title: "Fundraising & Community Development",
    text: "Mobilising financial contributions from individuals and families to support humanitarian initiatives and community development projects where assistance is needed most.",
  },
  {
    id: "water",
    icon: LuGlassWater,
    // OLD CONTENT: title: "We build water wells",
    // OLD CONTENT: text: "Hand pumps and wells for remote villages in Tharparkar and beyond, so families have safe water close to home.",
    title: "Clean Water & Sanitation Projects",
    text: "Improving access to safe drinking water through the installation of hand pumps and water wells in remote communities, including Tharparkar and other underserved regions.",
  },
  {
    id: "community",
    icon: LuPackage,
    // OLD CONTENT: title: "Community support",
    // OLD CONTENT: text: "Monthly rations for registered families and free daily meals through Pakistan Dastarkhwan.",
    title: "Food Security & Community Welfare",
    text: "Supporting vulnerable families through monthly ration distributions and providing daily free meals through our Pakistan Dastarkhwan initiative.",
  },
  {
    id: "relief",
    icon: LuTent,
    // OLD CONTENT: title: "Emergency relief",
    // OLD CONTENT: text: "Rations, tents, hygiene kits and medical camps when floods and other disasters strike.",
    title: "Disaster Relief & Emergency Response",
    text: "Delivering essential relief assistance, including food supplies, temporary shelter, hygiene kits, and medical support to communities affected by floods and other emergencies.",
  },
  {
    id: "volunteers",
    icon: LuUsers,
    // OLD CONTENT: title: "Volunteer network",
    // OLD CONTENT: text: "More than 1,500 volunteers, organised into city chapters across Pakistan and supported by ambassadors abroad.",
    title: "Volunteer Engagement & National Outreach",
    text: "Building and coordinating a network of over 1,500 volunteers through city chapters across Pakistan, strengthened by international ambassadors and community representatives abroad.",
  },
];

/** Departments offered on the volunteer form (from HAO's existing form). */
export const volunteerDepartments = [
  "HR",
  "Media",
  "Publication",
  "Administration",
  "Finance",
  "Logistics",
  "Research",
  "PR & Marketing",
  "Food Drive Management",
];
