import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GiCow } from "react-icons/gi";


const NotFoundPage = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-base-100">
      <GiCow className="text-8xl text-[#4CC9F0] mb-6" />

      <h1 className="text-6xl md:text-8xl font-bold text-[#4361EE] mb-2">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back on track.
      </p>

      <Link
        href="/"
        className="btn bg-[#4361EE] hover:bg-[#3651d4] text-white rounded-lg flex items-center gap-2"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
    );
};

export default NotFoundPage;