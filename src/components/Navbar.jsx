import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          MonPortfolio
        </h1>

      
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        
        <button
          className="md:hidden text-3xl text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md pb-4 space-y-4 font-medium text-gray-700">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Contact
          </a>
          <a href="#competences" className="hover:text-blue-600">
            Compétences
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
