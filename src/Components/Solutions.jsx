import React from 'react';

const industries = [
  { title: 'Real Estate', icon: 'https://www.dakshinfo.com/images/industicon1.png' },
  { title: 'Tour & Travels', icon: 'https://www.dakshinfo.com/images/industicon2.png' },
  { title: 'Education', icon: 'https://www.dakshinfo.com/images/industicon3.png' },
  { title: 'Transport', icon: 'https://www.dakshinfo.com/images/industicon4.png' },
  { title: 'Events', icon: 'https://www.dakshinfo.com/images/industicon5.png' },
  { title: 'e-Commerce', icon: 'https://www.dakshinfo.com/images/industicon6.png' },
  { title: 'Healthcare', icon: 'https://www.dakshinfo.com/images/industicon8.png' },
  { title: 'Finance', icon: 'https://www.dakshinfo.com/images/industicon9.png' },
  { title: 'Restaurant', icon: 'https://www.dakshinfo.com/images/industicon10.png' },
  { title: 'On-Demand', icon: 'https://www.dakshinfo.com/images/industicon11.png' },
  { title: 'Grocery', icon: 'https://www.dakshinfo.com/images/industicon12.png' },
  { title: 'Jewellery', icon: 'https://www.dakshinfo.com/images/industicon13.png' },
  { title: 'Automobile', icon: 'https://www.dakshinfo.com/images/industicon14.png' },
  { title: 'Fitness Center', icon: 'https://www.dakshinfo.com/images/industicon15.png' },
  { title: 'Entertainment', icon: 'https://www.dakshinfo.com/images/industicon16.png' },
];

const Solutions = () => {
  return (
    <section className="w-full px-6 md:px-20 lg:px-32 py-16 bg-gradient-to-r from-purple-200 to-blue-300 shadow-lg">
      <h3 className="text-4xl text-center font-bold mb-4 text-gray-900">Industry-wise Solutions</h3>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-12">
        Whether you need an app for finance, healthcare, food delivery, or gaming, we deliver smart solutions tailored to your industry.
      </p>

      {/* Industries Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={industry.icon}
              alt={industry.title}
              className="w-16 h-16 mb-3 object-contain transition-transform duration-300 transform hover:scale-110"
            />
            <h5 className="text-lg font-medium text-gray-800">{industry.title}</h5>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-10 p-8 bg-black rounded-lg text-center shadow-lg">
        <h3 className="text-white font-semibold text-2xl mb-2">Let's Build Your Project</h3>
        <p className="text-white text-sm mb-6">
          Share your idea and we’ll turn it into an amazing digital product.
        </p>
        <button
          className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-blue-200 transition duration-300 transform hover:scale-105"
        >
          Talk to Experts
        </button>
      </div>
    </section>
  );
};

export default Solutions;
