import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/assets/cow.webp'


const Navbar = () => {
    const links =<>
                <li className='text-lg font-semibold'><Link href="/">Home</Link></li>
                <li className='text-lg font-semibold'><Link href="/allAnimals">All Animals</Link></li>
                <li className='text-lg font-semibold'><Link href="/allAnimals/animalId">Animal Details</Link></li>
                <li className='text-lg font-semibold'><Link href="/profile">My Profile</Link></li>

                </>
    return (
        <div className='bg-base-100 shadow-sm '>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div>
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={60}
                                height={60}
                            />
                        </div>

                        <h2 className='text-lg md:text-3xl font-bold'>QurbaniHat</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-2 navbar-end">
                    <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl md:text-lg text-white bg-[#4CC9F0]'><Link href="/signIn">Sign In</Link></button>
                    <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl md:text-lg bg-[#4361EE] text-white'><Link href="/signUp">Sign Up</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;