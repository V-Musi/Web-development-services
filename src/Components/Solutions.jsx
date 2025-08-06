import React from 'react';
import {
  FaUniversity, FaPlane, FaBook, FaBus, FaCalendarAlt,
  FaShoppingCart, FaHeartbeat, FaMoneyBill, FaUtensils,
  FaConciergeBell, FaAppleAlt, FaGem, FaCar, FaDumbbell, FaGamepad
} from 'react-icons/fa';

const industries = [
  { title: 'Real Estate', icon: <FaUniversity size={40} /> },
  { title: 'Tour & Travels', icon: <FaPlane size={40} /> },
  { title: 'Education', icon: <FaBook size={40} /> },
  { title: 'Transport', icon: <FaBus size={40} /> },
  { title: 'Events', icon: <FaCalendarAlt size={40} /> },
  { title: 'e-Commerce', icon: <FaShoppingCart size={40} /> },
  { title: 'Healthcare', icon: <FaHeartbeat size={40} /> },
  { title: 'Finance', icon: <FaMoneyBill size={40} /> },
  { title: 'Restaurant', icon: <FaUtensils size={40} /> },
  { title: 'On-Demand', icon: <FaConciergeBell size={40} /> },
  { title: 'Grocery', icon: <FaAppleAlt size={40} /> },
  { title: 'Jewellery', icon: <FaGem size={40} /> },
  { title: 'Automobile', icon: <FaCar size={40} /> },
  { title: 'Fitness Center', icon: <FaDumbbell size={40} /> },
  { title: 'Entertainment', icon: <FaGamepad size={40} /> },
];

const Solutions = () => {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* 🔴 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/services-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 lg:px-32 py-16">
        <h3 className="text-4xl text-center font-bold mb-4">Services Factors</h3>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">
          Whether you need an app for finance, healthcare, food delivery, or gaming, we deliver smart solutions tailored to your industry.
        </p>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className=" flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 group"
            >
              <div className="mb-3 text-white transition-transform duration-700 group-hover:animate-spin-slow hover:text-indigo-400">
                {industry.icon}
              </div>
              <h5 className="text-lg font-medium text-white hover:text-indigo-400">{industry.title}</h5>
            </div>
          ))}
        </div>

          
      </div>
    </section>
  );
};

export default Solutions;
