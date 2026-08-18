import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaWeightHanging } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BookingForm from "./BookingForm";

const DetailsCard = ({ animal }) => {
  const {
    name,
    type,
    breed,
    price,
    weight,
    age,
    location,
    description,
    category,
  } = animal;

  return (
    <div className="max-w-7xl mx-auto px-5 py-15 md:py-20">
      <h2 className="text-center font-bold text-2xl md:text-4xl py-5 md:py-10">Meet Your Qurbani Animal</h2>
      <div className="flex flex-col md:flex-row rounded-lg shadow-lg hover:shadow-2xl p-2.5 gap-6 max-w-4xl mx-auto mt-10">
        {/* Left side - Image */}
        <div className="w-full">
          <figure className="relative w-full h-64 md:h-full">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
            />
            <div className="badge badge-xs badge-ghost absolute top-2 left-1">
              {category}
            </div>
          </figure>
        </div>

        {/* Right side - Details */}
        <div className="w-full space-y-1">
          <div className="card-body gap-1">
            <h2 className="card-title font-bold text-lg xl:text-2xl">
              {name}
              <div className="badge badge-sm badge-neutral badge-outline font-medium text-[#4361EE]">
                {breed}
              </div>
            </h2>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1.5">
                <FaLocationDot className="text-gray-400" />
                <h2 className="text-gray-400 text-sm">{animal.location}</h2>
              </div>
              <span className="text-gray-400 text-sm">Age: {age} years</span>
              <span className="text-gray-400 text-sm">Type: {type}</span>
            </div>

           

            <div className="divider lg:divider-vertical"></div>
             <div className="flex items-center justify-baseline gap-6">
              <div className="flex items-center justify-center gap-1.5 rounded-lg border-gray-200 border-2 bg-gray-100 p-2 w-full">
                <FaWeightHanging />
                <h2 className="font-medium">Weight: {animal.weight} KG</h2>
              </div>
              
              <span className="rounded-lg border-gray-200 border-2 bg-gray-100 p-2 w-full">
                <h2 className="font-medium">Price: {price} TK</h2>
              </span>
            </div>

            <div className="space-y-1.5 mt-2 rounded-lg border-gray-200 border-2 bg-gray-100 p-2 w-full">
              <h2 className="font-semibold text-lg">Animal Description</h2>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>

            <div className="card-actions mt-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
