import React from 'react'
import AOS, { init } from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
const About = () => {
  useEffect(()=>{
    AOS,init({
     duration:2000,
     easing:'ease-in',
     once:true 
    })
  },[])
  return (
 <>
  <div className='flex w-full m-auto min-h-screen justify-center' data-aos="fade-right">
    <div className="bg-white w-[80%] shadow-gray-500 bg-[url('parliament.jpg')] bg-no-repeat  bg-cover " >
    </div>
  </div>
  <div className='w-[80%] min-h-[50vh] bg-transparent  backdrop-blur-md p-10 m-auto ' data-aos="fade-right">
     <div>
      <h1 className='text-3xl font-bold'>Our Indian Parliament</h1>
      <p>India is the world’s largest democracy, and elections are the backbone of its democratic system. Through elections, citizens choose their representatives who form the Parliament and other governing bodies. The process ensures that the power to rule always rests with the people. Regular, free, and fair elections make India’s democracy strong and vibrant.</p>
      <ul>
        The Parliament of India

The Parliament of India is the <mark>supreme law-making body of the country</mark>. It consists of two houses:

<b>Lok Sabha</b> (House of the People)
Members of the Lok Sabha are directly elected by the citizens of India through general elections held every five years. Each member represents a particular constituency. The political party or alliance that secures a majority of seats forms the central government. The Prime Minister is usually the leader of the ruling party in the Lok Sabha.

<b>Rajya Sabha</b> (Council of States)
Members of the Rajya Sabha are indirectly elected by the elected members of the state legislative assemblies. It represents the states and union territories of India. The Vice President of India serves as the Chairman of the Rajya Sabha.

Together, the <mark>President, Lok Sabha, and Rajya Sabha</mark> form the Indian Parliament.
      </ul>
      <h1 className='text-2xl font-bold mt-7'>Election Comission of India</h1>
     <div
        className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl mt-7"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-[400px] bg-[url('election.jpg')] bg-cover bg-center"></div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full p-8 text-gray-700 text-justify">
          <p>
            The Election Commission of India (ECI) is an independent
            constitutional body responsible for conducting free and fair
            elections in the country. It ensures that the democratic process
            functions smoothly, allowing citizens to choose their
            representatives at the central, state, and local levels.
          </p>
          <p className="mt-4">
            Established on January 25, 1950, the ECI plays a vital role in
            maintaining the integrity of India’s democratic system. It oversees
            elections for the Parliament, State Legislatures, and the offices of
            the President and Vice President of India.
          </p>
        </div>
      </div>
    </div>
    </div>
 <div className="w-full min-h-[60vh] flex items-center justify-center bg-gray-100 py-16 px-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl max-w-5xl p-8 gap-8 " data-aos="fade-up">
        
        <div 
          className="w-64 h-64 rounded-full bg-[url('comissioner.jpg')] bg-cover bg-center shadow-lg"
        ></div>
        <div className="flex flex-col justify-center text-gray-700 md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">
            Shri Sushil Chandra-Election Commissioner of India
          </h2>
          <p className="text-lg font-semibold mb-4">
            Chief Election Commissioner of India
          </p>
          <p className="text-justify">
            The Chief Election Commissioner (CEC) is the head of the Election
            Commission of India, an independent constitutional authority
            responsible for conducting free and fair elections across the
            country. The CEC oversees elections for the Parliament, State
            Legislatures, and offices of the President and Vice President of
            India. Shri Sushil Chandra ensures transparency, impartiality, and
            smooth functioning of the democratic process in India.
          </p>
        </div>
      </div>
    </div>
     <div className="w-full min-h-[40vh] flex items-center justify-center bg-blue-50 py-16 px-6" data-aos="fade-out">
      <div
        className="bg-white shadow-lg rounded-xl p-8 max-w-3xl text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Message to All Voters
        </h2>
        <p className="text-gray-700 text-lg">
          <strong>Your vote is your voice!</strong> Participate in the
          democratic process and help shape the future of our nation. Every
          vote counts, so make sure you are registered and cast your vote
          responsibly. Democracy thrives when citizens actively take part —
          don’t miss your chance to make a difference!
        </p>
      </div>
    </div>
 </>
  )
}

export default About;
