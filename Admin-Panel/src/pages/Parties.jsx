import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccess } from "./Utils";
import HomeButton from "./HomeButton";
import { motion } from "framer-motion";

const Parties = () => {
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

  // Delete a party
  const handleDeleted = async (partyId, partyName) => {
    if (!window.confirm(`Are you sure you want to delete "${partyName}"?`)) return;

    try {
      await axios.delete(`http://localhost:8082/api/party/${partyId}`);
      setParties((prev) => prev.filter((p) => p._id !== partyId));
      showSuccess(`${partyName} was deleted successfully`);
    } catch (error) {
      console.error("Error deleting party:", error);
      alert("Error occurred while deleting party!");
    }
  };

  // Filter parties
  const filteredParties = parties.filter(
    (party) =>
      party.partyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      party.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center px-4 py-10 relative">

        {/* Floating Home Button */}
        <div className="fixed top-6 left-6 z-50">
          <HomeButton />
        </div>

        <div className="w-full max-w-6xl flex flex-col items-center space-y-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-10 py-5 shadow-lg text-center w-[50%]"
          >
            <i className="fa-solid fa-landmark text-white text-4xl mb-2"></i>
            <h1 className="text-4xl font-bold text-white tracking-wide ml-4">
              Political Parties
            </h1>
          </motion.div>

          {/* Search Bar */}
          <div className="w-full max-w-2xl flex shadow-md rounded-xl overflow-hidden">
            <div className="w-[50px] flex justify-center items-center bg-white text-gray-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Search by party or candidate name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-none outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Party Cards / Loading */}
          <div className="w-full">
            {loading ? (
              <div className="flex flex-col items-center justify-center mt-20 text-gray-600">
                <i className="fa-solid fa-spinner fa-spin text-4xl mb-3"></i>
                <p className="text-lg">Loading parties...</p>
              </div>
            ) : (
              <motion.div
                layout
                className="grid gap-8 w-full sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredParties.length === 0 ? (
                  <div className="col-span-full text-center text-gray-600 text-lg mt-10 flex flex-col items-center">
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
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between hover:shadow-2xl border border-gray-100 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-3">
                        {party.logoUrl ? (
                          <img
                            src={party.logoUrl}
                            alt={party.partyName}
                            className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-md object-contain"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm border border-gray-200">
                            No Logo
                          </div>
                        )}
                        <h2 className="text-2xl font-bold text-blue-700 mt-1">{party.partyName}</h2>
                        <p className="text-gray-600 text-lg font-medium">{party.candidateName}</p>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDeleted(party._id, party.partyName)}
                        className="mt-6 w-[80%] py-2 rounded-full font-semibold bg-red-500 hover:bg-red-600 text-white transition-all shadow-md"
                      >
                        <i className="fa-solid fa-trash mr-2"></i> Delete
                      </motion.button>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Parties;
