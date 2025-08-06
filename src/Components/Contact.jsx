import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhyChooseUs from "./Whyus";
import FlyButton from "../Components/FlyButton/FlyButton";
import "remixicon/fonts/remixicon.css";
import { FaEnvelopeOpenText, FaPhoneAlt, FaHdd } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = ["to right peoples", "at right time", "the right things"];

export default function ContactHeroPage() {
  const [result, setResult] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (result.type === "success" || result.type === "error") {
      const timer = setTimeout(() => setResult({ type: "", message: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [result.type]);

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get("name")) newErrors.name = "Name is required";
    if (!formData.get("email")) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.get("email"))) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.get("interest") || formData.get("interest") === "") {
      newErrors.interest = "Please select an interest";
    }
    if (!formData.get("message")) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (!validateForm(formData)) {
      setResult({ type: "error", message: "Please fix the errors in the form" });
      return;
    }

    setResult({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult({ type: "success", message: "Form Submitted Successfully!" });
        event.target.reset();
        setErrors({});
      } else {
        setResult({ type: "error", message: data.message || "Failed to submit form" });
      }
    } catch {
      setResult({ type: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <>
      <section className="relative min-h-screen w-full bg-white text-black">
        <Navbar />

        {/* Hero Section */}
        <div className="w-full h-auto min-h-[70vh] flex flex-col items-center justify-center px-6 sm:px-12 text-center py-16">
          <div className="flex flex-col sm:flex-row sm:space-x-2 items-center justify-center text-3xl sm:text-5xl font-bold leading-tight">
            <h1 className="mb-2 sm:mb-0">We <span>communicate</span></h1>
            <div className="h-[50px] sm:h-[60px] overflow-hidden text-blue-600 font-semibold">
              <Swiper
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop
                className="h-full w-full"
              >
                {services.map((service, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex items-center justify-center h-full">
                      {service}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 md:py-24 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10">
            {/* Left Side */}
            <div
              className="lg:w-1/2 bg-cover bg-center rounded-lg p-8"
              style={{
                backgroundImage: "url(https://cdn.easyfrontend.com/pictures/contact/contact_7.png)",
              }}
            >
              <div className="space-y-4 max-w-sm">
                <div className="flex items-center bg-white rounded-lg p-4 shadow hover:shadow-lg">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                  <p className="ml-4 text-lg font-medium">+91 78783 43503</p>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow hover:shadow-lg">
                  <FaEnvelopeOpenText className="text-blue-600 text-xl" />
                  <p className="ml-4 text-lg font-medium">codixym@gmail.com</p>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow hover:shadow-lg">
                  <FaHdd className="text-blue-600 text-xl" />
                  <p className="ml-4 text-lg font-medium">www.codixy.com</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 bg-white rounded-2xl shadow p-6 md:p-10">
              <h2 className="text-3xl font-bold mb-4">Let's Boost Your Brand</h2>
              <p className="text-gray-600 mb-6">
                Fill in your details and let's start building your next digital product.
              </p>

              {result.type && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    result.type === "success"
                      ? "bg-green-100 text-green-800"
                      : result.type === "error"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {result.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="26dfe92c-81a1-46bd-9c8f-9c28a06e0563" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="interest"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.interest ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="" disabled selected>
                      I'm interested in...
                    </option>
                    <option>UX/UI</option>
                    <option>Landing Page</option>
                    <option>SEO</option>
                    <option>Website Development</option>
                    <option>E-commerce Website</option>
                    <option>Food App for Restaurant</option>
                  </select>
                  {errors.interest && <p className="text-red-500 text-xs">{errors.interest}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                </div>

                <div className="flex justify-center">
                  <FlyButton text="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Footer />
    </>
  );
}
