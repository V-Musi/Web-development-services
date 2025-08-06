// src/Components/LearnMore/LearnMore.jsx
import React from "react";

const FlyButton = ({ text = "Learn More" }) => {
  return (
    <button className="group relative inline-flex items-center justify-center h-12 px-6 overflow-hidden rounded-full border-0 bg-transparent font-inherit outline-none">
      {/* Circle background that expands on hover */}
      <span className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
        {/* Arrow icon */}
        <span className="absolute left-3.5 h-0.5 w-4 bg-black transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] before:absolute before:right-0 before:top-[-0.25rem] before:h-2 before:w-2 before:rotate-45 before:border-t-2 before:border-r-2 before:border-black before:content-[''] group-hover:translate-x-2" />
      </span>
      
      {/* Button text - with proper spacing */}
      <span className="relative z-10 ml-8 font-bold uppercase text-yellow-600 transition-all duration-300 group-hover:text-white group-hover:ml-4">
        {text}
      </span>
    </button>
  );
};

export default FlyButton;