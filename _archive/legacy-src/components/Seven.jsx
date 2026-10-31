import React, { useState, useRef } from "react";

const Seven = () => {
  // Goal amount is hardcoded
  const goalAmount = 70000;
  // Initial raised amount (can be changed)
  const [raisedAmount, setRaisedAmount] = useState(40250);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef(null);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("Water");

  // State for focused input field
  const [focusedField, setFocusedField] = useState(null);

  // Calculate percentage
  const percentage = Math.min((raisedAmount / goalAmount) * 100, 100);

  // Handle drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e);
  };

  // Handle drag move
  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Update progress based on mouse position
  const updateProgress = (e) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      let newPercentage = Math.max(0, Math.min(100, (x / width) * 100));
      const newRaisedAmount = Math.round((newPercentage / 100) * goalAmount);
      setRaisedAmount(newRaisedAmount);
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateProgressTouch(e);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateProgressTouch(e);
    }
  };

  const updateProgressTouch = (e) => {
    if (progressBarRef.current && e.touches.length > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const width = rect.width;
      let newPercentage = Math.max(0, Math.min(100, (x / width) * 100));
      const newRaisedAmount = Math.round((newPercentage / 100) * goalAmount);
      setRaisedAmount(newRaisedAmount);
    }
  };

  // Add event listeners when dragging
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-[#F1EBE9]">
      {/* Background image */}
      <div className="absolute top-0 bottom-0 left-0 w-[60%] z-0">
        <img src="leftbg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-0 -left-1 w-24 sm:w-28 md:w-32 h-48 sm:h-56 md:h-72 opacity-30 pointer-events-none z-10">
        <img
          src="stringwhite.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-70 pointer-events-none z-10">
        <img src="heart.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-12 sm:gap-14 md:gap-16 lg:gap-20 z-10">
        {/* Left Content */}
        <div className="relative flex-1 text-white">
          {/* logo */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <img src="healthcare.svg" alt="" />
            </div>
            <p className="text-[#E9542D] font-medium italic tracking-wide text-xs sm:text-sm md:text-base">
              Non profit Charity Foundation
            </p>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-snug sm:leading-relaxed mb-8 sm:mb-12 md:mb-16">
            Helping Each Other Can
            <br className="mb-2 sm:mb-4" />
            <span className="block mt-2 sm:mt-4">
              Make{" "}
              <span className="text-[#FBAD17] relative inline-block underline">
                World
              </span>{" "}
              Better
            </span>
          </h2>

          {/* description */}
          <div className="relative mb-8 sm:mb-10">
            <div className="relative bg-[#1D1F20] rounded-sm pl-8 sm:pl-10 pr-4 sm:pr-6 py-5 sm:py-6 text-xs sm:text-sm leading-relaxed max-w-xl">
              {/* vertical accent line */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E9542D]" />
              <span className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-[#1D1F20] border-l border-t border-[#E9542D]/60" />
              <p className="text-white/90">
                We approached aidused complex project Designing website can
                involve various aspects such as layout, graphics, content
                experience.
              </p>
              <p className="text-white/60 mt-2 sm:mt-3">
                For a more specific response elaborate
              </p>
            </div>
          </div>

          {/* Feature icon */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12 mt-10 sm:mt-12 md:mt-16">
            <div className="flex items-start gap-2 sm:gap-3 max-w-[200px] sm:max-w-[220px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <img src="a.svg" alt="" />
              </div>
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Fund Raised & Donation
                <br />
                Treat raised
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 max-w-[200px] sm:max-w-[220px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center">
                <img src="d.svg" alt="" />
              </div>
              <p className="text-xs sm:text-sm font-medium leading-snug">
                We Helping People &<br />
                Donation pik
              </p>
            </div>
          </div>
          {/* Bullet list row */}
          <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-14 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <img src="tick.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Dedicated Team & volunteer</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="tick.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Best Charity Organization</span>
            </div>
          </div>
        </div>

        {/* Right Column: Images + Donation Card */}
        <div className="relative flex-1 lg:max-w-[480px] xl:max-w-[560px]">
          <div className="absolute inset-0 -left-10 lg:left-0 opacity-10 pointer-events-none">
            <img
              src="donation-bg.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Donation Card */}
          <div className="relative border-[2px] border-[#E9542D] rounded-xl shadow-xl px-5 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-10 sm:pb-12 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="donationcardbg.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="relative z-10 text-[#0F322C] font-semibold text-xl leading-snug mb-6">
              Bringing Clean Water to Rural Communities
            </h3>
            {/* Progress bar */}
            <div className="relative z-10 mb-6">
              <div
                ref={progressBarRef}
                className="h-2 rounded bg-white/60 overflow-hidden cursor-pointer"
                onClick={updateProgress}
              >
                <div
                  className="h-full bg-[#E9542D] transition-all duration-100"
                  style={{ width: `${percentage}%` }}

                />
              </div>
              <div
                className="absolute -top-1.5 flex flex-col items-center cursor-grab active:cursor-grabbing"
                style={{
  left: `${percentage}%`,
  transform: 'translateX(-50%)'
}}

                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <span className="w-5 h-5 rounded-full border-2 border-white bg-[#E9542D] shadow-md hover:scale-110 transition-transform" />
                <span className="mt-1 text-[11px] font-medium text-[#E9542D]">
                  {percentage.toFixed(1)}%
                </span>
              </div>
              <div className="mt-3 flex justify-between text-[13px] font-medium text-[#0F322C]">
                <span>
                  Rs.
                  {raisedAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  Raised
                </span>
                <span>
                  Rs.
                  {goalAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  Goal
                </span>
              </div>
            </div>
            {/* Amount input */}
            <div className="relative z-10 flex items-stretch gap-2 mb-5">
              <div className="w-10 flex items-center justify-center rounded border border-[#D9D9D9] bg-white text-sm font-medium">
                Rs.
              </div>
              <input
                type="text"
                className={`flex-1 rounded border bg-white px-3 py-2 text-sm outline-none transition-colors ${
                  focusedField === "amount"
                    ? "border-[#E9542D] border-1"
                    : "border-[#D9D9D9]"
                }`}
                placeholder="500,000.00"
                onFocus={() => setFocusedField("amount")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            {/* Category pills */}
            <div className="relative z-10 flex flex-wrap gap-3 mb-6">
              {["Water", "Food", "Africa", "Gaza", "$250.00"].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedCategory(label)}
                  className={`px-5 h-9 rounded-full text-xs font-medium border transition-all ${
                    label === selectedCategory
                      ? "bg-[#E9542D] text-white border-[#E9542D]"
                      : "border-transparent bg-white text-[#0F322C] shadow-sm hover:border-[#E9542D]/30"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {/* Payment method */}
            <div className="relative z-10 mb-6 border-y border-[#E2E2E2] py-5 space-y-4">
              <p className="text-sm font-medium text-[#0F322C]">
                Select Payment Method
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-[#0F322C]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pay"
                    defaultChecked
                    className="accent-[#E9542D]"
                  />
                  <span>Test Donation</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="pay" className="accent-[#E9542D]" />
                  <span>Offline Donation</span>
                </label>
              </div>
            </div>
            {/* Form fields */}
            <div className="relative z-10 space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-1 text-[11px]">
                  <label className="font-medium text-[#0F322C]">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className={`h-10 rounded border bg-white px-3 text-sm outline-none transition-colors ${
                      focusedField === "firstName"
                        ? "border-[#E9542D] border-1"
                        : "border-[#D9D9D9]"
                    }`}
                    placeholder="First Name"
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1 text-[11px]">
                  <label className="font-medium text-[#0F322C]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`h-10 rounded border bg-white px-3 text-sm outline-none transition-colors ${
                      focusedField === "lastName"
                        ? "border-[#E9542D] border-1"
                        : "border-[#D9D9D9]"
                    }`}
                    placeholder="Last Name"
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 text-[11px]">
                <label className="font-medium text-[#0F322C]">
                  Email Address *
                </label>
                <input
                  type="email"
                  className={`h-10 rounded border bg-white px-3 text-sm outline-none transition-colors ${
                    focusedField === "email"
                      ? "border-[#E9542D] border-1"
                      : "border-[#D9D9D9]"
                  }`}
                  placeholder="Email Address"
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>
            <button className="relative z-10 inline-flex items-center justify-center h-10 px-8 rounded-full bg-[#E9542D] text-white text-sm font-semibold shadow hover:bg-[#d64822] transition-colors">
              Donate Now
            </button>
          </div>

          {/* Overlapping image bottom-right */}
          <div className="absolute -bottom-28 -right-28 w-72 h-60 rounded shadow-lg overflow-hidden z-20">
            <img
              src="children.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seven;