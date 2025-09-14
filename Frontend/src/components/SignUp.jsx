import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showSuccess, showError } from "../Pages/utils";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const navigate = useNavigate(); // ✅ hook at top level
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault(); // prevent form refresh

    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/signup",
        { username, email, password }, // send data directly
        { headers: { "Content-Type": "application/json" } }
      );
       
      if( res.data.success ) {
        // Navigate to login page after successful sign up
        setTimeout(()=>{
          navigate("/login");
        },1000) // route path, not file path

      }
      console.log("Response:", res.data);

      // ✅ Show success toast
      showSuccess(res.data.message || "Sign up successful!");
      
      // Optionally, clear form
      
    } catch (err) {
      console.error(err);

      // ✅ Show error toast
      showError(
        err.response?.data?.message || "Failed to sign up. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-gray-700 font-medium hover:underline"
          >
            Login
          </a>
        </p>

        {/* ✅ Toast container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUpPage;
