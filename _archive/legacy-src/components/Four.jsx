import React, { useRef } from "react";

const Four = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350, // Scroll by one card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350, // Scroll by one card width
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-yellow-100 py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_70%] gap-10 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <img
                  src="healthcare.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#E9542D] font-medium text-xs sm:text-sm">
                Charity makes no decrease in property.
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-[#1D1F20] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
              Helping Each Other <br />
              Make{" "}
              <span className="text-[#F74F22] relative inline-block">
                World
              </span>{" "}
              Better
            </h2>

            {/* Description */}
            <p className="text-[#535353] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 mr-0 sm:mr-8 md:mr-16">
              Helping each other creates a stronger, kinder world. We build
              trust, spread compassion, and inspire others to do the same.
              Together, we can overcome challenges and make lasting positive
              changes.
            </p>

            {/* Checkmark list */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F74F22] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">
                  We Help Companies Develop Powerful Corporate Social
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F74F22] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">
                  Helped Fund 3,265 Project Powerful Corporate Poor.
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F74F22] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">
                  It Is A Long Established Fact That A Reader.
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#F74F22] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm hover:bg-[#d64b28] transition-colors">
                See All Causes
              </button>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="relative overflow-visible">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Image 1 */}
              <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]">
                <img
                  src="bgshadow.svg"
                  alt=""
                  className="w-full h-[450px] sm:h-[480px] md:h-[500px] object-contain rounded-lg"
                />
              </div>

              {/* Image 2 */}
              <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]">
                <img
                  src="bgshadow3.svg"
                  alt=""
                  className="w-full h-[450px] sm:h-[480px] md:h-[500px] object-contain rounded-lg"
                />
              </div>

              {/* Image 3 */}
              <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]">
                <img
                  src="bgshadow3.svg"
                  alt=""
                  className="w-full h-[450px] sm:h-[480px] md:h-[500px] object-contain rounded-lg"
                />
              </div>

              {/* Image 4 */}
              <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]">
                <img
                  src="bgshadow3.svg"
                  alt=""
                  className="w-full h-[450px] sm:h-[480px] md:h-[500px] object-contain rounded-lg"
                />
              </div>

              {/* Image 5 */}
              <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]">
                <img
                  src="bgshadow3.svg"
                  alt=""
                  className="w-full h-[450px] sm:h-[480px] md:h-[500px] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-95 transition-transform"
              >
                <img
                  src="leftborderarrow.svg"
                  alt="Scroll left"
                  className="w-full h-full"
                />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-95 transition-transform"
              >
                <img
                  src="rightborderarrow.svg"
                  alt="Scroll right"
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Four;