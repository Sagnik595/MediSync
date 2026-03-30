import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#5F6FFF] rounded-2xl mx-30 mt-20 px-10 py-12 overflow-hidden relative min-h-[340px]">
      {/* ------ Left Side ------- */}
      <div className="flex flex-col gap-6 z-10 max-w-[500px]">
        {/* Headline */}
        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        {/* Profiles + Tagline */}
        <div className="flex items-center gap-3">
          <img
            src={assets.group_profiles}
            alt="Trusted doctors"
            className="w-24 h-auto rounded-full"
          />
          <p className="text-white/80 text-sm leading-snug max-w-[220px]">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="flex items-center gap-2 bg-white text-gray-700 font-medium text-sm px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors duration-200 shadow-sm"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="" className="w-4 h-4" />
        </a>
      </div>

      {/* ------ Right Side ------- */}
      <div className="mt-8 md:mt-0 flex items-end justify-end self-end z-10">
        <img
          src={assets.header_img}
          alt="Trusted doctors"
          className="w-full max-w-[400px] md:max-w-[480px] object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Header;