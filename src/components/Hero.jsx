import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-800">
        <img
          src="hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#00000061]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh] sm:min-h-[70vh]">
          {/* Left Content */}
          <div className="relative space-y-6 sm:space-y-8 pl-4 sm:pl-8 md:pl-12">
            {/* green background */}
            <div className="absolute inset-0 -z-10">
              <img
                src="map.svg"
                alt="Content background"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-cover"
              />
            </div>

            {/* Tagline */}
            <p className="text-[#F74F22] font-medium italic text-sm sm:text-base md:text-lg pt-8 sm:pt-12">
              We are always open for children
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Charities Focused
              <br />
              Education <span className="text-[#FBAD17]">Help</span>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <button className="bg-[#F74F22] hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200 shadow-lg">
                About Us
              </button>

              <div className="flex items-center gap-3">
                {/* Phone Icon  */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span>
                    <img
                      src="phonewhite.svg"
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </span>
                </div>

                <div>
                  <p className="text-white text-xs sm:text-sm">Call Us Now</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">
                    +025 757 576 560
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-8 pr-0 lg:pr-20">
              {/* Previous Arrow */}
              <button
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <img src="left.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Next Arrow */}
              <button
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 group"
                aria-label="Next slide"
              >
                <img src="right.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;