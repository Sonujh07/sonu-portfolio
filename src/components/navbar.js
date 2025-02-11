import React from 'react';
import { BsTelephoneForwardFill  } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex bg-snowWhite flex-col md:flex-row justify-between items-center w-full lg:px-20 py-10 mx-auto text-xl md:px-8 md:gap-x-12">
       {/* First div: Logo or text */}
        <div className="relative flex justify-center items-center h-8 w-8 mb-4 md:mb-0 ml-10">
            <div className="h-9 w-9 rounded-full bg-coolBlue absolute z-0"></div>
            <p className="text-xl md:text-2xl font-raleway font-semibold z-10 text-black">Sonu.tech</p>
        </div>

     {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 items-center space-y-2 md:space-y-0">
            <Link 
              to="/home" 
              className="block transition duration-300 ease-in hover:font-bold hover:scale-105 hover:text-blue-400"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block transition duration-300 ease-in hover:font-bold hover:scale-105 hover:text-blue-400"
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="block transition duration-300 ease-in hover:font-bold hover:scale-105 hover:text-blue-400"
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="block transition duration-300 ease-in hover:font-bold hover:scale-105 hover:text-blue-400"
            >
              Contact
            </Link>
        </div>

            {/* Right Section (CV and Connect) */}
        <div className="flex flex-col md:flex-row md:space-x-4 items-center">

          <div className='flex transition duration-700 ease-in-out transform  hover:bg-blue-400 hover:text-white'>
            <a href={`${process.env.PUBLIC_URL}/cvSonu.pdf`}>Download CV</a>
            <FaDownload />
          </div>

          <div className='flex transition duration-300 ease-in hover:text-blue-400'>
            <a href={`${process.env.PUBLIC_URL}/cvSonu.pdf`}>Connect Me</a>
            <BsTelephoneForwardFill />
          </div>
         
        </div>

  </nav>

      );
};

export default Navbar;
