import React from "react";

const Last = () => {
  return (
    <section className="relative w-full bg-[#F6F2EE] py-14 md:py-20">
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#E9542D]/80 italic font-semibold mb-2">
          Hope, Support, and Love for All.
        </p>
        <h2 className="text-[#061408] text-3xl md:text-4xl font-bold leading-tight">
          Our Latest Article
        </h2>
        <h3 className="text-[#061408] text-3xl md:text-4xl font-bold leading-tight">
          News & Blogs You Need
        </h3>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <article className="group">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="x.jpg"
              alt=""
              className="w-full h-[220px] md:h-[260px] object-cover block"
            />
          </div>
          <div className="relative -mt-10 md:-mt-12 px-3">
            <div className="bg-white rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-4 md:p-5">
              <div className="flex items-center gap-4 text-xs text-[#535353]">
                <div className="flex items-center gap-1.5">
                  <img src="calendar.svg" alt="" className="w-4 h-4" />
                  <span>04 Dec 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="comments.svg" alt="" className="w-4 h-4" />
                  <span>Comments (0)</span>
                </div>
              </div>
              <h4 className="mt-2.5 md:mt-3 text-[#061408] text-sm md:text-base font-semibold leading-snug">
                Stories of Hope: Celebrating <br /> Our Community Impact
              </h4>
              <div className="mt-3 md:mt-4 flex items-center gap-2 text-[13px] text-[#061408]/80">
                <a href="#" className="font-medium">
                  Read More
                </a>
                <img
                  src="rightarrowfilled.svg"
                  alt=""
                  className="w-3.5 h-3.5"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Card 2 */}
        <article className="group">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="y.jpg"
              alt=""
              className="w-full h-[220px] md:h-[260px] object-cover block"
            />
          </div>
          <div className="relative -mt-10 md:-mt-12 px-3">
            <div className="bg-white rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-4 md:p-5">
              <div className="flex items-center gap-4 text-xs text-[#535353]">
                <div className="flex items-center gap-1.5">
                  <img src="calendar.svg" alt="" className="w-4 h-4" />
                  <span>04 Dec 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="comments.svg" alt="" className="w-4 h-4" />
                  <span>Comments (0)</span>
                </div>
              </div>
              <h4 className="mt-2.5 md:mt-3 text-[#061408] text-sm md:text-base font-semibold leading-snug">
                How Your Generous Support <br /> Makes a Difference
              </h4>
              <div className="mt-3 md:mt-4 flex items-center gap-2 text-[13px] text-[#061408]/80">
                <a href="#" className="font-medium">
                  Read More
                </a>
                <img
                  src="rightarrowfilled.svg"
                  alt=""
                  className="w-3.5 h-3.5"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Card 3 */}
        <article className="group">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="z.jpg"
              alt=""
              className="w-full h-[220px] md:h-[260px] object-cover block"
            />
          </div>
          <div className="relative -mt-10 md:-mt-12 px-3">
            <div className="bg-white rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-4 md:p-5">
              <div className="flex items-center gap-4 text-xs text-[#535353]">
                <div className="flex items-center gap-1.5">
                  <img src="calendar.svg" alt="" className="w-4 h-4" />
                  <span>04 Dec 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="comments.svg" alt="" className="w-4 h-4" />
                  <span>Comments (0)</span>
                </div>
              </div>
              <h4 className="mt-2.5 md:mt-3 text-[#061408] text-sm md:text-base font-semibold leading-snug">
                Our Goal Is Help The Poor <br /> Child Around The World
              </h4>
              <div className="mt-3 md:mt-4 flex items-center gap-2 text-[13px] text-[#061408]/80">
                <a href="#" className="font-medium">
                  Read More
                </a>
                <img
                  src="rightarrowfilled.svg"
                  alt=""
                  className="w-3.5 h-3.5"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Last;
