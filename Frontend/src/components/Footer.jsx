import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FancyFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">MyWebsite</h2>
          <p className="text-gray-400">
            We build sleek and modern web applications to provide the best user experience possible.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition-all">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-all">About</a></li>
            <li><a href="/contact" className="hover:text-white transition-all">Contact</a></li>
            <li><a href="/login" className="hover:text-white transition-all">Login</a></li>
            <li><a href="/signup" className="hover:text-white transition-all">Sign Up</a></li>
          </ul>
        </div>

        {/* Newsletter / Subscribe */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Subscribe</h3>
          <p className="text-gray-400">Get the latest updates and offers.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white text-lg placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-gray-700 to-gray-500 text-white p-4 rounded-lg font-medium hover:scale-105 transition-transform shadow-md text-lg">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        © 2025 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default FancyFooter;
