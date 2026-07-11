import React from 'react';
import {allAnimalsData} from '@/lib/AnimalsData';
import AnimalCard from '../Cards/AnimalCard';

const Featured = async() => {
    const animals = await allAnimalsData();
    const allAnimals = animals.slice(0,4);
    

    return (
        <div className='container mx-auto my-14 px-3.5'>
            <div>
                <div className='text-center space-y-5'>
                    <h2 className='font-bold text-2xl md:text-5xl'>Our Featured Livestock Collection</h2>
                    <p className="font-medium text-md lg:text-lg text-gray-500">Browse our most popular and high-quality Qurbani animals. From local breeds to premium livestock, <br/>find the perfect animal that meets your needs and budget.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-5'>
                    {allAnimals.map((animal) => (<AnimalCard key={animal.id} animal={animal}></AnimalCard>))}

                </div>
            </div>
        </div>
    );
};

export default Featured;