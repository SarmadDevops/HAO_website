import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
  useSeo({ title: "Page not found", description: "The page you are looking for could not be found.", path: "/404" });

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <section className="section">
      <div className="container-site max-w-2xl text-center">
        <p className="font-heading text-7xl font-bold text-accent sm:text-8xl">404</p>
        <h1 className="heading-lg mt-4">We couldn't find that page</h1>
        <p className="lead mt-4">
          The link may be broken, or the page may have moved. Here are some places to start instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 xs:flex-row">
          <Link to="/" className="btn btn-primary btn-lg">
            Go to the home page
          </Link>
          <Link to="/projects" className="btn btn-outline btn-lg">
            See our projects
          </Link>
        </div>
        <p className="mt-8 text-muted">
          Looking for something specific?{" "}
          <Link to="/contact" className="font-semibold text-primary underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
