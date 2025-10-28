import React from "react";

const Three = () => {
  return (
    <section className="w-full">
      <div className="relative min-h-[280px] lg:min-h-[318px] overflow-hidden">
        {/* Background image  */}
        <div className="absolute inset-0 overflow-hidden">
          <img src="three.jpg" alt="" />
          <div className="absolute inset-0 bg-[#00000061] overflow-hidden"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-20 sm:px-22 lg:px-24 py-10 lg:py-16">
          <div className="flex items-start gap-6">
            <div className="flex items-center gap-2 text-[#F74F22] font-semibold">
              <span>
                <img src="healthcare.svg" alt="" />
              </span>
              <span className="text-sm sm:text-base">
                Together, We Can Change Lives Forever.
              </span>
            </div>
          </div>

          {/* button */}
          <a
            href="/service"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#F74F22] text-white px-12 py-3 text-sm font-semibold hover:bg-[#e64817] transition-colors absolute right-20 top-1/2 -translate-y-1/2"
          >
            All Services
          </a>

          {/* Heading */}
          <h2 className="mt-3 text-white font-bold leading-tight text-[28px] sm:text-[36px] lg:text-[44px]">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FBAD17]">Non-Profit</span>
              {/* underline accent */}
              <span className="absolute left-0 right-0 -bottom-1 h-1 bg-[#FBAD17] rounded-full" />
            </span>{" "}
            Services
            <br />
            You Must Love
          </h2>
        </div>
      </div>

      {/* Overlapping cards */}
      <div className="relative bg-transparent -mt-16 lg:-mt-24 pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-20 sm:px-22 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {/* Card 1 */}
            <div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10  grid place-items-center">
                <img src="a.svg" alt="" className="h-8 w-8 object-contain" />
              </div>
              <div className="min-h-[40px]">
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  Fund Raised & <br /> Donation
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md grid place-items-center">
                <img src="b.svg" alt="" className="h-8 w-8 object-contain" />
              </div>
              <div className="min-h-[40px]">
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  Medical Treatment <br /> Help
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center">
                <img src="c.svg" alt="" className="h-8 w-8 object-contain" />
              </div>
              <div className="min-h-[40px]">
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  Development <br /> Programs
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center">
                <img src="d.svg" alt="" className="h-8 w-8 object-contain" />
              </div>
              <div className="min-h-[40px]">
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  Child Medical <br /> Research
                </h3>
              </div>
            </div>

            {/* Card 5 */}
            <div className="rounded-lg bg-white shadow-sm border border-gray-200 p-6 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center">
                <img src="e.svg" alt="" className="h-8 w-8 object-contain" />
              </div>
              <div className="min-h-[40px]">
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  Corporate Gifts <br /> Donate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Three;
