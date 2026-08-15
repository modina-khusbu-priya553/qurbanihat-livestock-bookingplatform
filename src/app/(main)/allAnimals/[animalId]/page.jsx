import DetailsCard from '@/components/Cards/DetailsCard';
import { allAnimalsData } from '@/lib/AnimalsData';
import React from 'react';

const AnimalsDetailPage = async({params}) => {
    const {animalId} = await params;
    console.log(animalId)
    
    const animalDetails = await allAnimalsData();
    const animal = animalDetails.find(animalDetail => animalDetail.id == animalId);

    return (
        <div>
            <DetailsCard animal={animal}></DetailsCard>
        </div>
    );
};

export default AnimalsDetailPage;