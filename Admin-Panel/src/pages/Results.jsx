import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Parties = () => {
  const navigate = useNavigate();
  const [parties, setParties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const res = await axios.get("http://localhost:8082/api/party");
        setParties(res.data);
      } catch (error) {
        console.error("Error fetching parties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchParties();
  }, []);

  const filteredParties = parties.filter(
    (party) =>
      party.partyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      party.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center relative px-4 py-10">
        {/* Floating Home Button */}
        <button
          onClick={() => navigate("/")}
          className="fixed top-6 left-6 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition transform z-50"
        >
          <FaHome /> Home
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full max-w-lg text-center py-6 rounded-3xl shadow-lg"
        >
          <h1 className="text-4xl font-bold text-white">Political Parties</h1>
        </motion.div>

        {/* Search Bar */}
        <div className="w-full max-w-lg mt-6 flex items-center bg-white rounded-xl shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search by party or candidate name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Party Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center mt-20 text-gray-600">
              <i className="fa-solid fa-spinner fa-spin text-4xl mb-3"></i>
              <p className="text-lg">Loading parties...</p>
            </div>
          ) : filteredParties.length === 0 ? (
            <div className="col-span-full text-center text-gray-600 mt-10 flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                alt="No data"
                className="w-32 h-32 mb-4 opacity-70"
              />
              <p>No parties found. Try searching for something else.</p>
            </div>
          ) : (
            filteredParties.map((party) => (
              <motion.div
                key={party._id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center transition-all hover:shadow-2xl"
              >
                {party.logoUrl ? (
                  <img
                    src={party.logoUrl}
                    alt={party.partyName}
                    className="w-24 h-24 rounded-full border-4 border-indigo-200 shadow-md object-contain"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm border border-gray-200">
                    No Logo
                  </div>
                )}
                <h2 className="text-2xl font-bold text-indigo-700 mt-4">{party.partyName}</h2>
                <p className="text-gray-600 text-lg font-medium">{party.candidateName}</p>
                <button className="mt-3 bg-green-300 py-1 px-4 rounded-full shadow-md hover:bg-green-400 transition">
                  Votes: {party.votes}
                </button>
              </motion.div>
            ))
          )}
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Parties;
