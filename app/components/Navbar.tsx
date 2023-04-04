
"use client";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center  fixed top-0 z-10 w-full justify-between flex-wrap font-serif shadow-xl background p-2 ">
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black  border-transparent hover:text-black"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" /></svg>
          <Image alt="image"src="piaic.jpg" className=" h-10 w-10 lg:ml-28 lg:mt-2  ml-16" />
          <div className='lg:mr-1 ml-14'>
            <button className="rounded-full text-white border-2 lg:w-40 w-20 lg:py-3 py-1  text-center text-xs button">Download</button>
          </div>
        </button>

      </div>
      <div className="flex items-center  flex-shrink-0 text-white mr-6">
        <a href="/" className="lg:block hidden">
          <Image  alt="image" src="piaic.jpg" className=" h-20 w-16 lg:ml-28 lg:mt-2" />
        </a>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md  lg:flex-grow ">
          <a href="/">
            <p
              className="block mt-4 lg:ml-40 lg:inline-block lg:mt-0 text-white hover:text-purple-950 mr-4"
              onClick={toggleMenu}
            >
              Home
            </p>
          </a>
          <a href="./feature">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-950 mr-4"
              onClick={toggleMenu}
            >
              Features
            </p>
          </a>
          <a href="/faq">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-950"
              onClick={toggleMenu}
            >
              FAQs
            </p>
          </a>
          <a href="/contact">
            <p
              className="block mt-4 lg:ml-5 lg:inline-block lg:mt-0 text-white hover:text-purple-950"
              onClick={toggleMenu}
            >
              Contact Us
            </p>
          </a>
        </div>
        <div className='lg:mr-10 ml-48 lg:block hidden'>
                <button className="rounded-full text-white border-2 lg:w-40 w-24 lg:py-3 py-1  text-center text-sm button">Apply Now</button>

             </div>
      </div>
    </nav>
  );
};

export default Navbar;
