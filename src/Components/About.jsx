import React from 'react';

const About = () => {
  return (
    <section
      id="Services"
      className="w-full min-h-screen px-6 md:px-20 lg:px-32 py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/50 z-0" />

      <div className="relative z-10">
        <h3 className="text-4xl text-center font-bold mb-4 text-gray-900">About the Company</h3>
        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-12">
          Amongst the best software companies, our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl text-center lg:text-left font-semibold mb-4 text-gray-800">
              Building Beautiful, Functional, Future-Ready Websites.
            </h3>
            <p className="text-gray-700 text-justify">
              Codixy is a cutting-edge web development and design agency dedicated to transforming digital visions into reality. We specialize in custom web development, UX/UI design, eCommerce solutions, and modern web design—helping businesses of all sizes build powerful, user-focused online experiences.
              <br /><br />
              At Codixy, we combine technical expertise with creative strategy to deliver responsive, high-performance websites that not only look stunning but also function flawlessly.
              <br /><br />
              Let Codixy illuminate your digital presence with smart design and seamless functionality.
            </p>
          </div>

          {/* Video Content */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md rounded-b-full shadow-lg"
            >
              <source src="/right.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
