import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccess, showError } from "./Utils";
import { FaRegUser } from "react-icons/fa";
import AOS from 'aos'

const AdminPanel = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:"ease-in",
       once:true
    })
  })
  const navigate = useNavigate();
  const [admin_email, setEmail] = useState("");
  const [admin_password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!/\S+@\S+\.\S+/.test(admin_email)) {
      showError("Please enter a valid email!");
      return;
    }
    if (admin_password.length < 6) {
      showError("Password must be at least 6 characters!");
      return;
    }

    setLoading(true);
    const data = { admin_email, admin_password };

    try {
      const res = await axios.post("http://localhost:8082/api/user/admin", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        showSuccess(res.data.message);
        setTimeout(() => navigate("/admintasks"), 1500);
      } else {
        showError(res.data.message || "Login failed. Try again!");
      }
    } catch (error) {
      console.error(error);
      showError(error.response?.data?.message || "Network error. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen bg-[#fff] overflow-hidden" data-aos="fade-up">
        <div className="relative w-[90%] sm:w-[400px] p-8 bg-white/10 bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-800 rounded-2xl shadow-2xl border border-white/20 text-white">
          <h2 className="text-3xl font-extrabold text-center mb-6 tracking-wide flex items-center justify-center gap-2">
            <FaRegUser /> Admin Login
          </h2>
          <p className="text-center text-sm text-white mb-8">
            Welcome back! Please enter your credentials.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-100 mb-1">
                Email
              </label>
              <input
                type="email"
                value={admin_email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-100 mb-1">
                Password
              </label>
              <input
                type="password"
                value={admin_password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-lg font-semibold text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-indigo-500 hover:scale-105 hover:shadow-lg"
              }`}
            >
              {loading ? "Authenticating..." : "Login"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6 text-gray-300">
            Need help?{" "}
            <a
              href="#"
              className="text-pink-400 hover:underline hover:text-pink-300 transition-colors"
            >
              Contact Support
            </a>
          </p>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default AdminPanel;
