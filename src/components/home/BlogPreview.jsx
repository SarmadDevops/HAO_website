import { Link } from "react-router-dom";
import { LuArrowRight, LuNewspaper } from "react-icons/lu";
import { posts } from "../../data/blog";
import BlogCard from "../common/BlogCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function BlogPreview() {
  return (
    <section aria-labelledby="blog-title" className="section bg-surface">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            id="blog-title"
            icon={LuNewspaper}
            eyebrow="From the field"
            title="Latest news and stories"
            intro="Updates from our water, education and relief projects."
          />
          <Link to="/blog" className="btn btn-outline shrink-0 self-start md:self-auto">
            All news
            <LuArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal as="li" key={post.slug} index={index}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
