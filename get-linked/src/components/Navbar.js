// src/components/Navbar.js

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <span className="text-yellow-400">My</span>Navbar
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-yellow-400 focus:outline-none"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
