import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { site } from "../../config/site";
import { images } from "../../data/images";
import { history } from "../../data/organization";
import Reveal from "../common/Reveal";
import ResponsiveImage from "../common/ResponsiveImage";

export default function AboutPreview({ showLink = true, showTimeline = true }) {
  return (
    <section aria-labelledby="about-title" className="section bg-light">
      {/* OLD CODE (layout before collage):
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative pb-10 pr-6 sm:pb-14 sm:pr-14">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <ResponsiveImage image={images.school} sizes="(min-width: 1024px) 560px, 100vw" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[46%] overflow-hidden rounded-lg border-4 border-surface sm:border-8">
            <ResponsiveImage image={images.handPump} sizes="(min-width: 1024px) 260px, 46vw" className="aspect-[4/3] h-full w-full object-cover" />
          </div>
          <div className="absolute -left-1 top-6 rounded-md bg-accent px-4 py-3 text-dark shadow-lg sm:left-[-1rem] sm:px-5 sm:py-4">
      */}
      <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative lg:sticky lg:top-28">
          <div className="w-[82%] overflow-hidden rounded-lg shadow-md">
            <ResponsiveImage
              image={images.classroom}
              sizes="(min-width: 1024px) 460px, 82vw"
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 -mt-[18%] ml-auto w-[72%] overflow-hidden rounded-lg border-4 border-surface shadow-lg sm:border-8">
            <ResponsiveImage
              image={images.school}
              sizes="(min-width: 1024px) 420px, 72vw"
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute bottom-4 left-0 z-20 rounded-md bg-accent px-4 py-3 text-dark shadow-lg sm:bottom-8 sm:px-5 sm:py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-dark/75">Serving since</p>
            <p className="font-heading text-3xl font-bold leading-none sm:text-4xl">{site.foundedYear}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">About us</p>
          <h2 id="about-title" className="heading-lg">
            {/* OLD CONTENT: Serving Humanity Together */}
            Driven by Purpose, Committed to Humanity
          </h2>
          {/* OLD CONTENT:
            Humanity Alliance Organization Pakistan, formerly Human Aid Organization, began its charitable work in
            2016. We officially launched in March 2020, during the COVID-19 lockdown, with a ration distribution
            project paid for by our own team.
            When the pandemic ended, the need did not, so we kept going. Today HAO is a network of more than 1,500
            volunteers, with city chapters across Pakistan and ambassadors in the USA, UK, Germany and Australia.
          */}
          <div className="mt-5 space-y-4 text-[1.0625rem] text-muted">
            <p>
              Humanity Alliance Organization (HAO), formerly known as Human Aid Organization, is a youth-led,
              non-profit organization established in 2019 with a mission to create meaningful and lasting change in
              society.
            </p>
            <p>
              Officially launched in March 2020 during the COVID-19 pandemic, HAO began its journey with a self-funded
              ration distribution initiative, driven by the commitment of its own team to support vulnerable
              communities.
            </p>
            <p>
              What started as a small initiative has grown into a nationwide network of over 1,500 volunteers, with
              active chapters across Pakistan and international ambassadors in the USA, UK, Germany, and Australia.
            </p>
            <p>
              Today, HAO continues to work towards empowering communities through humanitarian initiatives, access to
              education, clean water, and sustainable development.
            </p>
          </div>

          {showTimeline && (
          <ol className="mt-8 space-y-0 border-l-2 border-border">
            {history.map((item) => (
              <li key={item.year} className="relative pb-5 pl-6 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-surface bg-accent" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-wider text-primary">{item.year}</p>
                <p className="font-semibold text-dark">{item.title}</p>
              </li>
            ))}
          </ol>
          )}

          {showLink && (
            <Link to="/about" className="btn btn-outline mt-8">
              Read our story
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
