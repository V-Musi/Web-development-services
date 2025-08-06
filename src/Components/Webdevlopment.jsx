import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {
  FaCircle,
  FaCode,
  FaDatabase,
  FaServer,
  FaMobile,
  FaCloud,
} from "react-icons/fa6";
import Navbar from "./Navbar";
import WhyChooseUs from "./Whyus";
import AOS from "aos";
import "aos/dist/aos.css";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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

const cardHoverEffect = {
  hover: {
    y: -10,
    z: 20,
    scale: 1.05,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const floatingIcons = [
  { icon: <FaCode />, top: "10%", left: "5%" },
  { icon: <FaCloud />, top: "20%", right: "10%" },
  { icon: <FaDatabase />, bottom: "15%", left: "10%" },
  { icon: <FaServer />, bottom: "20%", right: "5%" },
  { icon: <FaMobile />, top: "50%", left: "50%" },
];

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="animated-gradient h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-br bg-white z-0" />

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
            className="text-5xl md:text-7xl font-bold text-black mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
            data-aos="fade-up"
          >
            <span className="block text-black">Transform Your</span>
            <span className="text-red-500">Web Development</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-xl text-black/90 max-w-3xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We build robust, scalable web applications that users love.  
            Our approach ensures your product isn't just functional — it's exceptional.
          </motion.p>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a
          href="#services"
          className="animate-bounce w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
          aria-label="Scroll down"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <i className="fas fa-chevron-down text-white"></i>
        </a>
      </div>

      {/* Web Development Section */}
      <motion.div
        className="w-[90%] mx-auto my-16 p-10 rounded-2xl shadow-2xl bg-gradient-to-br from-black via-black to-red-950 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 px-4">
          <div className="flex items-center gap-3">
            <FaCircle className="text-blue-600 text-xl" />
            <h3 className="text-xl font-bold text-blue-600">Web Development</h3>
          </div>
          <h1 className="text-2xl md:text-4xl font-medium text-center md:text-right">
            Code That <span className="text-blue-500">Drives Success</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src="/left web development.png"
              alt="Web development illustration"
              loading="lazy"
              data-aos="fade-right"
            />
          </div>
          <div className="w-full lg:w-1/2 text-2xl leading-relaxed">
            <p data-aos="fade-left">
              Effective web development is about more than just code — it's about creating intuitive, engaging user experiences.
              A well-designed application builds trust, improves usability, and keeps users coming back.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="w-[90%] mx-auto my-16 p-10 rounded-2xl bg-white border border-sky-400">
        <motion.div
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-evenly mb-10 px-4 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaCircle className="text-blue-600 text-xl" />
            <h3 className="text-xl font-bold text-blue-600 underline underline-offset-4">
              Web Development Services
            </h3>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug max-w-3xl">
            Crafted to Deliver{" "}
            <span className="text-blue-500">
              Seamless, Scalable Web Development Experiences
            </span>
          </h1>
        </motion.div>
        
        {/* Services Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          data-aos="fade-up"
        >
          {[
            {
              title: "Full-Stack Development",
              desc: "End-to-end solutions for powerful web applications.",
            },
            {
              title: "API Development",
              desc: "Reliable and scalable APIs that power your ecosystem.",
            },
            {
              title: "E-commerce Solutions",
              desc: "Custom online stores built for performance and growth.",
            },
            {
              title: "Content Management Systems",
              desc: "Flexible CMS solutions tailored to your workflow.",
            },
            {
              title: "Responsive Web Design",
              desc: "Interfaces that adapt beautifully across all devices.",
            },
            {
              title: "Performance Optimization",
              desc: "Speed and efficiency that deliver superior user experience.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-3xl shadow-lg text-white flex flex-col justify-center relative overflow-hidden cursor-pointer"
              variants={cardHoverEffect}
              whileHover="hover"
              transition={{ duration: 1 }}
              data-aos="zoom-in"
            >
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
              />
              
              {/* Border Glow */}
              <motion.div 
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
              />
              
              <h3 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 mb-4 tracking-wide drop-shadow-md z-10">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed tracking-wide text-center z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="w-[90%] mx-auto my-16 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold mb-10 text-black">Web Development Impact</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              stat: "500+",
              title: "Web Applications Delivered",
              desc: "We've empowered businesses with high-performing web solutions.",
            },
            {
              stat: "40%",
              title: "Increase in User Engagement",
              desc: "Our optimized designs keep users coming back.",
            },
            {
              stat: "4.8/5",
              title: "Client Satisfaction Rating",
              desc: "Clients consistently rate us for quality and results.",
            },
            {
              stat: "15+",
              title: "Industries Served",
              desc: "From healthcare to retail, our reach is wide and impactful.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-lime-900 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              whileHover={{ y: -5 }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h1 className="text-4xl font-bold text-blue-500 mb-2">{item.stat}</h1>
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Development Process Section */}
      <div className="w-[90%] mx-auto mt-16">
  <h3 className="text-3xl font-bold text-black text-center mb-10">
    Leverage our proven web development process
  </h3>
  <p className="text-lg text-center text-black/80 mb-10">
    We’ve delivered over 2500 projects – we know what it takes to execute a seamless and optimized web-based software development process.
  </p>

  <div className="grid md:grid-cols-5 gap-6 pb-10">
    {[
      {
        step: "01",
        title: "Consult your idea",
        desc: "Set the right direction with our web development consultants.",
      },
      {
        step: "02",
        title: "Choose a technology",
        desc: "Together, we'll decide on the tech stack and the overall approach.",
      },
      {
        step: "03",
        title: "Design",
        desc: "We'll craft a beautiful and user-friendly web solution with our expert designers.",
      },
      {
        step: "04",
        title: "Develop",
        desc: "We'll code the web app with a team of experienced engineers.",
      },
      {
        step: "05",
        title: "Reach the market",
        desc: "We'll help you launch your product and keep it in good shape with support and maintenance.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="relative bg-slate-700 p-6 rounded-xl shadow-md cursor-pointer overflow-hidden text-center text-white"
        whileHover="hover"
        initial="rest"
        animate="rest"
        data-aos="fade-up"
        data-aos-delay={i * 100}
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-4">{item.step}</h2>
        <h1 className="text-xl font-semibold mb-2">{item.title}</h1>

        {/* Animated Description */}
        <motion.div
          variants={{
            rest: { x: -50, opacity: 0 },
            hover: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-4 left-4 right-4 p-6 rounded-xl bg-black text-sm text-white shadow-lg"
        >
          {item.desc}
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>


      {/* Why Choose Us Section */}
      <WhyChooseUs />
      <Footer />
    </section>
  );
};

export default Hero;
