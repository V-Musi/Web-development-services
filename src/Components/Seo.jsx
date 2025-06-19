import React from 'react';
import Image from '../assets/Seo.jpg'; // Replace with an appropriate SEO-related image
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhyUs from './Whyus';
import {
  RiSearchEyeFill,
  RiBarChartFill,
  RiSeoFill,
  RiLinksFill,
  RiGoogleFill,
  RiUserSmileFill,
  RiTimerFlashFill,
  RiBubbleChartFill,
  RiListCheck2,
  RiToolsFill,
  RiDatabase2Fill,
  RiPagesLine,
} from '@remixicon/react';

const services = [
  {
    title: "Keyword Research",
    description:
      "We identify high-converting keywords tailored to your niche and target audience to ensure SEO success.",
    icon: <RiSearchEyeFill className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "On-Page SEO",
    description:
      "We optimize content, tags, structure, and HTML elements to boost relevance and search engine visibility.",
    icon: <RiPagesLine className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Off-Page SEO",
    description:
      "We build quality backlinks and increase domain authority to drive external traffic and improve rankings.",
    icon: <RiLinksFill className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Technical SEO",
    description:
      "We ensure your website is fast, mobile-friendly, and properly indexed to enhance search performance.",
    icon: <RiToolsFill className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Local SEO",
    description:
      "Dominate local searches with Google My Business optimization and citations for your city or region.",
    icon: <RiGoogleFill className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "SEO Audits",
    description:
      "Comprehensive analysis of your site's SEO performance to uncover issues and improvement areas.",
    icon: <RiSeoFill className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "Content Optimization",
    description:
      "We refine your content for better readability, keyword targeting, and SEO performance.",
    icon: <RiListCheck2 className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Stay informed with regular performance reports and insights into user behavior and traffic trends.",
    icon: <RiBarChartFill className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "E-Commerce SEO",
    description:
      "Boost your product visibility and sales by optimizing your online store’s structure and content.",
    icon: <RiDatabase2Fill className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "SEO Strategy Consulting",
    description:
      "We craft tailored SEO strategies based on your goals, competitors, and current standing.",
    icon: <RiBubbleChartFill className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: "Performance Speed Optimization",
    description:
      "Enhance site speed to improve user experience and reduce bounce rates, positively impacting SEO.",
    icon: <RiTimerFlashFill className="w-6 h-6 text-fuchsia-500" />,
  },
  {
    title: "100% Client Satisfaction",
    description:
      "We ensure transparent communication and successful outcomes to guarantee your satisfaction.",
    icon: <RiUserSmileFill className="w-6 h-6 text-lime-600" />,
  },
];

const SEOPage = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-200 to-blue-300">
      <Navbar />

      {/* Page Header */}
      <div className="pt-28 pb-12 px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h5 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              SEO Optimization Services in Jaipur, India
            </h5>
            <p className="text-gray-600 font-semibold">
              Our SEO services are designed to increase your visibility, drive qualified traffic, and improve your search engine rankings with proven strategies tailored for your business.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Image}
              alt="SEO Optimization Illustration"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-purple-200 to-blue-300 py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our SEO Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:text-blue-600"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4">{service.icon}</div>
            </div>
          ))}
        </div>
      </section>

      <WhyUs />
      <Footer />
    </div>
  );
};

export default SEOPage;
