import React from "react";
import DeshiCow from "../../../public/assets/deshi.jpg"
import JamunaGoat from "../../../public/assets/Jamuna.jpg"
import RedCow from "../../../public/assets/Red.jpg"
import BlackGoat from "../../../public/assets/Black.jpg"
import Image from "next/image";


const TopBreeds = () => {
  const breeds = [
    {
      name: "Deshi Cow",
      image: DeshiCow,
      description:
        "A traditional local breed known for its adaptability and suitability for Qurbani.",
    },
    {
      name: "Jamunapari Goat",
      image: JamunaGoat,
      description:
        "A distinctive goat breed known for its tall appearance, long ears, and impressive body structure.",
    },
    {
      name: "Red Cattle",
      image: RedCow,
      description:
        "A distinctive Bangladeshi breed known for its compact build and adaptability.",
    },
    {
      name: "Black Bengal Goat",
      image: BlackGoat,
      description:
        "A popular local goat breed valued for its manageable size and suitability for Qurbani.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-15 md:py-20 px-6 md:mt-10">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Top Breeds</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Explore some of the most popular and trusted breeds for Qurbani.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {breeds.slice(0, 3).map((breed, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-56 md:h-72 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={breed.image}
              alt={breed.name}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 p-2 sm:p-4 md:p-5">
              <h2 className="text-white text-xs sm:text-base md:text-xl font-bold mb-0.5 md:mb-1 leading-tight">
                {breed.name}
              </h2>
              <p className="hidden sm:block text-white/80 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2">
                {breed.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 sm:mt-4 md:mt-6">
        {breeds.slice(3).map((breed, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-56 md:h-72 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={breed.image}
              alt={breed.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-2 sm:p-4 md:p-5">
              <h2 className="text-white text-xs sm:text-base md:text-xl font-bold mb-0.5 md:mb-1 leading-tight">
                {breed.name}
              </h2>
              <p className="hidden sm:block text-white/80 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2">
                {breed.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TopBreeds;