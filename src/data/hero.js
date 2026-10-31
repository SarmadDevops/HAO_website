import { images } from "./images";

/**
 * Home page hero slides.
 * `action` is "donate" (opens the donation dialog, optionally with a cause),
 * "volunteer" (opens the volunteer form) or "link" (uses `to`).
 * `position` controls how the photo is cropped on narrow and wide screens.
 */
export const heroSlides = [
  {
    id: "clean-water",
    eyebrow: "Empowering rural communities",
    title: "Clean Water for Tharparkar",
    description:
      "Safe drinking water changes everything for a village: health, schooling and time. We install hand pumps and wells where they are needed most.",
    image: images.waterPump,
    position: { mobile: "62% 60%", desktop: "50% 55%" },
    primary: { label: "Donate Now", action: "donate", causeId: "clean-water-tharparkar" },
    secondary: { label: "Join as Volunteer", action: "volunteer" },
  },
  {
    id: "education",
    eyebrow: "We are always open for children",
    title: "Education for Every Child",
    description:
      "From the HAO School System in Thar to books and school bags for rural children, we help children learn in a place that is fit for learning.",
    image: images.school,
    position: { mobile: "45% 40%", desktop: "50% 35%" },
    primary: { label: "Donate Now", action: "donate", causeId: "education-rural-kids" },
    secondary: { label: "Join as Volunteer", action: "volunteer" },
  },
];
