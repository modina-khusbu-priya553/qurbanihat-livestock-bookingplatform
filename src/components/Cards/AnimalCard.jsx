import Image from 'next/image';
import React from 'react';
import { FaWeightHanging } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const AnimalCard = ({animal}) => {
    // const {image, breed, name, weight, location} = animal
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className='relative w-full aspect-square'>
                    <Image
                        src={animal.image}
                        alt={animal.name}
                        fill
                        className='object-cover'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        
                    />
                    
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-lg xl:text-xl">
                    { animal.name}
                    <div className="badge badge-neutral badge-outline font-medium text-[#FB5607]">{animal.breed}</div>
                    </h2>
                    
                    <div className="card-actions justify-start gap-6">
                        <div className='flex items-center justify-center gap-1.5'><FaLocationDot className='text-red-700' />
                            <h2 className='font-medium text-lg'>{animal.location}</h2></div>
                        <div className='flex items-center justify-center gap-1.5'><FaWeightHanging />
                            <h2 className='font-medium text-lg'>{animal.weight} KG</h2></div>
                    </div>
                    <button className='btn btn-xs sm:btn-sm md:btn-md rounded-full'>Vew Details</button>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;