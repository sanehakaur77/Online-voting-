import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Parties = () => {
  const [parties, setParties] = useState([]);

  // Fetch all parties
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/party");
        setParties(res.data);
      } catch (error) {
        console.error("Error fetching parties:", error);
      }
    };
    fetchParties();
  }, []);

  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 flex flex-col items-center">
        <div className="bg-blue-600 h-[70px] w-[400px] flex items-center justify-center rounded-4xl shadow-md">
          <h1 className="text-4xl font-bold text-center text-white">Parties</h1>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-lg mt-[20px]">
          {parties.map((party) => (
            <div
              key={party._id}
              className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4">
                {party.logoUrl && (
                  <img
                    src={party.logoUrl}
                    alt={party.partyName}
                    className="w-20 h-20 rounded-full border-2 border-blue-300 object-contain"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-semibold text-blue-700">{party.partyName}</h2>
                  <p className="text-gray-600 text-lg">{party.candidateName}</p>
                   <button className="bg-green-300 h-7 w-20 rounded-2xl shadow-md mt-3"><p className="text-gray-600 text-lg">votes:{party.votes}</p></button>
                </div> 
              </div>

          
              
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Parties;