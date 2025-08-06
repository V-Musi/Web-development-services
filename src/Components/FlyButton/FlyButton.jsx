import React from "react";

export default function FlyButton({ text = "Send" }) {
  return (
    <button className="relative flex items-center bg-blue-600 text-white text-lg font-medium px-4 py-2 rounded-2xl overflow-hidden transition-transform duration-200 active:scale-95 group">
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="transition-transform duration-300 group-hover:translate-x-5 group-hover:rotate-45 group-hover:scale-110"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-24">
        {text}
      </span>

      {/* Custom Animation Styles */}
      <style>
        {`
          .svg-wrapper-1 {
            display: flex;
            align-items: center;
          }
          .svg-wrapper {
            display: inline-block;
            transition: transform 0.3s ease-in-out;
          }
          .group:hover .svg-wrapper {
            animation: fly-1 0.6s ease-in-out infinite alternate;
          }
          @keyframes fly-1 {
            from { transform: translateY(0.1em); }
            to { transform: translateY(-0.1em); }
          }
        `}
      </style>
    </button>
  );
}
