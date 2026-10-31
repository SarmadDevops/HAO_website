import React from "react";

const Five = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left half */}
        <div className="relative isolate min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
          {/* Background image */}
          <img
            src="three.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#122F2AD4]/80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2 py-10 sm:py-12 px-4">
            <div className="h-10 w-10 grid place-items-center">
              <img
                src="hcwhite.svg"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <h3 className="mt-3 text-white text-lg sm:text-xl md:text-2xl font-semibold italic">
              Become An Volunteer?
            </h3>
            <a
              href="#donate"
              className="text-white text-sm font-medium hover:underline"
            >
              Contact With Us ➜
            </a>
          </div>
        </div>

        {/* Right half */}
        <div className="relative isolate min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
          {/* Background image */}
          <img
            src="right.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#F74F22D4]/80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2 py-10 sm:py-12 px-4">
            <div className="h-12 w-12 sm:h-14 sm:w-14 grid place-items-center">
              <img src="money.svg" alt="" className="w-full h-full" />
            </div>
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold italic">
              Make Donation To Us?
            </h3>
            <a
              href="#donate"
              className="text-white text-sm font-medium hover:underline"
            >
              Donate Now ➜
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 -bottom-8 sm:-bottom-10 md:-bottom-11 z-10 select-none">
        {/* zigzag image */}
        <img
          src="zigzag.png"
          alt=""
          className="w-full h-12 sm:h-16 md:h-20 object-cover"
        />
      </div>
    </section>
  );
};

export default Five;
