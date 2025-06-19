import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhyUs from './Whyus';
import {
  RiUserSmileFill,
  RiBrushFill,
  RiLayout3Fill,
  RiImageEditFill,
  RiPencilRuler2Fill,
  RiGalleryFill,
  RiPaletteFill,
  RiPaintBrushFill,
  RiDraftLine,
  RiFolderImageLine,
  RiFileImageFill,
} from '@remixicon/react';

const services = [
  {
    title: "Logo Design",
    description:
      "We craft unique, memorable logos that capture your brand's identity and leave a lasting impression.",
    icon: <RiBrushFill className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Business Card Design",
    description:
      "Elevate your brand image with professionally designed business cards tailored to your style and message.",
    icon: <RiLayout3Fill className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Brochure & Flyer Design",
    description:
      "Engage your audience with stunning, informative brochures and flyers that make your brand stand out.",
    icon: <RiGalleryFill className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Social Media Graphics",
    description:
      "Boost engagement with eye-catching graphics for Instagram, Facebook, LinkedIn, and other platforms.",
    icon: <RiImageEditFill className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Packaging Design",
    description:
      "We create compelling packaging that enhances shelf appeal and communicates your product’s value.",
    icon: <RiFolderImageLine className="w-8 h-8 text-rose-500" />,
  },
  {
    title: "Banner & Poster Design",
    description:
      "Get noticed with bold, creative designs for events, promotions, and advertising campaigns.",
    icon: <RiDraftLine className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Brand Identity Design",
    description:
      "Build a consistent, professional identity with custom typography, color schemes, and design systems.",
    icon: <RiPencilRuler2Fill className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Infographics Design",
    description:
      "We turn complex information into visually engaging infographics that simplify and inform.",
    icon: <RiPaintBrushFill className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Custom Illustrations",
    description:
      "From mascots to scenes, we produce detailed illustrations that bring stories and brands to life.",
    icon: <RiPaletteFill className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Presentation Design",
    description:
      "Impress clients and investors with visually stunning and organized slide decks.",
    icon: <RiFileImageFill className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Website Graphics",
    description:
      "Complement your digital experience with banners, icons, and visuals that align with your brand.",
    icon: <RiLayout3Fill className="w-8 h-8 text-violet-500" />,
  },
  {
    title: "100% Client Satisfaction",
    description:
      "Our client-first approach guarantees satisfaction, ensuring you love the final design.",
    icon: <RiUserSmileFill SmileFill className="w-8 h-8 text-green-600" />,
  },
];

const GraphicDesignPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content Top */}
      <div className="pt-28 pb-12 px-6 md:px-20 lg:px-32 text-center">
        <h5 className="text-4xl font-bold mb-4 text-gray-800">
          Graphic Design Company in Jaipur, India
        </h5>
        <p className="text-gray-600 font-semibold mb-8">
          We provide professional graphic design services that enhance your brand identity, marketing, and communication—driven by creativity and precision.
        </p>
      </div>

      {/* Services Cards */}
      <section className="py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Graphic Design Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold ml-2">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to Elevate Your Brand?</h3>
          <p className="text-gray-600 mb-6">
            Let us help you create stunning designs that resonate with your audience.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GraphicDesignPage;
