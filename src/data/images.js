/**
 * Central image registry.
 *
 * Every photo used on the site is registered here once. Components refer to
 * images by key (e.g. `images.waterPump`), so replacing a photo means
 * changing a single entry below. Keep alt text accurate to the new photo.
 *
 * To add a photo: export WebP files named `<name>-<width>.webp` into
 * src/assets/images/optimized/ (480, 800 and 1600px wide, without upscaling;
 * quality ≈82) and register it with `photo()`.
 *
 * The original files stay in photos/, team/ and thar/ as sources. The JPEG
 * `fallback` is what social link previews use (see useSeo), since not every
 * crawler accepts WebP.
 */

import logo from "../assets/images/brand/hao-logo.png";
import baitulRehmaLogo from "../assets/images/brand/baiturehma.jpeg";

import waterPumpJpg from "../assets/images/photos/tharparkar-water-pump-1600.jpg";
import handPumpJpg from "../assets/images/photos/tharparkar-hand-pump-handover-800.jpg";
import schoolJpg from "../assets/images/photos/hao-school-system-thar-1600.jpg";
import classroomJpg from "../assets/images/photos/rural-classroom-session-1600.jpg";
import villageVisitJpg from "../assets/images/photos/village-visit-thar-1600.jpg";
import elderlyVisitJpg from "../assets/images/photos/visiting-elderly-resident-1600.jpg";
import communityMealJpg from "../assets/images/photos/community-meal-distribution-1600.jpg";
import uzairFounderWebp from "../assets/images/uzair-founder.webp";

const optimized = import.meta.glob("../assets/images/optimized/*.webp", { eager: true, import: "default" });
const webp = (name, width) => optimized[`../assets/images/optimized/${name}-${width}.webp`];

/**
 * @param {object} opts
 * @param {string} opts.name  file name prefix in src/assets/images/optimized/
 * @param {number[]} opts.widths  available widths, smallest first
 * @param {number} opts.height  pixel height of the largest file
 * @param {string} opts.alt
 * @param {string} [opts.fallback]  JPEG for `src`, used by social link previews
 */
function photo({ name, widths, height, alt, fallback }) {
  const width = widths[widths.length - 1];
  const full = webp(name, width);
  return {
    src: fallback ?? full,
    full,
    srcSet: widths.length > 1 ? widths.map((w) => `${webp(name, w)} ${w}w`).join(", ") : undefined,
    width,
    height,
    alt,
  };
}

const LANDSCAPE = [480, 800, 1600];

export const images = {
  logo: { src: logo, width: 366, height: 320, alt: "Humanity Alliance Organization logo" },
  baitulRehmaLogo: { src: baitulRehmaLogo, width: 1236, height: 559, alt: "Baitul Rehma logo" },

  waterPump: photo({
    name: "water-pump",
    widths: LANDSCAPE,
    height: 1200,
    fallback: waterPumpJpg,
    alt: "Children and villagers gathered around a newly installed hand pump in Tharparkar",
  }),
  handPump: photo({
    name: "hand-pump",
    widths: [480, 720],
    height: 473,
    fallback: handPumpJpg,
    alt: "An HAO volunteer handing over a new hand pump in a Tharparkar village",
  }),
  school: photo({
    name: "school",
    widths: LANDSCAPE,
    height: 1200,
    fallback: schoolJpg,
    alt: "Children cheering outside the HAO School System building in Thar",
  }),
  classroom: photo({
    name: "classroom",
    widths: [480, 800, 1280],
    height: 720,
    fallback: classroomJpg,
    alt: "An HAO volunteer with children during a lesson in a rural classroom",
  }),
  villageVisit: photo({
    name: "village-visit",
    widths: [480, 800, 1280],
    height: 960,
    fallback: villageVisitJpg,
    alt: "HAO volunteers meeting children during a village visit in Thar",
  }),
  elderlyVisit: photo({
    name: "elderly-visit",
    widths: [480, 800, 1280],
    height: 720,
    fallback: elderlyVisitJpg,
    alt: "An HAO volunteer sitting with an elderly woman at her home",
  }),
  communityMeal: photo({
    name: "community-meal",
    widths: [480, 800, 1080],
    height: 1270,
    fallback: communityMealJpg,
    alt: "Plates of food being prepared for a community meal",
  }),

  thar1: photo({ name: "thar-1", widths: LANDSCAPE, height: 1200, alt: "HAO community activities in Thar – 1" }),
  thar2: photo({ name: "thar-2", widths: LANDSCAPE, height: 2133, alt: "HAO community activities in Thar – 2" }),
  thar3: photo({ name: "thar-3", widths: LANDSCAPE, height: 2133, alt: "HAO community activities in Thar – 3" }),
  thar4: photo({ name: "thar-4", widths: LANDSCAPE, height: 2133, alt: "HAO community activities in Thar – 4" }),
  thar5: photo({ name: "thar-5", widths: LANDSCAPE, height: 2133, alt: "HAO community activities in Thar – 5" }),
  thar6: photo({ name: "thar-6", widths: LANDSCAPE, height: 2133, alt: "HAO community activities in Thar – 6" }),
  thar7: photo({ name: "thar-7", widths: [480, 800, 960], height: 1280, alt: "HAO community activities in Thar – 7" }),

  founder: photo({ name: "ismael-chohan", widths: [433], height: 577, alt: "Ismael Chohan, CEO of HAO" }),
  // OLD CONTENT: uzair: photo({ name: "uzair", widths: [480, 640], height: 590, alt: "Uzair Rasheed, Founder of HAO" }),
  uzair: { src: uzairFounderWebp, width: 2047, height: 1980, alt: "Uzair Rasheed, Founder of HAO" },
  tayyaba: photo({ name: "tayyaba", widths: [480, 640], height: 853, alt: "Tayyaba, President of HAO" }),
  tehreem: photo({ name: "tehreem", widths: [480, 640], height: 960, alt: "Tehreem, Vice President of HAO" }),
};
