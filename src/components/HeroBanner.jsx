import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunPPoIaZ72BEtGxZ66ALJ9mLpOxN8ywwdnA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeVzSY-SS-qgbccteTp4qZ3AFUCCtS_IECQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocSfYfA_HxR0BWU0S-rJqdcssiOC1GrM0yA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTc2X6U8lE6ONFMg43zje1DPTOG4NH7BBlEA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfs5VBqNt49TfDPJxkyMpFFvMR1a_hJz7TtA&s",
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-left h-screen bg-gray-900">
      <div className="absolute w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-start p-8  bg-opacity-50 rounded-lg text-white">
        <span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-left">
            Discover the Perfect <br /> Activity for Your <br /> Child!
          </h1>
        </span>

        <button className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg sm:text-xl md:text-2xl transition duration-300 mt-4 ">
          <ArrowRightIcon className="ml-2 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        <button className="px-6 py-3 bg-orange-600 hover:bg-blue-700 rounded-full text-xl sm:text-2xl md:text-3xl text-white transition duration-300">
          For Academies
        </button>
        <button className="px-6 py-3 bg-orange-600 hover:bg-blue-700 rounded-full text-xl sm:text-2xl md:text-3xl text-white transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
