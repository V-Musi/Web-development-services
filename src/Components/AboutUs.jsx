import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Vijay Bairwa",
    role: "Founder & CEO",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Aman Singh",
    role: "Lead Developer",
    img: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32 text-gray-800" id='AboutUs'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-purple-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          At <span className="font-semibold text-purple-600">DevlumeDesign</span>, we turn ideas into powerful digital experiences. Our mission is to help businesses stand out online with innovative design, seamless development, and cutting-edge SEO strategies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed">
            DevlumeDesign is a Jaipur-based creative agency focused on delivering world-class web and graphic design solutions. Our team of developers, designers, and strategists work together to craft websites and experiences that leave a lasting impact.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">What We Do</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Web & Mobile Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Brand Identity & Graphics</li>
            <li>E-commerce Development</li>
          </ul>
        </div>
      </motion.div>

      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold text-purple-600 mb-6">Meet Our Team</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 w-64"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
