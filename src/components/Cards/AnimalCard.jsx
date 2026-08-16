import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWeightHanging } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AnimalCard = ({ animal }) => {
  // const {image, breed, name, weight, location} = animal
  return (
    <div>
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <figure className="relative w-full aspect-square">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2">
            <h2>{animal.name}</h2>
            <div className="badge whitespace-nowrap badge-neutral badge-outline font-medium text-[#4361EE]">
              {animal.breed}
            </div>
          </div>

          <div className="card-actions justify-start gap-6">
            <div className="flex items-center justify-center gap-1.5">
              <FaLocationDot className="text-red-700" />
              <h2 className="font-medium text-lg">{animal.location}</h2>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <FaWeightHanging />
              <h2 className="font-medium text-lg">{animal.weight} KG</h2>
            </div>
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md rounded-full">
            <Link href={`/allAnimals/${animal.id}`}>Vew Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
