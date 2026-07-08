import Image from 'next/image';
import React from 'react';
import BannerImage from '../../../public/assets/banner.jpg'
import { FaArrowRight, FaPlay } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className="container mx-auto px-4 py-2.5 md:py-20">
                <div className="flex items-center gap-8 flex-col-reverse justify-between lg:flex-row-reverse">
                    <Image
                        src={BannerImage}
                        alt='Cow'
                        width={500}
                        height={200}
                        className='w-full max-w-md md:max-w-lg h-auto rounded-2xl'
                    />
                    <div className='flex flex-col items-center lg:items-start gap-2'>
                        <h1 className='font-bold text-4xl md:text-7xl'>Your  
                            <span className='text-3xl md:text-5xl text-[#FB5607]'> Trusted</span> 
                        <br/> 
                            <span className='text-3xl md:text-5xl text-[#3A86FF]'>Livestock</span> Marketplace
                        </h1>

                        <p className="py-6 font-medium text-md md:text-xl text-gray-600">
                            Welcome to QurbaniHat, your trusted livestock booking platform. 
                            We make it easy to find <br/>healthy and verified cows and goats for 
                            Qurbani by providing detailed information, transparent pricing, 
                            <br/>and a simple online booking experience.
                        </p>
                        <div className='flex items-center justify-center gap-2.5'>
                            <button className="btn bg-[#4CC9F0] md:text-lg text-white">Explore Now <FaArrowRight /></button>
                            <button className='btn btn-soft btn-info md:text-lg'><FaPlay /> How it Works</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;