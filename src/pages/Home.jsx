import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Eleven from "../components/Eleven";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Last from "../components/Last";
import Four from "../components/Four";
import Meet from "../components/meet";
import Charity from "../components/charity";
import Intro from "../components/intro";

import banner from "../assets/banner.jpg";
import image from "../assets/image.png";
import lightboxLogo from "../assets/lightboxLogo.png";
import angiLogo from "../assets/angiLogo.png";
import censusLogo from "../assets/censusLogo.png";
import inspireLogo from "../assets/inspireLogo.png";
import proNatureLogo from "../assets/proNatureLogo.png";

/* ------------------------- Donation Modal (same as Navbar) ------------------------- */
const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6 relative overflow-y-auto max-h-[90vh]"
        onClick={stopPropagation}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {/* Banner */}
        <div className="mb-4">
          <img
            src={banner}
            alt="Donation Banner"
            className="w-full h-[200px] object-cover rounded"
          />
        </div>

        {/* Donation Form */}
        <h2 className="text-xl font-bold mb-2">Donation Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-[#F74F22] h-4 rounded-full"
            style={{ width: "73%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-4">$73,145 of $100,000 Raised</p>

        <div className="bg-yellow-100 text-yellow-800 text-sm p-3 rounded mb-6">
          Test Mode Is Enabled. While In Test Mode No Live Donations Are Processed.
        </div>

        <label className="block font-semibold mb-1">Donation Amount</label>
        <input
          type="text"
          defaultValue="$100.00"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        <div className="flex flex-wrap gap-2 mb-6">
          {["Education", "Water", "Gaza", "Africa", "250,000"].map((label) => (
            <button
              key={label}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium"
            >
              {label}
            </button>
          ))}
        </div>

        <fieldset className="mb-6">
          <legend className="font-semibold mb-2">Payment Method</legend>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Test Donation</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Offline Donation</span>
            </label>
          </div>
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="First Name"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Confirm Email Address"
            className="border px-4 py-2 rounded"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold">Total: $100.00</p>
          <button className="bg-[#F74F22] hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Meet />
      <Charity />
      <Intro />
      <Eleven />

      {/* Donation Promo Section */}
      <div className="promo-wrapper">
        <div className="promo-banner">
          <div className="banner-content">
            <p className="banner-title">Give Your Big Hand Forever</p>
            <h2 className="banner-subtitle">
              Helping Each Other Can <br /> Make{" "}
              <span className="world">World</span> Better
            </h2>
          </div>

          {/* Trigger Donation Modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="donate-button"
          >
            Donate Now
          </button>

          <img
            src={image}
            alt="Decorative Overlay"
            className="banner-bottom-image"
          />
        </div>

        {/* Press Section */}
        <div className="press-section">
          <h2 className="press-heading">We've been mentioned in the press</h2>
          <div className="logo-row">
            <img src={lightboxLogo} alt="Lightbox" className="press-logo" />
            <img src={angiLogo} alt="Angi" className="press-logo" />
            <img src={censusLogo} alt="Census" className="press-logo" />
            <img src={inspireLogo} alt="Inspire" className="press-logo" />
            <img src={proNatureLogo} alt="ProNature" className="press-logo" />
          </div>
        </div>
      </div>

      <Last />

      {/* Include Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
