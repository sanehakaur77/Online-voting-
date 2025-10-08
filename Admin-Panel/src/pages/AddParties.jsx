import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccess, showError } from "./Utils";
import { useNavigate } from "react-router-dom";
import { FaVoteYea } from "react-icons/fa";
import HomeButton from "./HomeButton";

const AddParties = () => {
  const [partyName, setPartyName] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8082/api/party", {
        partyName,
        candidateName,
        logoUrl,
      });

      if (res.data.success) {
        showSuccess(res.data.message);
        setPartyName("");
        setCandidateName("");
        setLogoUrl("");
        setTimeout(() => navigate("/parties"), 2000);
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50 px-4 py-12 relative">
      
      {/* Floating Home Button */}
      <div className="absolute top-4 left-4">
        <HomeButton />
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border border-gray-200 hover:shadow-purple-300 transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-center mb-6 gap-3">
          <FaVoteYea className="text-purple-600 text-4xl animate-bounce" />
          <h2 className="text-3xl font-extrabold text-purple-700 text-center">
            Add New Party
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Party Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Party Name
            </label>
            <input
              type="text"
              value={partyName}
              onChange={(e) => setPartyName(e.target.value)}
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl shadow-sm transition outline-none placeholder-gray-400"
              placeholder="Enter party name"
              required
            />
          </div>

          {/* Candidate Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Candidate Name
            </label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl shadow-sm transition outline-none placeholder-gray-400"
              placeholder="Enter candidate name"
              required
            />
          </div>

          {/* Logo URL */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Logo URL
            </label>
            <input
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl shadow-sm transition outline-none placeholder-gray-400"
              placeholder="Paste logo image URL"
              required
            />
          </div>

          {/* Logo Preview */}
          {logoUrl && (
            <div className="flex justify-center mt-4">
              <div className="w-28 h-28 rounded-full border-4 border-purple-300 shadow-lg overflow-hidden transition-transform hover:scale-110">
                <img
                  src={logoUrl}
                  alt="Party Logo Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-400"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddParties;
