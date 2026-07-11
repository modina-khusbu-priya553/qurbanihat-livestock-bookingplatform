import Image from 'next/image';
import React from 'react';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { FaWeightHanging } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const DetailsCard = ({animal}) => {
    console.log(animal)
    const {name, type, breed, price, weight, age, location, description, category} = animal;
    return (
        <div className=' container mx-auto mt-20'>
            <div className="card bg-base-200 shadow-sm p-2.5 max-w-lg lg:max-w-xl mx-auto">
                <figure className="px-10 pt-10 relative w-full aspect-square">
                    <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            className='object-cover rounded-2xl'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"    
                         />
                        <div className="badge badge-md badge-ghost absolute top-5 right-6">{category}</div>
                </figure>
                <div className="card-body gap-4">
                    <h2 className="card-title font-bold text-lg xl:text-xl">
                    {name}
                    <div className="badge badge-neutral badge-outline font-medium text-[#FB5607]">{breed}</div>
                    </h2>
                    <p>{description}</p>

                    <div className='flex items-center gap-1.5'><CiMoneyCheck1 />
                            <h2 className='font-medium text-lg'>{price} TK</h2>
                        </div>

                    <div className="card-actions justify-baseline gap-6">

                        <div className='flex items-center justify-center gap-1.5'><FaLocationDot className='text-red-700' />
                            <h2 className='font-medium text-lg'>{animal.location}</h2>
                        </div>

                            <div className="divider lg:divider-horizontal"></div>

                        <div className='flex items-center justify-center gap-1.5'><FaWeightHanging />
                            <h2 className='font-medium text-lg'>{animal.weight} KG</h2>
                        </div>
                    </div>

                    <div className="card-actions">
                    <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
                            
        </div>
    );
};

export default DetailsCard;