import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {
  FaCircle,
  FaFigma,
  FaSketch,
  FaReact,
  FaPenNib,
  FaLaptopCode,
} from "react-icons/fa6";
import Navbar from "./Navbar";
import WhyChooseUs from "./Whyus";

const floatingIcons = [
  { icon: <FaFigma />, top: "20%", left: "5%" },
  { icon: <FaReact />, top: "20%", right: "10%" },
  { icon: <FaSketch />, bottom: "15%", left: "10%" },
  { icon: <FaPenNib />, bottom: "20%", right: "5%" },
  { icon: <FaLaptopCode />, top: "50%", left: "50%" },
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="animated-gradient h-screen flex items-center relative">
        <div className="absolute inset-0 bg-white z-0" />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-black text-4xl z-0"
            style={{ ...item }}
            variants={floatAnimation}
            animate="animate"
          >
            {item.icon}
          </motion.div>
        ))}

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            <span className="block text-black">Transform Your</span>
            <span className="text-pink-600">Digital Experience</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-xl max-w-3xl mx-auto mb-10"
          >
            We craft intuitive, beautiful interfaces that users love.
            Our human-centered approach ensures your product isn't just
            functional — it's delightful.
          </motion.p>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a
          href="#services"
          className="animate-bounce w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <i className="fas fa-chevron-down text-white"></i>
        </a>
      </div>

      {/* UX/UI Section */}
      <motion.div
        className="relative w-[90%] mx-auto my-16 p-10 rounded-2xl shadow-2xl text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        

        {/* Content */}
        <div className="relative z-10 bg-gradient-to-br from-black via-black to-black rounded-2xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 px-4">
            <div className="flex items-center gap-3">
              <FaCircle className="text-indigo-600 text-xl" />
              <h3 className="text-xl font-bold text-indigo-600">UX/UI</h3>
            </div>
            <h1 className="text-2xl md:text-4xl font-medium text-center md:text-right">
              Design That Puts <span className="text-indigo-500">Users First</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full">
              <video
                ref={videoRef}
                src="/v1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 text-2xl leading-relaxed">
              <p>
                Great design isn’t just about aesthetics — it’s about how users
                interact, navigate, and connect with your product. A well-crafted
                UX/UI enhances usability, builds trust, and keeps users engaged.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Header */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-evenly mb-10 px-4 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaCircle className="text-indigo-600 text-xl" />
          <h3 className="text-xl font-bold text-indigo-600 underline underline-offset-4">
            UX/UI Services
          </h3>
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold leading-snug max-w-3xl">
          Crafted to Deliver{" "}
          <span className="text-indigo-500">
            Seamless, User-Centered UX/UI Design Experiences
          </span>
        </h1>
      </motion.div>

      {/* Services Cards with Blur Border */}
      <motion.div
        className="relative w-[90%] mx-auto my-16 p-10 rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 rounded-2xl bg-white/10 blur-lg"></div>

        <div className="relative z-10 flex flex-wrap justify-center gap-8 pt-20">
          {[
            {
              title: "Web & Mobile App Design",
              desc: "Seamless, engaging experiences tailored for all devices.",
              size: "w-[280px] h-[280px]",
            },
            {
              title: "Product Design",
              desc: "Research-driven design that aligns with business and user goals.",
              size: "w-[450px] h-[250px]",
            },
            {
              title: "Wireframing & Prototyping",
              desc: "Interactive blueprints to test and refine the user journey.",
              size: "w-[260px] h-[300px]",
            },
            {
              title: "Dashboard & SaaS UX/UI",
              desc: "Data-driven interfaces optimized for usability and insights.",
              size: "w-[450px] h-[250px]",
            },
            {
              title: "Design Systems & UI Kits",
              desc: "Scalable design frameworks for brand consistency.",
              size: "w-[270px] h-[310px]",
            },
            {
              title: "Accessibility & Usability Optimization",
              desc: "Ensuring inclusive, frictionless digital experiences.",
              size: "w-[280px] h-[280px]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.size} bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-white flex flex-col justify-center`}
            >
              <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-4 tracking-wide drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed tracking-wide">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="relative w-[90%] mx-auto my-16 text-white text-center p-10 rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 rounded-2xl bg-white/10 blur-lg"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-10">User Background in Numbers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "1000+",
                title: "Users Impacted",
                desc: "Our designs have reached over 3 million users, enhancing digital experiences across various platforms.",
              },
              {
                stat: "35%",
                title: "Increase in Conversion Rates",
                desc: "Optimized UX/UI that turns visitors into loyal customers.",
              },
              {
                stat: "4.5/5",
                title: "Client Satisfaction Rating",
                desc: "Our clients consistently rate us highly for delivering impactful UX/UI solutions.",
              },
              {
                stat: "10+",
                title: "Industries Served",
                desc: "From fintech to SaaS, our expertise spans multiple sectors.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h1 className="text-4xl font-bold text-indigo-500 mb-2">{item.stat}</h1>
                <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      <Footer />
    </section>
  );
};

export default Hero;
