import React from 'react';
import 'remixicon/fonts/remixicon.css';
import Navbar from '../Components/Navbar';

const features = [
  {
    title: "Responsive Layout",
    description: "Ensures your website adapts flawlessly across devices, providing a seamless user experience.",
    icon: "ri-layout-grid-line",
  },
  {
    title: "Modern Technologies",
    description: "Built with React, TailwindCSS, and other cutting-edge tools for a performant experience.",
    icon: "ri-flashlight-line",
  },
  {
    title: "SEO Optimized",
    description: "Optimized for search engines out of the box to improve discoverability and organic reach.",
    icon: "ri-search-line",
  },
  {
    title: "Customizable Components",
    description: "Easily tweak components to match your brand and requirements with best practices.",
    icon: "ri-brush-line",
  },
  {
    title: "Accessibility",
    description: "Designed to meet WCAG standards ensuring usability for all, including assistive tech users.",
    icon: "ri-accessibility-line",
  },
  {
    title: "Performance Focused",
    description: "Fast-loading and optimized for smooth user interactions and Core Web Vitals.",
    icon: "ri-speed-line",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Sticky Navbar */}
      <header className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 z-40 shadow-md">
        <Navbar />
      </header>

      {/* Hero Section */}
      <main className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 py-20 px-6 sm:px-12 md:px-16 text-center">
        <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Build Stunning, Performant Websites with Confidence
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-700">
          We use modern technologies, beautiful design, and best practices to help your business thrive online.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-white text-base md:text-lg font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
        >
          Get Started
        </a>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ title, description, icon }, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-gradient-to-br from-white via-gray-50 to-purple-50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              role="region"
              aria-label={title}
              tabIndex={0}
            >
              <i className={`${icon} text-indigo-600 text-5xl mb-4`} aria-hidden="true" />
              <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-indigo-50 to-pink-100 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">About Our Development Process</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We focus on crafting responsive, accessible, and performance-optimized websites tailored to your business. Our team uses modern tools and frameworks to ensure scalability, speed, and long-term maintainability.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-purple-100 to-blue-100 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            Ready to start your project?
          </h2>
          <a
            href="mailto:contact@example.com"
            className="mt-4 inline-block rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 md:px-12 md:py-4 text-white text-base md:text-lg font-semibold shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
