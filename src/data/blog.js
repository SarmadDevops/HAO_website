import { images } from "./images";

/**
 * News and blog posts, newest first.
 * `date` uses ISO format (YYYY-MM-DD); set to null to hide it.
 * `body` is a list of paragraphs. Use { heading: "..." } for a sub-heading.
 *
 * TODO(HAO): Add publication dates for the posts below.
 */
export const posts = [
  {
    slug: "water-crisis-tharparkar",
    title: "Water Crisis: Bringing Hope to Tharparkar",
    category: "Clean Water",
    date: null,
    author: "HAO Team",
    image: images.waterPump,
    excerpt:
      "Tharparkar faces severe drought every year. Here is how new water pumps are changing daily life in the villages we work in.",
    body: [
      "Tharparkar faces extreme drought every year, and safe drinking water is out of reach for many of its villages.",
      "Through our recent campaigns we have installed 50 solar water pumps in the most affected villages. Clean water has sharply reduced disease and has made a real difference to the lives of families who depend on it.",
      "Our next phase is the construction of new water wells, so that no child in these villages goes thirsty. You can be part of it.",
    ],
    causeId: "clean-water-tharparkar",
  },
  {
    slug: "education-for-every-child",
    title: "Education for Every Child: Breaking the Chain of Poverty",
    category: "Education",
    date: null,
    author: "HAO Team",
    image: images.school,
    excerpt:
      "A school bag and a few books can change a child's future. Why rural education sits at the centre of our work.",
    body: [
      "A school bag and a few books can completely change a child's future.",
      "Humanity Alliance Organization has started free evening classes in remote districts. We believe rural education is the only sustainable way to break the cycle of poverty that passes from one generation to the next.",
      "We invite donors to sponsor a child's education for a whole year. Get in touch to find out how.",
    ],
    causeId: "education-rural-kids",
  },
  {
    slug: "reality-of-rural-schools",
    title: "The Reality of Rural Schools: Building Better Infrastructure",
    category: "Education",
    date: null,
    author: "HAO Team",
    image: images.classroom,
    excerpt:
      "Many rural children study in the open, exposed to extreme weather. What we are doing to give them a proper place to learn.",
    body: [
      "Many children in rural areas study under the open sky, exposed to extreme weather.",
      "We recently distributed proper seating and stationery to three local schools. Our mission is to provide a real learning environment so that students can focus on their education.",
    ],
    causeId: "education-rural-kids",
  },
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
