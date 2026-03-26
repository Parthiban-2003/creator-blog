import React from "react";
import { FaYoutube } from "react-icons/fa";

function Hero({ title, subtitle, ctaText, ctaTargetId, bgImage, icon }) {

  const handleScroll = () => {
    const section = document.getElementById(ctaTargetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col justify-center items-center h-screen text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative text-white flex flex-col items-center max-w-4xl">
        {icon && <div className="text-7xl mb-6">{icon}</div>}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          {subtitle}
        </p>

        <button
          onClick={handleScroll}
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
        >
          {ctaText} <FaYoutube />
        </button>
      </div>
    </section>
  );
}

export default Hero;