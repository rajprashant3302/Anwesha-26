import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 text-white font-sans relative z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/anwesha_logo_multicity.png"
              alt="Website Logo"
              className="h-10 mr-4"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button - Shown on small screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation - Hidden on small screens */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8 text-xl">
          <a href="/events" className="relative hover:scale-110 group hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            Events
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="/schedule" className="relative hover:scale-110 group hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            Schedule
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="/merch" className="relative hover:scale-110 group hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            Merch
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="/gallery" className="relative group hover:scale-110 hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            Gallery
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>  
          </a>
          <a href="/teams" className="relative group hover:scale-110 hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            Teams
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          
          <a href="/sponsors" className="relative group hover:scale-110 hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            Sponsors
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>
          </a>

          <a href="/about" className="relative text-nowrap group hover:scale-110 hover:text-amber-500 transition-colors duration-300 px-2 py-1">
            About Us
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-500 transition-transform duration-300 origin-center transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          
        </div>

        {/* Desktop Buttons - Hidden on small screens to save space */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className=" sexy_button hover:sexy_button focus:sexy_button active:sexy_button sexy_btn_bg_2">
            PROFILE
          </button>
          <button className=" sexy_button hover:sexy_button focus:sexy_button active:sexy_button sexy_btn_bg_2">
            GET PASSES
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-neutral-900 border-t border-gray-700 shadow-lg`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Events
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Schedule
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Merch
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Gallery
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Teams
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Sponsors
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            About Us
          </a>
          <a href="#" className="px-2 py-2 hover:bg-gray-700 rounded-md">
            Contact Us
          </a>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="sexy_button hover:sexy_button focus:sexy_button active:sexy_button sexy_btn_bg_2">
              PROFILE
            </button>
            <button className="sexy_button hover:sexy_button focus:sexy_button active:sexy_button sexy_btn_bg_2">
              GET PASSES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}