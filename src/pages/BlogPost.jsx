import { Link, useParams } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { getPost, posts } from "../data/blog";
import { useUI } from "../context/ui-context";
import { useSeo } from "../hooks/useSeo";
import { formatDate } from "../utils/format";
import BlogCard from "../components/common/BlogCard";
import ResponsiveImage from "../components/common/ResponsiveImage";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  return <PostContent key={post.slug} post={post} />;
}

function PostContent({ post }) {
  const { openDonate, openVolunteer } = useUI();
  const date = formatDate(post.date);
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  useSeo({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image.src,
    type: "article",
  });

  return (
    <>
      <article className="section">
        <div className="container-site max-w-3xl">
          <Link to="/blog" className="btn-link mb-8">
            <LuArrowLeft className="h-4 w-4" aria-hidden="true" />
            All news
          </Link>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="font-semibold uppercase tracking-wider text-secondary">{post.category}</span>
            {date && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{date}</time>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>By {post.author}</span>
          </p>
          <h1 className="heading-xl mt-3">{post.title}</h1>
          <p className="lead mt-5">{post.excerpt}</p>
        </div>

        <div className="container-site mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-lg">
            <ResponsiveImage image={post.image} priority sizes="(min-width: 1024px) 1000px, 100vw" className="h-auto w-full" />
          </div>
        </div>

        <div className="container-site mt-10 max-w-3xl">
          <div className="prose-hao">
            {post.body.map((block) =>
              typeof block === "string" ? <p key={block.slice(0, 32)}>{block}</p> : <h2 key={block.heading}>{block.heading}</h2>
            )}
          </div>

          <aside className="mt-12 rounded-lg bg-primary-dark p-6 text-white sm:p-8" aria-label="Get involved">
            <h2 className="heading-md text-white">Be part of the next chapter</h2>
            <p className="mt-2 text-white/80">Your donation or your time can help us reach more families.</p>
            <div className="mt-6 flex flex-col gap-3 xs:flex-row">
              <button type="button" onClick={() => openDonate(post.causeId || null)} className="btn btn-donate">
                Donate Now
              </button>
              <button type="button" onClick={openVolunteer} className="btn btn-outline-light">
                Become a Volunteer
              </button>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section bg-light">
          <div className="container-site">
            <h2 id="related-title" className="heading-lg">
              Keep reading
            </h2>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <BlogCard post={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
