import React, { useState } from 'react';
import Navitem from './Navitem';
import logo from "../../assets/logo.png"
import logo2 from "../../assets/logo2.png"
import { IoIosArrowDown } from "react-icons/io";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Refer", "Benifits", "Faqs", "Support"];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className='flex items-center justify-center gap-4'>
        <img src={logo} alt="accredian" className="h-8" />
        <div className='hidden lg:block'>
        <div className="flex items-center justify-center rounded-md bg-[#1A73E8] py-2 px-[18px] gap-[6px]">
                <div className="leading-[24px] font-medium text-[#FFFFFF]">
                  Courses
                </div>
                <IoIosArrowDown className="text-[#FFFFFF] mt-[3px]"/>
          </div>
          </div>
         </div>
        <div className='flex items-center justify-center gap-4'>
        <nav className="hidden md:flex space-x-6 text-[15px] font-medium text-[#1A202C]">
          <Navitem href="#" active>
            Refer & Earn
          </Navitem>
          <Navitem href="#">Resources</Navitem>
          <Navitem href="#">About Us</Navitem>
        </nav>
        <div className='flex gap-4'>
        <a href="https://home.accredian.com/login" className="hidden md:block bg-custom-gray text-white px-4 py-2 rounded-lg font-medium text-[#1A202C]">
          Login
        </a>
        <a href="https://trial.accredian.com/" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
          Try for free
        </a>
        </div>
        </div>
        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
         <ul
         className=  {isMenuOpen? "fixed md:hidden left-0 top-0 w-[60%] h-screen border-r text-white border-r-gray-900 bg-blue-600  ease-in-out duration-500 z-50"
                  : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-[150]"}
       >
         <li className="p-4">
           <img src={logo2} />
         </li>
         {/* Mobile Navigation Items */}
         {navItems.map((item) => (
           <li
             key={item}
             className="p-4 border-b rounded-xl hover:bg-[#cccccc] hover:text-black duration-300 cursor-pointer border-gray-600"
           >
             {item}
           </li>
         ))}
       </ul>
    </header>
  );
};

export default Navbar;