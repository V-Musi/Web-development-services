import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import WhyChooseUs from "./Whyus";
import Footer from "./Footer";
import FlyButton from "./LearnMore/LearnMore";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const PricingPlans = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const plans = [
    {
      title: "Basic Plan",
      price: "₹4,999",
      desc: "Perfect for startups & small websites.",
      features: ["3 Pages Website", "Responsive Design", "Basic SEO", "Delivery in 5 Days"],
    },
    {
      title: "Pro Plan",
      price: "₹9,999",
      desc: "Ideal for growing businesses.",
      features: ["6 Pages Website", "SEO Optimization", "Custom Contact Form", "Delivery in 7 Days"],
    },
    {
      title: "Premium Plan",
      price: "₹14,999",
      desc: "Best for ecommerce & premium brands.",
      features: ["10+ Pages", "Ecommerce Features", "Payment Integration", "Delivery in 10 Days"],
    },
    {
      title: "Starter Plan",
      price: "₹2,999",
      desc: "Good for personal portfolios.",
      features: ["2 Pages", "Mobile Friendly", "Social Links Integration", "Delivery in 3 Days"],
    },
    {
      title: "Advanced Plan",
      price: "₹19,999",
      desc: "Perfect for service-based businesses.",
      features: ["15+ Pages", "Booking System", "Blog Section", "Premium SEO"],
    },
    {
      title: "Business Plus Plan",
      price: "₹24,999",
      desc: "Ideal for agencies or multi-service brands.",
      features: ["20+ Pages", "Advanced Analytics", "Chatbot Integration", "Dedicated Support"],
    },
  ];
  useEffect(() => {
  AOS.init({ once: true });
}, []);


  return (
    <div className="bg-white text-white">
      <Navbar />

      {/* ==== Pricing Header Section ==== */}
      <div className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden bg-white">
        <div className="absolute top-40 left-10 animate-bounce">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/cloud.png" alt="cloud" />
        </div>
        <div className="absolute top-20 right-16 animate-spin-slow">

          <img width="50" height="50" src="https://img.icons8.com/ios/50/react-native--v1.png" alt="react-native" />
        </div>

        <div className="text-center px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text wave-text">
              Pricing
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto wave-text-delay">
            Plans that grow with you — easy, efficient, and scalable.
          </p>

          {/* Icons below heading */}
          <div className="flex justify-center items-center gap-60 mt-16">
            <div className="animate-bounce">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/react-native--v1.png" alt="react-native" />
            </div>
            <div className="animate-spin-slow">
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/cloud.png" alt="cloud" />

\            </div>
          </div>

          <style>{`
            .wave-text {
              display: inline-block;
              animation: wave 2s ease-in-out infinite;
            }
            .wave-text-delay {
              display: inline-block;
              animation: wave 3s ease-in-out infinite;
            }
            @keyframes wave {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
            }
          `}</style>
        </div>
      </div>

      {/* ==== Web Dev Highlight Section ==== */}
      <section className="py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-black via-[#1c0b0b] to-[#280000] text-white rounded-3xl max-w-7xl mx-auto my-10 shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
            <img
              src="https://images.stockcake.com/public/3/8/6/38675db7-238b-4655-8376-b62df7af823e_large/premium-pricing-podium-stockcake.jpg"
              alt="Web Development"
              className="w-full rounded-xl drop-shadow-2xl"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
            <h3 className="text-blue-500 font-semibold text-xl flex items-center gap-2">
              <span className="text-3xl animate-pulse">●</span> Web Development
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold">
              Code That <span className="text-blue-400">Drives Success</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Effective web development is about more than just code — it's about creating intuitive, engaging user experiences. A well-designed application builds trust, improves usability, and keeps users coming back.
            </p>
          </div>
        </div>
      </section>

      {/* ==== Pricing Cards Section ==== */}
     {/* ==== Pricing Cards Section ==== */}
<div className="py-20 px-4 md:px-16 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {plans.map((plan, index) => (
      <motion.div
        key={index}
        className="bg-black border border-gray-700 rounded-xl p-8 shadow-xl hover:border-yellow-400 hover:shadow-black hover:scale-105 transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        data-aos="zoom-in"
        data-aos-delay={index * 100}
        data-aos-duration="800"
      >
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{plan.title}</h3>
        <p className="mb-6 text-sm text-gray-300">{plan.desc}</p>
        <h2 className="text-4xl font-bold mb-4 text-white">{plan.price}</h2>
        <ul className="space-y-2 mb-6 text-sm text-gray-300">
          {plan.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>
        <div className="flex justify-center">
          <FlyButton text="Learn More" />
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* ==== CTA Section ==== */}
    <section
  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-6 text-center rounded-xl my-10 mx-4 md:mx-16"
  data-aos="zoom-in"
  data-aos-delay="200"
  data-aos-duration="1000"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Ready to Boost Your Online Visibility?
  </h2>
  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
    Let’s work together to build the perfect website—our pricing plans are tailored to deliver real results for your business.
  </p>
<FlyButton className="inline-flex items-center gap-3 bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition">
  GET FREE CONSULTATION
</FlyButton>

</section>


      {/* ==== Extras ==== */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default PricingPlans;
