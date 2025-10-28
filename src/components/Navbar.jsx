import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";

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

        <div className="mb-4">
          <img
            src={banner}
            alt="Donation Banner"
            className="w-full h-[200px] object-cover rounded"
          />
        </div>

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
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setOpen(false);
    navigate(path); // ✅ Navigate without hash
  };

  return (
    <>
      <header className="w-full absolute top-0 left-0 z-50">
        {/* Top Bar */}
        <div className="bg-transparent backdrop-blur-sm text-white text-[13px]">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 opacity-90">
                <span className="inline-flex h-3.5 w-3.5">
                  <img src="mail.svg" alt="mail" />
                </span>
                <span>support@aidus.com</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <span className="inline-flex h-3.5 w-3.5">
                  <img src="phone.svg" alt="phone" />
                </span>
                <span>+88 7869 5874 96</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-gray-300/20 text-white rounded-full px-3 py-1.5">
              <span className="text-[12px] font-medium">Follow Us :</span>
              <span className="h-5 w-5 rounded-full"><img src="fb.svg" alt="" /></span>
              <span className="h-5 w-5 rounded-full"><img src="link.svg" alt="" /></span>
              <span className="h-5 w-5 rounded-full"><img src="insta.svg" alt="" /></span>
              <span className="h-5 w-5 rounded-full"><img src="vvv.svg" alt="" /></span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-2 angled-card bg-white/95 backdrop-blur-md shadow-lg py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 sm:h-16 sm:w-16 overflow-hidden flex items-center justify-center">
                  <img src="haologo.png" alt="logo" />
                </div>
              </div>

              <ul className="hidden lg:flex items-center gap-10 text-gray-800">
                {["Home", "About", "Service", "Contact"].map((label) => (
                  <li key={label}>
                    <Link
                      to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                      className="font-medium mx-2 hover:text-orange-500 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 sm:gap-4">
                <button className="hidden md:inline-flex h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors items-center justify-center">
                  <img src="search.svg" alt="search" />
                </button>
                <button className="relative hidden md:inline-flex h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 items-center justify-center">
                  <img src="cart.svg" alt="cart" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#F74F22] text-white text-[11px] grid place-items-center">0</span>
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#F74F22] hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-colors"
                >
                  Donate Us
                </button>

                <button
                  onClick={() => setOpen(!open)}
                  className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <span className="relative block h-5 w-6">
                    <span className={`absolute left-0 right-0 top-0 h-0.5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`absolute left-0 right-0 top-2 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
                    <span className={`absolute left-0 right-0 top-4 h-0.5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg px-4 sm:px-6 pt-2 pb-4">
                <ul className="grid gap-2 py-2 text-gray-800">
                  {["Home", "About", "Service", "Contact"].map((label) => (
                    <li key={label}>
                      <button
                        onClick={() =>
                          handleNavClick(label === "Home" ? "/" : `/${label.toLowerCase()}`)
                        }
                        className="block w-full text-left rounded-lg px-3 py-2 hover:bg-gray-50 font-medium mx-2"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>

                <hr className="my-3 border-gray-200" />

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 rounded-full bg-gray-100 grid place-items-center">
                      <img src="search.svg" alt="Search" />
                    </button>
                    <button className="relative h-10 w-10 rounded-full bg-gray-100 grid place-items-center">
                      <img src="cart.svg" alt="Cart" />
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#F74F22] text-white text-[11px] grid place-items-center">0</span>
                    </button>
                  </div>

                  <button
                    className="inline-flex items-center justify-center rounded-full bg-[#F74F22] hover:bg-orange-600 text-white px-6 py-2 text-sm font-semibold shadow-sm"
                    onClick={() => {
                      setOpen(false);
                      setIsModalOpen(true);
                    }}
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
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
