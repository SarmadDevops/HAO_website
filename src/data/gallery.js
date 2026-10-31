import { images } from "./images";

/**
 * Gallery photos, in display order.
 * To add a photo: register it in src/data/images.js, then add an entry here.
 * The caption is shown in the full-screen viewer.
 */
export const gallery = [
  { id: "water-pump", image: images.waterPump, caption: "A new hand pump for a village in Tharparkar" },
  { id: "school", image: images.school, caption: "Celebrations outside the HAO School System, Thar" },
  { id: "community-meal", image: images.communityMeal, caption: "Preparing a community meal" },
  { id: "village-visit", image: images.villageVisit, caption: "Meeting children during a village visit" },
  { id: "classroom", image: images.classroom, caption: "Time with students in a rural classroom" },
  { id: "elderly-visit", image: images.elderlyVisit, caption: "Visiting an elderly resident at home" },
  { id: "hand-pump", image: images.handPump, caption: "Handing over a hand pump to the community" },
];
