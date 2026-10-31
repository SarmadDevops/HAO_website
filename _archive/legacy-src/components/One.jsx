import React from "react";

const One = () => {
  return (
    <section className="w-full bg-[#F1EBE9] relative overflow-hidden">
      {/* Left image */}
      <div className="pointer-events-none select-none absolute -left-1 -bottom-20 sm:-bottom-28 md:-bottom-36 opacity-50">
        <div className="w-20 sm:w-28 md:w-36 lg:w-48 aspect-square">
          <img src="vector.svg" alt="" />
          <div className="w-full h-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex justify-center">
        <div className="rounded-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          {/* Left: image card */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <div className="h-32 w-36 sm:h-36 sm:w-40 md:h-44 md:w-56 lg:h-48 lg:w-64 rounded-xl overflow-hidden">
              <img
                src="sec.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-2 sm:-bottom-3 left-1/4 -translate-x-1/2 h-5 w-14 sm:h-6 sm:w-16 bg-transparent grid place-items-center">
              <img src="icon.svg" alt="" />
            </div>
          </div>

          {/* Right: content */}
          <div className="flex-1 pl-0 md:pl-8 lg:pl-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#F74F22] font-semibold">
              <span>
                <img
                  src="healthcare.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </span>
              <span className="text-xs sm:text-sm md:text-base">
                Non profit Charity Foundation
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 sm:mt-4 md:mt-5 text-xl sm:text-2xl md:text-[26px] lg:text-[32px] font-extrabold tracking-tight text-[#0f2018]">
              Click To Registered To be a memeber of us
            </h2>

            <button className="mt-5 sm:mt-6 md:mt-8 inline-flex items-center gap-2 text-[#F74F22] font-semibold text-sm sm:text-base">
              <span>Contact Now</span>

              <span>
                <img
                  src="rightarrow.svg"
                  alt=""
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default One;