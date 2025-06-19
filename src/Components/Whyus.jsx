import React from "react";
import {
  FaUsers,
  FaSearch,
  FaClock,
  FaAward,
  FaLaptopCode,
  FaSmile,
  FaCogs,
  FaWallet,
  FaProjectDiagram,
} from "react-icons/fa";

const reasons = [
  {
    title: "Expert Creative Team",
    description:
      "Our team of skilled designers, developers, and project managers work with precision and creativity to deliver standout websites tailored to your brand.",
    icon: <FaUsers className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "SEO-Optimized Designs",
    description:
      "We build websites that not only look great but are optimized for search engines—ensuring your business ranks and gets noticed online.",
    icon: <FaSearch className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Timely Project Delivery",
    description:
      "Deadlines matter. Our team ensures every project is delivered on schedule without compromising quality or exceeding budget.",
    icon: <FaClock className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Over a Decade of Experience",
    description:
      "With 11+ years of industry knowledge, DevlumeDesign offers proven expertise in building trusted and result-driven digital experiences.",
    icon: <FaAward className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We use the latest web technologies and tools to create high-performing, modern websites that are secure, scalable, and future-ready.",
    icon: <FaLaptopCode className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Customer-First Approach",
    description:
      "We prioritize your satisfaction by deeply understanding your goals and delivering solutions that exceed expectations.",
    icon: <FaSmile className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Customized Digital Solutions",
    description:
      "No cookie-cutter templates here—just personalized design and functionality tailored specifically to your business needs.",
    icon: <FaCogs className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Affordable & Flexible Pricing",
    description:
      "Startups and small businesses love us for our budget-friendly packages that provide premium value without breaking the bank.",
    icon: <FaWallet className="text-3xl text-blue-500 mb-4" />,
  },
  {
    title: "Strategic & Organized Planning",
    description:
      "We follow a structured and strategic design process from start to finish—ensuring smooth communication and predictable outcomes.",
    icon: <FaProjectDiagram className="text-3xl text-blue-500 mb-4" />,
  },
];

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-r from-purple-200 to-blue-300 py-16 px-6 md:px-20 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose DevlumeDesign?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:text-blue-600"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
