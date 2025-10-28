import React from "react";

const Six = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-white via-white to-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#F74F22] font-semibold italic tracking-wide mb-4">
            Compassion in Action: Join Us Today
          </p>
          <h2 className="text-[#061408] font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight">
            How We Connect With <br className="hidden sm:block" /> People
            Helping
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group relative bg-gradient-to-b from-white to-white/60 border border-[#E5E8E6] rounded-md p-8 flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-full bg-[#F8E3DB] flex items-center justify-center">
                <img src="one.svg" alt="" />
              </div>
            </div>
            <h3 className="text-[#061408] font-semibold text-lg leading-snug mb-3">
              We Educate & <br /> Help Poor People
            </h3>
            <p className="text-[#535353] text-sm leading-relaxed">
              We provide education and aid to uplift underprivileged lives with
              compassion.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gradient-to-b from-white to-white/60 border border-[#E5E8E6] rounded-md p-8 flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-full bg-[#F9EDD8] flex items-center justify-center">
                <img src="two.svg" alt="" />
              </div>
            </div>
            <h3 className="text-[#061408] font-semibold text-lg leading-snug mb-3">
              We Helping People <br /> & Donation
            </h3>
            <p className="text-[#535353] text-sm leading-relaxed">
              Supporting communities through generous donations and impactful
              help for all.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gradient-to-b from-white to-white/60 border border-[#E5E8E6] rounded-md p-8 flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-full bg-[#E4EEEF] flex items-center justify-center">
                <img src="three.svg" alt="" />
              </div>
            </div>
            <h3 className="text-[#061408] font-semibold text-lg leading-snug mb-3">
              We Ensure Safety <br /> & Treatment
            </h3>
            <p className="text-[#535353] text-sm leading-relaxed">
              Ensuring safety and providing essential treatment for a better
              tomorrow.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-gradient-to-b from-white to-white/60 border border-[#E5E8E6] rounded-md p-8 flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-full bg-[#E4F1E6] flex items-center justify-center">
                <img src="four.svg" alt="" />
              </div>
            </div>
            <h3 className="text-[#061408] font-semibold text-lg leading-snug mb-3">
              Awwarded Service <br /> & Treatment
            </h3>
            <p className="text-[#535353] text-sm leading-relaxed">
              Awarded service and treatment, ensuring top-quality care and
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Six;
