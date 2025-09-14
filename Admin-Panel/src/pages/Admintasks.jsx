import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
 
      <aside className="w-64 bg-blue-100 shadow-md h-screen p-6  mask-b-from-neutral-100">
      <h2 className="text-3xl font-bold mb-6">Admin-panel</h2>
      <nav className="flex flex-col space-y-4 ">
       <div  className='h-[40px] w-[200px]  bg-gray-400 rounded-[20px]  hover:bg-gray-700  flex items-center  justify-center'>
         <Link to="/add-parties" className="text-white  hover:font-semi-bold transition text-xl">
          Add Parties
        </Link>
       </div>
        <div className='h-[40px] w-[200px] bg-gray-400 rounded-[20px] hover:bg-gray-700 flex items-center justify-center'>
            <Link to="/parties" className="text-white hover:font-semibold transition text-xl">
           Parties
        </Link>
        </div>
       <div className='h-[40px] w-[200px] bg-gray-400 rounded-[20px] hover:bg-gray-700 flex items-center justify-center'>
         <Link to="/results" className="text-white  hover:font-semibold transition text-xl">
        See results
        </Link>
        
       </div> 
      </nav>
       
    </aside>
   
  );
};

export default Sidebar;
