import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunPPoIaZ72BEtGxZ66ALJ9mLpOxN8ywwdnA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeVzSY-SS-qgbccteTp4qZ3AFUCCtS_IECQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocSfYfA_HxR0BWU0S-rJqdcssiOC1GrM0yA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTc2X6U8lE6ONFMg43zje1DPTOG4NH7BBlEA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfs5VBqNt49TfDPJxkyMpFFvMR1a_hJz7TtA&s",
];

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-screen max-w-full rounded-lg overflow-hidden shadow-lg relative">
        <div className="relative w-full h-full">
          {images.map((imageLink, i) => (
            <img
              key={i}
              src={imageLink}
              alt={`Slide ${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 flex items-center text-left text-white bg-opacity-50 p-5 rounded-lg font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-4 sm:ml-8 md:ml-12 lg:ml-16">
            <p className="animate__animated animate__fadeInLeft transition duration-500 ease-in-out">
              Find the Best <br /> Activity for your <br /> Child!
            </p>

            <span className="ml-3 mt-2 rounded-full bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out">
              <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
            </span>
          </div>

          <div className="absolute bottom-6 w-full flex flex-col md:flex-row justify-center py-4">
            <button className="w-full md:w-64 lg:w-72 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-blue-400 text-white p-3 rounded-full mb-2 md:mb-0 md:mr-2.5 mt-10 hover:bg-green-500 transition duration-300 ease-in-out">
              For Academies
            </button>
            <button className="w-full md:w-80 lg:w-96 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-blue-400 text-white p-3 rounded-full mt-10 hover:bg-green-500 transition duration-300 ease-in-out">
              Sign Up in your Area
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
