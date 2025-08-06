import React from "react";
import PreloaderVideo from "../assets/preloader.mp4";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300">
      <video
        src={PreloaderVideo}
        className="w-36 h-36"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Preloader;
