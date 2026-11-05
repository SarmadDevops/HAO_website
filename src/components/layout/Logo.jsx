import { Link } from "react-router-dom";
import { images } from "../../data/images";

export default function Logo({ tone = "dark", onClick }) {
  const light = tone === "light";
  return (
    <Link to="/" onClick={onClick} className="inline-flex shrink-0 items-center gap-3" aria-label="Humanity Alliance Organization – home">
      <span className={light ? "rounded-md bg-white p-1.5" : undefined}>
        <img
          src={images.logo.src}
          width={images.logo.width}
          height={images.logo.height}
          alt=""
          className="h-11 w-auto sm:h-12"
        />
      </span>
      <span className="hidden flex-col leading-none xs:flex">
        <span className={`font-heading text-[1.05rem] font-bold sm:text-lg ${light ? "text-white" : "text-dark"}`}>
          Humanity Alliance
        </span>
        <span className={`mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-primary"}`}>
          Organization
        </span>
      </span>
    </Link>
  );
}
