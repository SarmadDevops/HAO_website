/**
 * Central image registry.
 *
 * Every photo used on the site is imported here once. Components refer to
 * images by key (e.g. `images.waterPump`), so replacing a photo means
 * changing a single import below. Keep alt text accurate to the new photo.
 *
 * To add a photo: export two widths (≈800px and ≈1600px) into
 * src/assets/images/photos/ and register it with `photo()`.
 */

import logo from "../assets/images/brand/hao-logo.png";

import waterPumpLg from "../assets/images/photos/tharparkar-water-pump-1600.jpg";
import waterPumpSm from "../assets/images/photos/tharparkar-water-pump-800.jpg";
import handPumpSm from "../assets/images/photos/tharparkar-hand-pump-handover-800.jpg";
import schoolLg from "../assets/images/photos/hao-school-system-thar-1600.jpg";
import schoolSm from "../assets/images/photos/hao-school-system-thar-800.jpg";
import classroomLg from "../assets/images/photos/rural-classroom-session-1600.jpg";
import classroomSm from "../assets/images/photos/rural-classroom-session-800.jpg";
import villageVisitLg from "../assets/images/photos/village-visit-thar-1600.jpg";
import villageVisitSm from "../assets/images/photos/village-visit-thar-800.jpg";
import elderlyVisitLg from "../assets/images/photos/visiting-elderly-resident-1600.jpg";
import elderlyVisitSm from "../assets/images/photos/visiting-elderly-resident-800.jpg";
import communityMealLg from "../assets/images/photos/community-meal-distribution-1600.jpg";
import communityMealSm from "../assets/images/photos/community-meal-distribution-800.jpg";

import founderPhoto from "../assets/images/team/ismael-chohan.png";
import tayyabaPhoto from "../assets/images/team/tayyaba-640.jpg";
import tehreemPhoto from "../assets/images/team/tehreem-640.jpg";

/**
 * @param {object} opts
 * @param {string} opts.large  largest file
 * @param {string} [opts.small] ~800px file
 * @param {number} opts.width  pixel width of the large file
 * @param {number} opts.height pixel height of the large file
 * @param {string} opts.alt
 */
function photo({ large, small, width, height, alt }) {
  const smallWidth = Math.min(800, width);
  return {
    src: large,
    thumb: small || large,
    srcSet: small && smallWidth < width ? `${small} ${smallWidth}w, ${large} ${width}w` : undefined,
    width,
    height,
    alt,
  };
}

export const images = {
  logo: { src: logo, width: 366, height: 320, alt: "Humanity Alliance Organization logo" },

  waterPump: photo({
    large: waterPumpLg,
    small: waterPumpSm,
    width: 1600,
    height: 1200,
    alt: "Children and villagers gathered around a newly installed hand pump in Tharparkar",
  }),
  handPump: photo({
    large: handPumpSm,
    width: 720,
    height: 473,
    alt: "An HAO volunteer handing over a new hand pump in a Tharparkar village",
  }),
  school: photo({
    large: schoolLg,
    small: schoolSm,
    width: 1600,
    height: 1200,
    alt: "Children cheering outside the HAO School System building in Thar",
  }),
  classroom: photo({
    large: classroomLg,
    small: classroomSm,
    width: 1280,
    height: 720,
    alt: "An HAO volunteer with children during a lesson in a rural classroom",
  }),
  villageVisit: photo({
    large: villageVisitLg,
    small: villageVisitSm,
    width: 1280,
    height: 960,
    alt: "HAO volunteers meeting children during a village visit in Thar",
  }),
  elderlyVisit: photo({
    large: elderlyVisitLg,
    small: elderlyVisitSm,
    width: 1280,
    height: 720,
    alt: "An HAO volunteer sitting with an elderly woman at her home",
  }),
  communityMeal: photo({
    large: communityMealLg,
    small: communityMealSm,
    width: 1080,
    height: 1270,
    alt: "Plates of food being prepared for a community meal",
  }),

  founder: { src: founderPhoto, width: 433, height: 577, alt: "Ismael Chohan, Founder and CEO of HAO" },
  tayyaba: { src: tayyabaPhoto, width: 640, height: 853, alt: "Tayyaba, President of HAO" },
  tehreem: { src: tehreemPhoto, width: 640, height: 960, alt: "Tehreem, Vice President of HAO" },
};
