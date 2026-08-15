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
    <div className="max-w-7xl mx-auto mt-20">
      <div className="flex flex-col md:flex-row bg-base-200 shadow-sm p-2.5 gap-6 max-w-4xl mx-auto">
        
        
      {/* Left side - Image */}
<div className="w-full md:w-1/4">
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
        <div className="w-full md:w-3/4">
          <div className="card-body gap-4">
            <h2 className="card-title font-bold text-lg xl:text-xl">
              {name}
              <div className="badge badge-neutral badge-outline font-medium text-[#4361EE]">
                {breed}
              </div>
            </h2>
            <p>{description}</p>

            <div className="flex items-center gap-1.5">
              <CiMoneyCheck1 />
              <h2 className="font-medium text-lg">{price} TK</h2>
            </div>

            <div className="card-actions justify-baseline gap-6">
              <div className="flex items-center justify-center gap-1.5">
                <FaLocationDot className="text-red-700" />
                <h2 className="font-medium text-lg">{animal.location}</h2>
              </div>

              <div className="divider lg:divider-horizontal"></div>

              <div className="flex items-center justify-center gap-1.5">
                <FaWeightHanging />
                <h2 className="font-medium text-lg">{animal.weight} KG</h2>
              </div>
            </div>

            <div className="card-actions">
              <BookingForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;