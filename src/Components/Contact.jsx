import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="w-full px-6 py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h3 className="text-5xl font-bold mb-4">Let's Get Connected</h3>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Services that we deliver make us one of the top app development companies.
          Why wait? Let’s connect and bring your ideas to life! Fill out the form below and let’s get started.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto bg-white px-8 py-10 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Contact Us</h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Interested Services */}
          <div>
            <label className="block mb-2 font-medium text-gray-800">Interested Services</label>
            <div className="flex flex-wrap gap-4">
              {['Web Development', 'Mobile App', 'UI/UX Design', 'SEO Services'].map((service, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-600" />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
