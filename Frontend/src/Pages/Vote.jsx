// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { showSuccess, showError } from "../Pages/utils";
// import "react-toastify/dist/ReactToastify.css";
// const Vote= () => {
//   const navigate = useNavigate(); 
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [adhaarCard, setAadhar] = useState("");
//   const [phoneNumber, setPhone] = useState("");

//   const handleSubmit = async(e) => {
//     e.preventDefault();
    
//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/user/vote",
//         { name, age, adhaarCard, phoneNumber  },
//         { headers: { "Content-Type": "application/json" } }
//       );
//     if(res.data.success){
//       showSuccess(res.data.message);
//       navigate('/votepanel');
//     }
   
//     console.log(res.data);
//     }
//     catch(error){
//     showError(error.message);
    
//     }
//   };

//   const isEligible = age >= 18;

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Vote Registration</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />

//           <input
//             type="number"
//             placeholder="Age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//             className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          
//           />

//           <input
//             type="text"
//             placeholder="Aadhar Card Number"
//             value={adhaarCard}
//             onChange={(e) => setAadhar(e.target.value)}
//             required
         
//             className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />

//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhone(e.target.value)}
//             required
            
//             className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//           />

//           <button
//             type="submit"
//             disabled={!isEligible}
//             className={`p-3 rounded-lg text-white font-medium transition ${
//               isEligible ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Submit Vote
//           </button>

//           {!isEligible && age && (
//             <p className="text-red-500 text-sm text-center">
//               You must be at least 18 years old to vote.
//             </p>
//           )}
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Vote;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showSuccess, showError } from "../Pages/utils";
import "react-toastify/dist/ReactToastify.css";

const Vote = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [adhaarCard, setAadhaar] = useState("");   // ✅ spelling consistent
  const [phoneNumber, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/voter",
        { name, age, adhaarCard, phoneNumber },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        showSuccess(res.data.message);
       setTimeout(()=>{
          navigate("/votepanel");
       },2000);
      }

      console.log("Vote API Response:", res.data);
    } catch (error) {
      // 🔴 This will log the complete error object to console
      console.error("Vote API Error:", error);

      // 🔧 Show useful message in toast
      if (error.response) {
        // Backend returned an error response
        console.error("Error Response Data:", error.response.data);
        console.error("Error Status Code:", error.response.status);
        console.error("Error Headers:", error.response.headers);
        showError(error.response.data.message || "Something went wrong on server");
      } else if (error.request) {
        // Request was made but no response
        console.error("No response received:", error.request);
        showError("No response from server. Please try again later.");
      } else {
        // Something else went wrong
        console.error("Request setup error:", error.message);
        showError(error.message);
      }
    }
  };

  const isEligible = age >= 18;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Vote Registration
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
           type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}   // ✅ convert string → number
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="text"
            placeholder="Aadhaar Card Number"
            value={adhaarCard}
            onChange={(e) => setAadhaar(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button
            type="submit"
            disabled={!isEligible}
            className={`p-3 rounded-lg text-white font-medium transition ${
              isEligible
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit Vote
          </button>

          {!isEligible && age && (
            <p className="text-red-500 text-sm text-center">
              You must be at least 18 years old to vote.
            </p>
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Vote;
