// Banner.jsx
import React, { useState } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="bg-transparent  backdrop-blur-sm fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-yellow-400 text-black p-6 rounded shadow-lg text-center relative">
        {/* Cross button */}
        <button
          className="absolute top-2 right-2 text-black font-bold text-lg"
          onClick={() => setShowBanner(false)}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2">Welcome to VotingApp!</h2>
        <p>Vote for India! Your one vote can make a big difference in building a better future.</p>
      </div>
    </div>
  );
};

export default Banner;




