import React from 'react';
import Navbar from '../Components/Navbar';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

export default function HeroPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen px-6 sm:px-12 md:px-16 bg-white ">
        <Navbar />

        <div className="max-w-[1200px] mx-auto pt-28 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight select-none">
              Build your Component Library with Ease
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500">
              Create performant and beautiful UI components with a consistent, modern design system.
            </p>
            <div className="mt-10">
              <Link
                to="#get-started"
                className="inline-block rounded-lg bg-black px-10 py-4 text-white text-lg font-semibold tracking-wide shadow-md hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-black/50"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Section - Glowing Gradient Container */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-8 ring-4 ring-purple-300 shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-white shadow-inner">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">CODIXY</span>
                    </div>
                    <p className="text-gray-600 font-medium">Premium Services</p>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Gradient Circles */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full animate-bounce bg-gradient-to-br from-sky-300 to-purple-400 shadow-lg bg-electric-blue"></div>
              <div className="absolute bottom-8 left-4 w-12 h-12 rounded-full animate-pulse bg-gradient-to-tr from-indigo-300 to-pink-400 shadow-md bg-electric-blue"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 rounded-full bg-gradient-to-tl from-fuchsia-300 to-violet-400 shadow-sm bg-navy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
