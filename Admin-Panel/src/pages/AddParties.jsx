import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccess, showError } from "./Utils";
import { useNavigate } from "react-router-dom";
import HomeButton from "./Homebutton";
import { Link } from "react-router-dom";
const AddParties = () => {
  const [partyName, setPartyName] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/party", {
        partyName,
        candidateName,
        logoUrl,
      });

      if (res.data.success) {

        showSuccess(res.data.message);
        setPartyName("");
        setCandidateName("");
        setLogoUrl("");
        setTimeout(()=>{
          navigate('/parties');
        },2000)
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="absolute mt-[500px] left-4">
      
      </div>
     

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Party</h2>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Party Name</label>
          <input
            type="text"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Candidate Name</label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Logo URL</label>
          <input
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
     
      <ToastContainer />
    </div>
  );
};

export default AddParties;
