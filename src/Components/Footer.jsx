import React from 'react';
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaEnvelope,FaPhoneAlt,FaMapMarkerAlt, FaGoogle,} from 'react-icons/fa';
import logo from '../assets/red.png'
import { FaWebAwesome } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Codixy.com Logo"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Codixy.com</h3>
                <p className="text-gray-400 text-sm">Creative Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We create stunning digital experiences that help businesses grow and connect with their audiences through innovative design and development.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="/" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com/codixy_media" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="/" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition">Home</a></li>
              <li><a href="pricing" className="text-gray-300 hover:text-green-500 transition">Pricing</a></li>
              <li><a href="portfolio" className="text-gray-300 hover:text-green-500 transition">Proje</a></li>
              <li><a href="contact" className="text-gray-300 hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaEnvelope className="text-green-500 mr-3" />
                <span className="text-gray-300">Codixymedia@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaGoogle className="text-green-500 mr-3" />
                <span className="text-gray-300">Codixymedia.com</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-500 mr-3" />
                <span className="text-gray-300">+91 7878343503</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-500 mr-3" />
                <span className="text-gray-300">Jaipur, india</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Codixy.com. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/" className="text-gray-400 hover:text-green-500 text-sm transition">Privacy Policy</a>
              <a href="/" className="text-gray-400 hover:text-green-500 text-sm transition">Terms of Service</a>
              <a href="/" className="text-gray-400 hover:text-green-500 text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
