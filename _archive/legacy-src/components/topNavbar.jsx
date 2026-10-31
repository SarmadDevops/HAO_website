import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGlobe } from 'react-icons/fa';


const TopNavbar = () => {
  return (
    <header className="w-full bg-gray-200 text-black text-[13px] z-50 mb-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center gap-6">
          {/* Email */}
          <div className="flex items-center gap-2 opacity-90">
            <span className="inline-flex h-3.5 w-3.5">
              <img src="mail.svg" alt="Email" />
            </span>
            <span>support@aidus.com</span>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 opacity-90">
            <span className="inline-flex h-3.5 w-3.5">
              <img src="phone.svg" alt="Phone" />
            </span>
            <span>+88 7869 5874 96</span>
          </div>
        </div>

        {/* Follow us */}
        <div className="md:flex items-center gap-2 text-black px-3 py-1.5">
  <span className="text-[12px] font-medium">Follow Us :</span>
  <FaFacebookF className="h-4 w-5 rounded-full" />
  <FaLinkedinIn className="h-4 w-5 rounded-full" />
  <FaInstagram className="h-4 w-5 rounded-full" />
  <FaGlobe className="h-4 w-5 rounded-full" />
</div>

      </div>
    </header>
  );
};

export default TopNavbar;
