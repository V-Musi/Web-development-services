import React, { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and scalable websites tailored to your needs.',
    icon: 'ri-code-s-slash-line',
    gradient: 'from-black to-black',
  },
  {
    title: 'UX/UI Design',
    description: 'Crafting intuitive and beautiful user interfaces and experiences.',
    icon: 'ri-pencil-ruler-2-line',
    gradient: 'from-black to-black',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Providing secure, scalable, and user-friendly online stores.',
    icon: 'ri-shopping-cart-line',
    gradient: 'from-black to-black'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your rankings to grow traffic and conversions.',
    icon: 'ri-search-line',
    gradient: 'from-black to-black',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .service-card {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .service-card:hover {
          transform: translateZ(20px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .icon-hover-move {
          display: inline-block;
          transition: transform 0.4s ease;
        }
        
        .service-card:hover .icon-hover-move {
          transform: translateX(8px) translateZ(10px);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
      `}</style>

      <main className="relative bg-white/90 min-h-screen overflow-hidden pt-16 pb-20 px-6 sm:px-12 md:px-16">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1
            className="text-5xl sm:text-6xl font-bold text-purple-800 mb-10 leading-tight select-none"
            data-aos="fade-up"
          >
            Our <span className="text-black">Services</span>
          </h1>
          <p
            className="max-w-3xl mx-auto mb-16 text-lg text-black"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We build elegant, robust, and scalable solutions to address your business challenges. Discover our expert services designed to elevate your digital presence.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map(({ title, description, icon, gradient }, index) => (
              <article
                key={title}
                className={`service-card bg-gradient-to-br ${gradient} rounded-3xl text-white p-8 text-left shadow-md relative overflow-hidden transform transition-all duration-300 group cursor-default`}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                tabIndex={0}
                aria-label={`${title} service`}
                role="region"
              >
                <div className="mb-6">
                  <i className={`${icon} text-5xl icon-hover-move`} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold mb-3 transform transition-transform duration-300 group-hover:translateZ(10px)">{title}</h2>
                <p className="text-white/90 text-base transform transition-transform duration-300 group-hover:translateZ(5px)">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}