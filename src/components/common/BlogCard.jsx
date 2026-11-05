import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { formatDate } from "../../utils/format";
import ResponsiveImage from "./ResponsiveImage";

export default function BlogCard({ post, headingLevel: Heading = "h3" }) {
  const date = formatDate(post.date);

  return (
    <article className="group relative flex h-full flex-col">
      <div className="aspect-[3/2] overflow-hidden rounded-lg bg-light">
        <ResponsiveImage
          image={post.image}
          alt=""
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="font-semibold uppercase tracking-wider text-primary">{post.category}</span>
          {date && (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{date}</time>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>{post.author}</span>
        </p>
        <Heading className="heading-md mt-2">
          <Link
            to={`/blog/${post.slug}`}
            className="decoration-accent decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:underline"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-muted">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary" aria-hidden="true">
          Read more
          <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
