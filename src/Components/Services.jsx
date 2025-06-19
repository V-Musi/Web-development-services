import React from 'react';
import 'remixicon/fonts/remixicon.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and scalable websites tailored to your needs.',
    icon: 'ri-code-s-slash-line',
  },
  {
    title: 'UX/UI Design',
    description: 'Crafting intuitive and beautiful user interfaces and experiences.',
    icon: 'ri-pencil-ruler-2-line',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Providing secure, scalable, and user-friendly online stores.',
    icon: 'ri-shopping-cart-line',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your rankings to grow traffic and conversions.',
    icon: 'ri-search-line',
  },
];

// Animated icons for background with their styles and animation delays
const animatedIcons = [
  { icon: 'ri-code-s-slash-line', style: { top: '15%', left: '10%', fontSize: '3rem', animationDelay: '0s' } },
  { icon: 'ri-pencil-ruler-2-line', style: { top: '25%', right: '15%', fontSize: '3.5rem', animationDelay: '1.8s' } },
  { icon: 'ri-shopping-cart-line', style: { top: '60%', left: '20%', fontSize: '3rem', animationDelay: '1.2s' } },
  { icon: 'ri-search-line', style: { top: '70%', right: '25%', fontSize: '3.2rem', animationDelay: '2.4s' } },
  { icon: 'ri-terminal-box-line', style: { top: '40%', left: '50%', fontSize: '3rem', animationDelay: '1.0s' } },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        /* Background icon float animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) translateX(7px);
            opacity: 0.4;
          }
        }
        .icon-float {
          position: absolute;
          color: #d1d5db; /* Tailwind gray-300 */
          opacity: 0.2;
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <main className="relative bg-white min-h-screen overflow-hidden pt-16 pb-20 px-6 sm:px-12 md:px-16">
        {/* Background Animated Icons */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 select-none">
          {animatedIcons.map(({ icon, style }, idx) => (
            <i
              key={idx}
              className={`${icon} icon-float`}
              style={{
                ...style,
                animationDuration: '6s',
                animationDelay: style.animationDelay,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-10 leading-tight select-none">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-500">
            We build elegant, robust, and scalable solutions to address your business challenges. Discover our expert services designed to elevate your digital presence.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map(({ title, description, icon }) => (
              <article
                key={title}
                className="bg-white rounded-3xl shadow-md p-8 text-left transition-shadow duration-300 hover:shadow-xl cursor-default"
                tabIndex={0}
                aria-label={`${title} service`}
                role="region"
              >
                <i className={`${icon} text-indigo-600 text-5xl mb-6`} aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600 text-base">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
