import React from "react";
import Navbar from "./Navbar";
import WhyChooseUs from "./Whyus";
import Footer from "./Footer";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Our Creative Portfolio",
      p: "Explore the digital magic we’ve crafted for brands across industries. Every project tells a story",
      img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Work That Speaks",
      p: "From eCommerce to branding sites, our portfolio showcases stunning and functional web solutions",
      img: "https://images.pexels.com/photos/3727455/pexels-photo-3727455.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Designs That Deliver Results",
      p: "We combine aesthetics with strategy — here’s a look at how we helped businesses grow online",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Digital Success Stories",
      p: "Browse through our client success stories — each project reflects innovation",
      img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Recent Projects",
      p: "Take a look at some of our most recent website designs crafted with attention to every detail",
      img: "https://images.pexels.com/photos/122611/pexels-photo-122611.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Our Web Design Showcase",
      p: "Each project is a blend of creativity and conversion-focused strategy",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[320px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          }}
        ></div>
        <div className="absolute inset-0 bg-blue bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">Project</h1>
          <p className="mt-2 text-yellow-400 text-lg">
            Discover our expertly crafted designs and development solutions that help businesses grow online.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <section className="px-10 py-16 bg-white">
      <div className="flex flex-col items-center text-center mb-10 px-4">
  <h2 className="text-4xl font-bold mb-4 text-gray-900">
    Explore Our Diverse <br />
    Marketing Projects
  </h2>
  <p className="text-gray-600 max-w-2xl">
    From branding and web design to full-scale digital marketing campaigns, our work reflects innovation,
    creativity, and results. Dive into a collection of successful projects that have helped our clients
    shine online.
  </p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {projects.map((item) => (
    <div
      key={item.id}
      className="relative group overflow-hidden rounded-md shadow-md"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white transition-all duration-700 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm">{item.p}</p>
      </div>
    </div>
  ))}
</div>

      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Portfolio;
