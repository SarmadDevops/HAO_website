import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";

// ---------------- Donation Modal ----------------
const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl overflow-y-auto max-h-[90vh] relative"
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          ×
        </button>

        <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4">
          <img src={banner} alt="Donation Banner" className="w-full h-full object-cover" />
        </div>

        <div className="font-[Montserrat] text-gray-800">
          <h2 className="text-xl font-bold mb-2">Donation Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div className="bg-[#F74F22] h-4 rounded-full" style={{ width: "73%" }}></div>
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
            <input type="text" placeholder="First Name" className="border px-4 py-2 rounded" />
            <input type="text" placeholder="Last Name" className="border px-4 py-2 rounded" />
            <input type="email" placeholder="Email Address" className="border px-4 py-2 rounded" />
            <input type="email" placeholder="Confirm Email Address" className="border px-4 py-2 rounded" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-semibold">Total: $100.00</p>
            <button className="bg-[#F74F22] hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------- Navbar Component ----------------
const Homebar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // close dropdown after navigation
  };

  return (
    <>
      <header className="w-full relative z-50">
        <nav className="relative top-5 left-0 py-2">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="mt-2 bg-[#122F2A] text-white shadow-lg py-4 sm:py-5 px-3 sm:px-4 lg:px-6 flex items-center justify-between rounded-b-2xl">
              
              {/* Desktop Nav */}
              <ul className="hidden lg:flex items-center gap-16 text-white text-lg">
                {["Home", "About", "Service", "Contact"].map((label) => (
                  <li key={label}>
                    <Link
                      to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                      className="font-medium mx-1 hover:text-orange-500 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Side Icons + Buttons */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  className="hidden md:inline-flex h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors items-center justify-center"
                  aria-label="Search"
                >
                  <img src="search.svg" alt="" className="invert" />
                </button>
                <button
                  className="relative hidden md:inline-flex h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors items-center justify-center"
                  aria-label="Cart"
                >
                  <img src="cart.svg" alt="" className="invert" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#F74F22] text-white text-[11px] grid place-items-center">0</span>
                </button>

                {/* Desktop Donate Button */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#F74F22] hover:bg-orange-600 text-white px-6 lg:px-8 py-2.5 text-sm font-semibold shadow-sm transition-colors"
                >
                  Donate Us
                </button>

                {/* Mobile Hamburger */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-md text-white hover:bg-gray-100"
                  aria-label="Toggle navigation"
                >
                  <span className="relative block h-5 w-6">
                    <span
                      className={`absolute left-0 right-0 top-0 h-0.5 bg-current transition-transform ${
                        open ? "translate-y-2 rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 right-0 top-2 h-0.5 bg-current transition-opacity ${
                        open ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`absolute left-0 right-0 top-4 h-0.5 bg-current transition-transform ${
                        open ? "-translate-y-2 -rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* ---------------- Mobile Dropdown ---------------- */}
            <div
              className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg px-4 sm:px-6 pt-2 pb-4">
                <ul className="grid gap-2 py-2 text-gray-800">
                  {["Home", "About", "Service", "Contact"].map((label) => (
                    <li key={label}>
                      <button
                        onClick={() =>
                          handleNavigate(
                            label === "Home" ? "/" : `/${label.toLowerCase()}`
                          )
                        }
                        className="block w-full text-left rounded-lg px-3 py-2 hover:bg-gray-50 font-medium"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      className="h-10 w-10 rounded-full bg-gray-100 grid place-items-center"
                      aria-label="Search"
                    >
                      <span className="h-4 w-4 rounded-full border border-gray-500" aria-hidden />
                    </button>
                    <button
                      className="relative h-10 w-10 rounded-full bg-gray-100 grid place-items-center"
                      aria-label="Cart"
                    >
                      <span className="h-4 w-5 rounded-[3px] border border-gray-500" aria-hidden />
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white text-[11px] grid place-items-center">
                        0
                      </span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setOpen(false);
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm font-semibold shadow-sm"
                  >
                    Donate Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Homebar;
