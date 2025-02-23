import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import tecoreng_logo from "/tecoreng_logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 w-full h-24 shadow-[0px_1px_0px_rgba(149,149,149,0.3)] bg-[#01132E] px-4 flex items-center justify-between z-30">
      {/* Logo */}
      <div className="absolute top-0 left-4 flex items-center h-full">
        <a href="#">
          <img src={tecoreng_logo} alt="Company Logo" className="h-10" />
        </a>
      </div>

      {/* Desktop Navigation - Hidden on small screens */}
      <div className="hidden lg:flex w-[calc(625px + 50vw)] ml-auto px-[15px] h-full relative">
        <div className="flex items-end h-full w-full">
          <nav className="h-full">
            <ul className="navMenus flex items-center flex-wrap list-none gap-10 m-0 h-full p-0">
              <li className="menu-items flex items-center h-full">
                <a href="#">Services</a>
              </li>

              {/* About Us with Dropdown */}
              <li className="menu-items flex items-center h-full relative group">
                <a href="#" className="hover:text-gray-300">
                  About Us <span className="arrowdropdown"></span>
                </a>
                <ul className="absolute left-0 top-full mt-0 w-64 bg-[#112542] shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  <li className="flex items-center my-8 mx-4 px-4 py-2 hover:border-b-2 hover:border-[#f86334]">
                    <a href="#">Who we are</a>
                  </li>
                  <li className="flex items-center px-4 py-2 my-8 mx-4 hover:border-b-2 hover:border-[#f86334]">
                    <a href="#">Industries we serve</a>
                  </li>
                </ul>
              </li>

              <li className="menu-items flex items-center h-full">
                <a href="#">Career</a>
              </li>
              <li className="menu-items flex items-center h-full">
                <a href="#">Portfolio</a>
              </li>
              <li className="menu-items flex items-center h-full">
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Buttons (Hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-3 px-5">
        <button className="navHireButton">Hire Developer</button>
        <button className="navGetButton">Get a Quote</button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden ml-auto text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu - Only shown on small screens */}
      {isOpen && (
        <div className="fixed top-24 left-0 w-full h-full bg-[#01132E] text-white flex flex-col items-start py-4 px-6 lg:hidden">
          <a href="#" className="block w-full py-3 border-b border-gray-600 hover:border-[#f86334]">
            Services
          </a>
          <a href="#" className="block w-full py-3 border-b border-gray-600 hover:border-[#f86334]">
            About Us
          </a>
          <a href="#" className="block w-full py-3 border-b border-gray-600 hover:border-[#f86334]">
            Career
          </a>
          <a href="#" className="block w-full py-3 border-b border-gray-600 hover:border-[#f86334]">
            Portfolio
          </a>
          <a href="#" className="block w-full py-3 border-b border-gray-600 hover:border-[#f86334]">
            Blog
          </a>
          
          {/* Buttons centered and stretched */}
          <div className="w-full flex flex-col items-center mt-6 space-y-3">
            <button className="navHireButton" style={{width:"85%"}}>
              Hire Developer
            </button>
            <button className="navGetButton" style={{width:"85%"}}> 
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
