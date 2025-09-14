import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
        <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src='vote..jpg' alt="Voting Logo" className="h-10 w-10 mr-2 rounded-full" />
        <span className="text-2xl font-bold">VotingApp</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          About
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          Login
        </NavLink>
        
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="focus:outline-none text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

     
      <div
        className={`fixed top-0 right-0 bg-gray-900 text-white w-[250px] h-screen transform transition-transform duration-300 flex flex-col p-6 gap-6 z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross button */}
        <button
          onClick={() => setIsOpen(false)}
          className="self-end mb-4 focus:outline-none text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          About
        </NavLink>
        <NavLink
          to="/signup"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
        >
          Login
        </NavLink>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;

