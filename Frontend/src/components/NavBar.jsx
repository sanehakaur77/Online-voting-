import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] max-w-6xl z-50 bg-white/80 backdrop-blur-lg text-black px-6 py-4 flex items-center justify-between rounded-3xl shadow-lg transition duration-300 ease-in-out">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="sa.png"
            alt="Voting Logo"
            className="h-10 w-10 mr-2 rounded-full"
          />
          <span className="text-2xl font-bold">VotingApp</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `h-[40px] w-[100px] rounded-2xl flex justify-center items-center transition duration-300 ease-in-out
              ${isActive ? "font-bold text-blue-800" : "hover:text-gray-700"}`
            }
          >
            <p><i className="fa-solid fa-house mr-1"></i></p> Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `h-[40px] w-[100px] rounded-2xl flex justify-center items-center transition duration-300 ease-in-out
              ${isActive ? "font-bold text-blue-800" : "hover:text-blue-950"}`
            }
          >
            <p><i className="fa-solid fa-building mr-1"></i></p> About
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `h-[40px] w-[100px] rounded-3xl flex justify-center items-center shadow-md transition duration-500 ease
              ${isActive ? "bg-green-500 text-white" : "bg-green-400 hover:bg-green-300"}`
            }
          >
            <p><i className="fa-solid fa-user-plus mr-1"></i></p> Register
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay (when menu opens) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 md:hidden"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-gray-900 text-white w-[250px] h-screen transform transition-transform duration-300 flex flex-col p-6 gap-6 z-50 overflow-hidden md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 hover:text-green-400 ${
              isActive ? "text-green-400 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 hover:text-green-400 ${
              isActive ? "text-green-400 font-semibold" : ""
            }`
          }
        >
          About
        </NavLink>

      <NavLink
          to="/signup"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 hover:text-green-400 ${
              isActive ? "text-green-400 font-semibold" : ""
            }`
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 hover:text-green-400 ${
              isActive ? "text-green-400 font-semibold" : ""
            }`
          }
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
