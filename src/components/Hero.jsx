import React from "react";
import { Link } from "react-router-dom";

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="relative space-y-8 pl-12">
            {/* green background */}
            <div className="absolute inset-0 -z-10">
              <img
                src="map.svg"
                alt="Content background"
                className="w-[500px] h-[450px] object-cover"
              />
            </div>

            {/* Tagline */}
            <p className="text-[#F74F22] font-medium italic text-lg pt-12">
              We are always open for children
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Charities Focused
              <br />
              Education <span className="text-[#FBAD17]">Help</span>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link
                to="/about"
                className="bg-[#F74F22] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg"
              >
                About Us
              </Link>

              <div className="flex items-center gap-3">
                {/* Phone Icon  */}
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span>
                    <img src="phonewhite.svg" alt="" />
                  </span>
                </div>

                <div>
                  <p className="text-white text-sm">Call Us Now</p>
                  <p className="text-white font-semibold text-sm">
                    +025 757 576 560
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex flex-col gap-8 pr-20">
              {/* Previous Arrow */}
              <button
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <img src="left.svg" alt="" />
              </button>

              {/* Next Arrow */}
              <button
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 group"
                aria-label="Next slide"
              >
                <img src="right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
