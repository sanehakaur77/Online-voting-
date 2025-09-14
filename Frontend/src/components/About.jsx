import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      


      {/* About Content */}
      <div className="bg-white mt-10 p-10 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-semibold">MyWebsite</span>! We are committed to providing high-quality services and solutions for our users.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our mission is to create user-friendly web applications that are both modern and efficient. We focus on clean design, responsive layouts, and seamless user experience.
        </p>
        <p className="text-gray-700 text-lg">
          Whether you are here to explore our products or learn more about our services, we aim to provide you with the best online experience possible.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
