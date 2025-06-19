import React from "react";
import PreloaderImg from '../assets/preloader.gif'
const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300">
      <img
        src={PreloaderImg}
        alt="Loading..."
        className="w-36 h-36"
      />
    </div>
  );
};

export default Preloader;
