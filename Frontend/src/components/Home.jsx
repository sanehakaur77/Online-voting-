import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "voteIndia.jpg",
  "s.png",
  "vote2.jpg"
];

const steps = [
  { title: "Register on the Website", description: "Create an account using your email or mobile number to get started.", image: "regiter.jpg" },
  { title: "Login to Your Account", description: "Use your credentials to log in and access the voting portal.", image: "login.jpg" },
  { title: "Fill Voter Registration Form", description: "Provide your personal details required for voter registration.", image: "form.webp" },
  { title: "Add Aadhaar Card Details", description: "Enter your Aadhaar number to verify your identity.", image: "ad.png" },
  { title: "Cast Your Vote", description: "Select your preferred candidate and submit your vote.", image: "v.png" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);

  return (
    
      <>
      <div className="w-[90%] h-[60%] m-auto">
     <div className="relative">
     
      <div className="min-h-screen relative overflow-hidden">
        <div
          className="flex w-full h-screen absolute top-0 left-0 transition-transform duration-[1500ms]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Voting"
              className="w-full h-screen object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Banner />
        </div>
      </div>
  </div>
  </div>
      <div className="py-16 px-4 md:px-20 bg-[#F0F8FF]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Steps to Cast Your Vote
        </h2>
        <div className="flex flex-col space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-delay={index * 150} // Stagger effect
              className="flex flex-col md:flex-row items-center md:items-start md:justify-between p-6 bg-white rounded-lg shadow hover:shadow-lg transition rounded-br-[80px] rounded-tr-[80px]"
            >
              <div className="md:w-3/4 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {step.image && (
                <div className="md:w-1/3 flex justify-center md:justify-end ">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-45 h-45 md:w-32 md:h-32 object-cover rounded-full border-2"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </>

  )
  
  
};

export default Home;
