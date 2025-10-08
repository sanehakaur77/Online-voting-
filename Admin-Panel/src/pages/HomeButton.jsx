import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HomeButton = ({ to = "/admintasks", text = "Back to Home" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-400 transition-all duration-300"
    >
      <FaHome className="mr-2 text-lg" />
      <span className="mr-2">{text}</span>
      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
};

export default HomeButton;
