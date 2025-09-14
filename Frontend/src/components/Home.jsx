import React from 'react';
import Banner from './Banner';
import "../index.css";

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center relative'>
        <img src="voteIndia.jpg" alt="Voting" className="object-cover w-full h-full absolute top-0 left-0" />
        <Banner />  {/* Banner will appear centered over the image */}
    </div>
  )
}

export default Home;
