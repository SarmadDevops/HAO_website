import React from "react";

const Two = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left column */}
        <div className="relative flex justify-center lg:justify-start">
          {/* main card */}
          <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 w-[320px] sm:w-[360px] md:w-[400px] lg:w-[420px] aspect-[4/4.3]">
            <img src="a.jpg" alt="" />

            {/* vertical accent line */}
            <div className="absolute left-[-10px] top-14 bottom-10 w-[3px] bg-[#F74F22] rounded-full" />
            {/* small heart */}
            <div className="absolute right-5 top-8 h-6 w-6 rounded-full bg-[#FBAD17]/80" />
          </div>

          <div className="hidden sm:block absolute -right-5 top-20 h-[70%] w-4 rounded-md border-2 border-[#F74F22]/60" />

          {/* badge */}
          <div className="absolute -left-6 bottom-16">
            <div className="relative">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-[#0f2018] shadow-md" />
              <div className="absolute inset-0 grid place-items-center text-white text-center">
                <div className="text-xs opacity-80">Since</div>
                <div className="text-2xl font-bold text-[#FB5A1F] tracking-wide">
                  1,999
                </div>
              </div>
            </div>
          </div>

          {/* bottom image*/}
          <div className="absolute -bottom-24 left-[160px] sm:left-[190px] md:left-[210px] w-[230px] sm:w-[260px] rounded-xl overflow-hidden">
            <div className="aspect-[4/3]">
              <img
                src="b.jpg"
                alt=""
                className="w-[180px] h-[180px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div>
          <div className="flex items-center gap-2 text-[#F74F22] font-semibold">
            <img src="healthcare.svg" alt="" className="w-8 h-8" />
            <span className="text-sm sm:text-base">
              Building Brighter Futures Through Kindness.
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[44px] leading-tight font-bold text-[#0f2018]">
            Helping Each Other Can
            <br />
            Make <span className="text-[#F74F22]">World</span> Better
          </h2>

          <div className="h-1 w-28 bg-[#F74F22] rounded-full mt-2" />

          {/* Paragraph */}
          <p className="mt-4 text-gray-600 leading-7 max-w-[46ch]">
            Helping each other builds a stronger, kinder, and more harmonious
            world. When we support one another, we create an environment of
            trust, understanding, and mutual respect. Acts of kindness ripple
            outward, spreading compassion and inspiring others to follow suit.
            Together, we cultivate a community where challenges become
            opportunities for growth, and difficulties.
          </p>

          {/* Video row + checklist */}
          {/* Video row + checklist */}
          <div className="mt-6 flex gap-6 items-start">
            <div className="shrink-0">
              <div className="w-[180px] h-[110px] rounded-lg overflow-hidden bg-gray-200 relative">
                <img
                  src="c.jpg"
                  alt="video thumbnail"
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 grid place-items-center">
                  <button
                    className="h-12 w-12 rounded-full bg-[#F74F22] flex items-center justify-center hover:bg-[#FBAD17] transition-colors duration-200 shadow-md"
                    aria-label="Play video"
                  >
                    {/* White Play Icon (SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5 ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <ul className="grid gap-3 text-gray-700">
              {[
                "People’s Growth",
                "Helped fund 3,265 Project powerful",
                "Awards Winning nonprofit company",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* check icon placeholder */}
                  <span className="mt-1 h-4 w-4 rounded-[4px] bg-[#F74F22]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer stats */}
          <div className="mt-8 grid sm:flex items-center gap-8">
            <div className="flex items-center gap-3">
              {/* avatars placeholder */}
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white" />
                <span className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white" />
                <span className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white" />
              </div>
              <div className="text-gray-800 font-medium">5m+ Customer</div>
              <div className="h-0.5 w-12 bg-[#F74F22] rounded-full" />
            </div>

            <div className="flex items-center gap-3">
              {/* phone icon placeholder */}
              <span className="h-7 w-7 rounded bg-[#FBAD17]" />
              <div>
                <div className="text-gray-500 text-sm">Phone:</div>
                <div className="text-gray-900 font-semibold">
                  +236 (456) 896 22
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Two;
