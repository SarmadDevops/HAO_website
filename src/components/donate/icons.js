import {
  LuDroplet,
  LuGlobe,
  LuGraduationCap,
  LuHeart,
  LuHouse,
  LuLandmark,
  LuSmartphone,
  LuWallet,
} from "react-icons/lu";

/** Icons for donation funds and campaigns, keyed by fund / cause id. */
const fundIcons = {
  general: LuGlobe,
  "baitul-rehma": LuHouse,
  "clean-water-tharparkar": LuDroplet,
  "education-rural-kids": LuGraduationCap,
};

const paymentIcons = {
  bank: LuLandmark,
  jazzcash: LuSmartphone,
  easypaisa: LuSmartphone,
};

export const fundIcon = (id) => fundIcons[id] ?? LuHeart;

export const paymentIcon = (id) => paymentIcons[id] ?? LuWallet;
