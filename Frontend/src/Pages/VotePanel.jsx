import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const VotePanel = () => {
  const navigate = useNavigate(); // ✅ hook at top level
  const [parties, setParties] = useState([]);
  const [votedParty, setVotedParty] = useState(null);

  // Fetch parties
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const res = await axios.get("http://localhost:8082/api/party");
        setParties(res.data);
      } catch (error) {
        console.error("Error fetching parties:", error);
      }
    };
    fetchParties();
  }, []);

  const handleVote = async (partyId, partyName) => {
    if (votedParty) {
      alert(`You already voted for ${votedParty}!`);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8082/api/vote", { partyId });
      alert(`You voted for ${partyName}`);
      setVotedParty(partyName);

    
      setParties((prev) =>
        prev.map((p) => (p._id === partyId ? { ...p, votes: res.data.votes } : p))
      );
       setTimeout(()=>{
         navigate('/');
       },2000)
    } catch (error) {
      console.error("Error voting:", error);
      alert("Error occurred while voting!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Vote Panel</h1>

      <div className="flex flex-col gap-6 w-full max-w-lg">
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
                
              </div>
            </div>

            <button
              onClick={() => handleVote(party._id, party.partyName)}
              disabled={votedParty !== null}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                votedParty === null
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 cursor-not-allowed"
              }`}
            >
              Vote
            </button>
          </div>
        ))}
      </div>

      {votedParty && (
        <p className="mt-8 text-green-600 text-xl font-semibold">
          You voted for: {votedParty} ✅
        </p>
      )}
    </div>
  );
};

export default VotePanel;
