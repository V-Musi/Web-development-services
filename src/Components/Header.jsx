import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "remixicon/fonts/remixicon.css";

const services = ["Logo", "Personal Portfolio", "E-commerce Website", "Business Website"];

export default function HeroPage() {
  const [text, setText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentService = services[serviceIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 1000;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setText(currentService.substring(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % services.length);
        }
      } else {
        if (charIndex < currentService.length) {
          setCharIndex((prev) => prev + 1);
          setText(currentService.substring(0, charIndex + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, serviceIndex]);

  return (
    <section className="relative overflow-hidden min-h-screen w-full">
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/backvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 w-full h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-8 md:px-12 text-center">
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          {/* Static Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold leading-snug sm:leading-tight break-words">
            Let&apos;s <span className="text-blue-400">Build</span> Your
          </h1>

          {/* Typing Text Below */}
          <div className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 h-12">
            <span className="inline-block">
              {text}
              <span className="ml-1 animate-blink">|</span>
            </span>
          </div>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-black text-center leading-relaxed px-2 sm:px-4">
            Create performant and beautiful UI components with a consistent,
            modern design system.
          </p>
        </div>
      </div>

      {/* Blinking Cursor Style */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
