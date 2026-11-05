import { images } from "./images";

/**
 * Gallery photos, in display order.
 * To add a photo: register it in src/data/images.js, then add an entry here.
 * The caption is shown in the full-screen viewer.
 * `position` (optional) adjusts the crop on the Gallery page's 4:3 cards.
 */
export const gallery = [
  { id: "water-pump", image: images.waterPump, caption: "A new hand pump for a village in Tharparkar" },
  { id: "school", image: images.school, caption: "Celebrations outside the HAO School System, Thar" },
  { id: "community-meal", image: images.communityMeal, caption: "Preparing a community meal" },
  { id: "village-visit", image: images.villageVisit, caption: "Meeting children during a village visit" },
  { id: "classroom", image: images.classroom, caption: "Time with students in a rural classroom" },
  { id: "elderly-visit", image: images.elderlyVisit, caption: "Visiting an elderly resident at home" },
  { id: "hand-pump", image: images.handPump, caption: "Handing over a hand pump to the community" },
  { id: "thar-1", image: images.thar1, caption: images.thar1.alt },
  { id: "thar-2", image: images.thar2, caption: images.thar2.alt },
  { id: "thar-3", image: images.thar3, caption: images.thar3.alt, position: "50% 35%" },
  { id: "thar-4", image: images.thar4, caption: images.thar4.alt, position: "50% 25%" },
  { id: "thar-5", image: images.thar5, caption: images.thar5.alt, position: "50% 35%" },
  { id: "thar-6", image: images.thar6, caption: images.thar6.alt, position: "50% 35%" },
  { id: "thar-7", image: images.thar7, caption: images.thar7.alt, position: "50% 25%" },
];
