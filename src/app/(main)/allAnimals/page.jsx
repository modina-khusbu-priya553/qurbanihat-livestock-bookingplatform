import AnimalCard from '@/components/Cards/AnimalCard';
import { allAnimalsData } from '@/lib/AnimalsData';
import React from 'react';

const AllAnimalsPage = async() => {
    const allAnimals= await allAnimalsData();
    console.log(allAnimals )

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6 mt-16 p-2'>
                {allAnimals.map(animal => (<AnimalCard key={animal.id} animal={animal}></AnimalCard>))}
            </div>
        </div>
    );
};

export default AllAnimalsPage;