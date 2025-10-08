import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showSuccess, showError } from "../Pages/utils";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
const Login = () => {
  AOS.init({
    duration:1000,
    easing:"ease-in",
    once:true
  },[])
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // For animation
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowForm(true), 100); // Trigger animation
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post(
        "http://localhost:8082/api/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const resData = res.data;
      if (resData.success) {
        showSuccess(resData.message || "Logged in successfully!");
        localStorage.setItem("token", res.data.token);
        setTimeout(() => navigate("/vote"), 2000);
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
    <div className="h-[500px] flex w-[60%] m-auto mt-[170px] mb-[100px] " >
      {/* Left Side - Text/Welcome */}
      <div className="hidden md:flex md:w-1/2 bg-gray-700 text-white items-center justify-center p-10">
        <div className="space-y-6 transform transition-all duration-500 ease-in-out">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="text-lg">
            Log in to access your voting dashboard. Your vote is your voice!
          </p>
          <p className="text-gray-200">
            After logging in, you can view your registration, update Aadhaar details, and cast your vote securely.
          </p>
        </div>
      </div>
      <div
        className={`flex w-full md:w-1/2 items-center justify-center bg-gray-100 p-10
          transform transition-all duration-500 ease-in-out
          ${showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
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
              className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-200 ease-in"
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

        </div>
      </div>
          <ToastContainer />
    </div>
  );
};

export default Login;
