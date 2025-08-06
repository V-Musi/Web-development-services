import React, { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    "High-Performance Web & App Development",
    "Expert UI/UX & Brand Design",
    "Affordable & Transparent Pricing",
    "24/7 Support & Maintenance",
  ];

  return (
    <section className="relative w-full overflow-hidden py-10 px-6 sm:px-12 md:px-20 text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/services-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 text-black">
        {/* Left Text */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Why Codixy Media..?
          </h2>
          <p className="text-lg mb-4 text-black">
            We deliver modern digital solutions tailored to your business. From concept to launch, our team ensures a seamless, innovative experience that drives results.
          </p>
          <ul className="space-y-3 text-base">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={index * 150}>
                <i className="ri-checkbox-circle-line text-green-400 mr-2 text-lg" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Video */}
        <div className="md:w-1/2 flex items-center justify-center relative" data-aos="fade-left">
          <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden">
            {/* Blurred glowing shadow */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-3xl z-0"></div>

            {/* Main Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="relative z-10 w-full h-[420px] object-cover rounded-2xl shadow-2xl"
            >
              <source src="/Animatedright.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
