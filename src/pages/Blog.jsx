import { posts } from "../data/blog";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";
import BlogCard from "../components/common/BlogCard";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";

export default function Blog() {
  useSeo({
    title: "News & Stories",
    description: "News and stories from Humanity Alliance Organization's work in Tharparkar and across Pakistan.",
    path: "/blog",
  });

  return (
    <>
      <PageHero
        title="News & Stories"
        intro="Updates from our water, education and relief projects."
        image={images.classroom}
      />
      <section aria-label="All posts" className="section">
        <div className="container-site">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post, index) => (
              <Reveal as="li" key={post.slug} delay={(index % 3) * 80}>
                <BlogCard post={post} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
