import { images } from "./images";

export const founder = {
  name: "Ismael Chohan",
  role: "Founder & CEO",
  photo: images.founder,
  message: [
    "Welcome to Humanity Alliance Organization. Our work rests on one belief: every human being deserves access to the basic necessities of life.",
    "Whether it is bringing clean, safe drinking water to remote areas like Tharparkar or making sure that children from poor families receive a good education, we are committed to serving humanity.",
    "We want to build a world where compassion leads to action. With our dedicated volunteers, generous donors and supportive community, we are turning hope into reality. Thank you for standing with us and for being part of this journey.",
  ],
};

/**
 * Core team. Add a member by appending an object:
 * { id, name, role, photo, bio?, social?: [{ id: "instagram" | "facebook" | "linkedin", href }] }
 * Register the photo in src/data/images.js first.
 */
export const team = [
  { id: "tayyaba", name: "Tayyaba", role: "President", photo: images.tayyaba, bio: null, social: [] },
  { id: "tehreem", name: "Tehreem", role: "Vice President", photo: images.tehreem, bio: null, social: [] },
];
