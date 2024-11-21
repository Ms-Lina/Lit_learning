// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">LITLIFE</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:bg-secondary px-3 py-2 rounded-md">Home</Link>
              <Link to="/courses" className="hover:bg-secondary px-3 py-2 rounded-md">Courses</Link>
              <Link to="/about" className="hover:bg-secondary px-3 py-2 rounded-md">About Us</Link>
              <Link to="/login" className="hover:bg-secondary px-3 py-2 rounded-md">Login</Link>
              <Link to="/register" className="bg-secondary hover:bg-opacity-80 px-4 py-2 rounded-md">Register</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-300">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-secondary px-3 py-2 rounded-md">Home</Link>
            <Link to="/courses" className="block hover:bg-secondary px-3 py-2 rounded-md">Courses</Link>
            <Link to="/about" className="block hover:bg-secondary px-3 py-2 rounded-md">About Us</Link>
            <Link to="/login" className="block hover:bg-secondary px-3 py-2 rounded-md">Login</Link>
            <Link to="/register" className="block bg-secondary hover:bg-opacity-80 px-3 py-2 rounded-md">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;