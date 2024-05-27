import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const academies = [
  {
    id: 1,
    name: "National Academy",
    place: "New York",
    description: "Best academy for sports",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAC8HBb0kZviQmwgvFOTaTAOx0W5AjghXdw&s",
  },
  {
    id: 2,
    name: "IMG Academy",
    place: "California",
    description: "Top-notch music academy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANwDuYP5dvG_YaN4TQXxf53cavMSPzAFqyA&s",
  },
  {
    id: 3,
    name: "United World Academy",
    place: "Texas",
    description: "Premier dance academy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIx4Gds1spGw1Okuu-wgaRU2PA4_riiM7Qg&s",
  },
  {
    id: 4,
    name: "Reliance Academy",
    place: "Mumbai",
    description: "Excellent art academy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvlJRRg5zHlEF3Bb9yHkknm1dyZh2IeCNNQ&s",
  },
  {
    id: 5,
    name: "Faith Academy",
    place: "Nevada",
    description: "Outstanding science academy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOprazvtsZ-jIkYwaKG4Wcp9F_66uUHu5nHA&s",
  },
];

const TopAcademies = () => {
  const [currentAcademy, setCurrentAcademy] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAcademy((prevIndex) =>
        prevIndex === academies.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Explore Our Top Academies
        </h2>
        <div className="flex flex-row overflow-hidden space-x-4">
          {academies
            .slice(currentAcademy, currentAcademy + 3)
            .map((academy) => (
              <div
                key={academy.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={academy.image}
                    alt={academy.name}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">{academy.name}</h3>
                  <p className="text-gray-700">{academy.place}</p>
                  <p className="text-gray-600">{academy.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopAcademies;
