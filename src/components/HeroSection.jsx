import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('../assets/HeroLayer.png')", // adjust path if needed
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div className="z-10 relative">
          <img src="../assets/Logo.png" alt="Logo" className="mb-6 w-40" />

          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            HOW MUCH <br /> COULD YOU SAVE?
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </p>

          <div className="mt-6 p-6 bg-white rounded-xl shadow-md max-w-xl">
            <p className="text-lg font-medium text-center text-gray-800 mb-4">
              Is your turnover expected to be more than £85k?
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">
                Yes
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">
                No
              </button>
            </div>
            <p className="mt-4 text-xs text-center text-gray-400">
              Takes less than 30 seconds
            </p>
          </div>
        </div>

        {/* Right Side is Empty — Illustration is background */}
        <div className="hidden md:block" />
      </div>
    </div>
  );
};

export default HeroSection;
