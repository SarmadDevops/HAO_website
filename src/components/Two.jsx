import React from "react";

const Two = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
        {/* Left column */}
        <div className="relative flex justify-center lg:justify-start mb-16 sm:mb-20 lg:mb-0">
          {/* vertical accent line */}
          <div className="absolute left-[-10px] top-10 sm:top-14 bottom-40 sm:bottom-56 w-[2px] bg-[#F74F22] rounded-full" />

          {/* main card */}
          <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] aspect-[4/4.3]">
            <img src="a.jpg" alt="" className="w-full h-full object-cover" />

            {/* small heart */}
            <img
              src="heartyellow.svg"
              alt=""
              className="absolute right-4 sm:right-5 top-6 sm:top-8 h-8 w-8 sm:h-10 sm:w-10"
            />
          </div>

          <div className="hidden sm:block absolute -right-5 top-16 sm:top-20 h-[70%] w-4 rounded-md border-2 border-[#F74F22]/60" />

          {/* badge */}
          <div className="absolute -left-4 sm:-left-6 bottom-10 sm:bottom-16">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
              <img
                src="curl.svg"
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 grid place-items-center text-white text-center">
                <div>
                  <div className="text-xs sm:text-md opacity-80">Since</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#FB5A1F] tracking-wide">
                    1,999
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom image*/}
          <div className="absolute -bottom-20 sm:-bottom-24 left-[130px] sm:left-[160px] md:left-[190px] lg:left-[210px] w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] rounded-xl overflow-hidden">
            <div className="aspect-[4/3]">
              <img
                src="b.jpg"
                alt=""
                className="w-[140px] sm:w-[160px] md:w-[180px] h-[140px] sm:h-[160px] md:h-[180px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="mt-8 sm:mt-0">
          <div className="flex items-center gap-2 text-[#F74F22] font-semibold">
            <img src="healthcare.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-xs sm:text-sm md:text-base">
              Building Brighter Futures Through Kindness.
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] leading-tight font-bold text-[#0f2018]">
            Helping Each Other Can
            <br />
            Make <span className="text-[#F74F22]">World</span> Better
          </h2>

          <div className="h-1 w-20 sm:w-28 bg-[#F74F22] rounded-full mt-2" />

          {/* Paragraph */}
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 max-w-[46ch]">
            Helping each other builds a stronger, kinder, and more harmonious
            world. When we support one another, we create an environment of
            trust, understanding, and mutual respect. Acts of kindness ripple
            outward, spreading compassion and inspiring others to follow suit.
            Together, we cultivate a community where challenges become
            opportunities for growth, and difficulties.
          </p>

          {/* Video row + checklist */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="shrink-0 mx-auto sm:mx-0">
              <div className="w-[160px] sm:w-[180px] h-[100px] sm:h-[110px] rounded-lg overflow-hidden bg-gray-200 relative">
                <img src="c.jpg" alt="" className="w-full h-full object-cover" />

                <div className="absolute inset-0 grid place-items-center">
                  <img src="pauseplay.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
              </div>
            </div>

            {/* Checklist */}
            <ul className="grid gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
              {[
                "People's Growth",
                "Helped fund 3,265 Project powerful",
                "Awards Winning nonprofit company",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  {/* check icon placeholder */}
                  <img src="tick.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer stats */}
          <div className="mt-6 sm:mt-8 grid sm:flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              {/* avatars placeholder */}
              <div className="flex -space-x-2">
                <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-300 border-2 border-white" />
                <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-300 border-2 border-white" />
                <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-300 border-2 border-white" />
              </div>
              <div className="text-gray-800 font-medium text-sm sm:text-base">5m+ Customer</div>
              <div className="h-0.5 w-10 sm:w-12 bg-[#F74F22] rounded-full" />
            </div>

            <div className="flex items-center gap-3">
              {/* phone icon placeholder */}
              <img src="phonemsg.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <div className="text-gray-500 text-xs sm:text-sm">Phone:</div>
                <div className="text-gray-900 font-semibold text-sm sm:text-base">
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