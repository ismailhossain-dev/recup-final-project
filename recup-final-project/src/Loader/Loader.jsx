import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Outer Ring */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Optional: Inner Pulse Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <h2 className="mt-4 text-lg font-semibold text-gray-700 tracking-widest animate-pulse">
        LOADING...
      </h2>
    </div>
  );
};

export default Loader;
