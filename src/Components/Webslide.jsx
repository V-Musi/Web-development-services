// src/components/WebDevSlider.jsx
import React from "react";
import Slider from "react-slick";
import img1 from "../assets/Responsive.png";
import img2 from "../assets/SSL.png";
import img3 from "../assets/UXUI.png";
import img4 from "../assets/SQu.png";

const WebDevSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [
    { src: img1, title: "Web Development" },
    { src: img2, title: "UI/UX Design" },
    { src: img3, title: "SEO Optimization" },
    { src: img4, title: "E-commerce Solutions" },
  ];

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <Slider {...settings}>
        {images.map((item, index) => (
            <div key={index} className="relative">
                <img
                src={item.src}
                alt={item.title}
                className="w-full h-96 object-cover rounded-xl "
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {item.title}
                </div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default WebDevSlider;
