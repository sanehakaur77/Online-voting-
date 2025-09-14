import React from 'react';
import {useNavigate} from 'react-router-dom';
const HomeButton = () => {
   const navigate = useNavigate();
  return (
   
    <button className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300" onClick={()=>navigate('/admintasks')} >
      <span className="mr-2">🏠 Back to Home</span>
      <span
        className="transform transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </button>
  );
};

export default HomeButton;