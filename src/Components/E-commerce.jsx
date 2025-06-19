import React from 'react';
import Image from '../assets/Ecommers.jpg'; // Replace with a relevant ecommerce image
import Navbar from './Navbar';
import WhyUs from './Whyus';
import {
  RiShoppingCart2Fill,
  RiSecurePaymentFill,
  RiTruckFill,
  RiLayout3Fill,
  RiExchangeDollarFill,
  RiUserFollowFill,
  RiCoupon3Fill,
  RiStore3Fill,
  RiGlobalLine,
  RiPieChart2Fill,
  RiCustomerService2Fill,
} from '@remixicon/react';

const services = [
  {
    title: "Custom E-commerce Store",
    description:
      "We design and develop online stores tailored to your brand, products, and target audience—ensuring a seamless shopping experience.",
    icon: <RiStore3Fill className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Shopping Cart Integration",
    description:
      "Add-to-cart functionality, wishlist features, and checkout optimization—everything your store needs to boost sales.",
    icon: <RiShoppingCart2Fill className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Secure Payment Gateway",
    description:
      "Integrated payment gateways with encryption and fraud protection to ensure safe transactions for your customers.",
    icon: <RiSecurePaymentFill className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Mobile-Responsive Design",
    description:
      "Your store will look perfect and work flawlessly on any device—from phones to desktops.",
    icon: <RiLayout3Fill className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Product Management System",
    description:
      "Easily manage inventory, categories, pricing, and product variants through a user-friendly backend interface.",
    icon: <RiPieChart2Fill className="w-6 h-6 text-rose-500" />,
  },
  {
    title: "Order & Shipping Modules",
    description:
      "Automate order tracking and shipping updates with real-time logistics integrations.",
    icon: <RiTruckFill className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Customer Account & Login",
    description:
      "Create secure, personalized user accounts with order history, preferences, and saved items.",
    icon: <RiUserFollowFill className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Coupon & Discount Features",
    description:
      "Drive engagement and conversions with custom coupons, limited-time offers, and loyalty programs.",
    icon: <RiCoupon3Fill className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Multi-vendor Marketplace",
    description:
      "Launch your own Amazon-style marketplace with multiple sellers, commission structures, and vendor dashboards.",
    icon: <RiGlobalLine className="w-6 h-6 text-violet-500" />,
  },
  {
    title: "Returns & Refund System",
    description:
      "Build trust with streamlined return policies, refund workflows, and customer-friendly UX.",
    icon: <RiExchangeDollarFill className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "24/7 Support Tools",
    description:
      "Live chat, chatbot integration, and automated support options to assist customers anytime.",
    icon: <RiCustomerService2Fill className="w-6 h-6 text-indigo-500" />,
  },
];

const EcommerceSolutions = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-200 to-blue-300">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-28 pb-12 px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              E-commerce Solutions in Jaipur, India
            </h1>
            <p className="text-gray-600 font-semibold">
              Empower your online business with scalable, secure, and user-friendly E-commerce solutions—customized to meet your goals and customers’ expectations.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Image}
              alt="Ecommerce Development"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-purple-200 to-blue-300 py-16 px-6 md:px-20 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our E-commerce Services
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
      
    </div>
  );
};

export default EcommerceSolutions;
