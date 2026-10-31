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
    year: "2016",
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
    title: "We educate deserving kids",
    text: "Free books, school bags and classes for children in rural areas who would otherwise miss out.",
  },
  {
    id: "funds",
    icon: LuHandCoins,
    title: "We collect funds and donate",
    text: "We raise money from individuals and families and put it to work in the communities that need it most.",
  },
  {
    id: "water",
    icon: LuGlassWater,
    title: "We build water wells",
    text: "Hand pumps and wells for remote villages in Tharparkar and beyond, so families have safe water close to home.",
  },
  {
    id: "community",
    icon: LuPackage,
    title: "Community support",
    text: "Monthly rations for registered families and free daily meals through Pakistan Dastarkhwan.",
  },
  {
    id: "relief",
    icon: LuTent,
    title: "Emergency relief",
    text: "Rations, tents, hygiene kits and medical camps when floods and other disasters strike.",
  },
  {
    id: "volunteers",
    icon: LuUsers,
    title: "Volunteer network",
    text: "More than 1,500 volunteers, organised into city chapters across Pakistan and supported by ambassadors abroad.",
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
];
