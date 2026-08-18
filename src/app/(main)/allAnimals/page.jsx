import AnimalCard from '@/components/Cards/AnimalCard';
import SortDropdown from '@/components/Cards/SortDropdown';

import { allAnimalsData } from '@/lib/AnimalsData';
import React from 'react';

const AllAnimalsPage = async ({ searchParams }) => {
    const allAnimals = await allAnimalsData();
    const { sort } = await searchParams;

    let sortedAnimals = [...allAnimals];

    if (sort === "asc") {
        sortedAnimals.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
        sortedAnimals.sort((a, b) => b.price - a.price);
    }

    return (
        <div className='max-w-7xl mx-auto px-3.5'>
            <div className="flex justify-end mt-16 mb-4">
                <SortDropdown currentSort={sort} />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6 p-2'>
                {sortedAnimals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                ))}
            </div>
        </div>
    );
};

export default AllAnimalsPage;