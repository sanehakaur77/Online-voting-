import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoteRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    adhaarCard: "",
    phoneNumber: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step controls
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Check age eligibility
  const isEligible = Number(formData.age) >= 18;

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        age: Number(formData.age), // ensure age is a number
      };

      const res = await axios.post(
        "http://localhost:8082/api/user/voter", // make sure backend matches this route
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => navigate("/votepanel"), 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Error occurred");
      console.log(err.response?.data || err.message);
    }
  };

  return (
  
  <>
    
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 flex-col">
       <div>
           <h1 className="text-4xl mb-3 font-bold">Vote Registration Form</h1>
         </div>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8">
        {/* Progress Bar */}
        <div className="flex justify-between mb-6">
          {["User Info", "Contact Info"].map((label, index) => (
            <div key={index} className="flex-1">
              <div
                className={`w-8 h-8 mx-auto rounded-full text-white flex items-center justify-center ${
                  step > index ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs text-center mt-1">{label}</p>
            </div>
          ))}
        </div>
          
        {/* Form */}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Step 1: Name & Age */}
          {step === 1 && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {!isEligible && formData.age && (
                <p className="text-red-500 text-sm text-center">
                  You must be at least 18 years old to proceed.
                </p>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isEligible}
                  className={`bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition ${
                    !isEligible ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 2: Aadhaar & Phone Number */}
          {step === 2 && (
            <>
              <input
                type="text"
                name="adhaarCard"
                placeholder="Aadhaar Card Number"
                value={formData.adhaarCard}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-800 p-3 rounded-lg hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  </>
  );
};

export default VoteRegistration;
