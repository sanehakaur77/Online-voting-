import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showSuccess, showError } from "../Pages/utils";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const resData = res.data;
      console.log("Response:", resData);

      if (resData.success) {
        showSuccess(resData.message || "Logged in successfully!");
        localStorage.setItem("token", res.data.token);
       setTimeout(()=>{
         navigate("/vote");
       },2000) 
      } else {
        showError(resData.message || "Login failed!");
      }
    } catch (err) {
      console.error(err);
      showError(
        err.response?.data?.message ||
          "Failed to log in. Please check your credentials."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-gray-700 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>

        {/* Toast container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
