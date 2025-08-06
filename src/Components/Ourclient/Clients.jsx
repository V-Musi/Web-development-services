import React from "react";
import Cakeimg from "../../assets/cake .jpg"
import Candleimg from "../../assets/candle .jpg"
const clientLogos = [
  [
    Cakeimg,
    Candleimg,
  ],
  [
    "https://cdn.easyfrontend.com/pictures/logos/color-fill-logo-3.jpeg",
    "https://cdn.easyfrontend.com/pictures/logos/color-fill-logo-4.jpeg",
  ],
  [
    "https://cdn.easyfrontend.com/pictures/logos/color-fill-logo-5.jpeg",
    "https://cdn.easyfrontend.com/pictures/logos/color-fill-logo-6.jpeg",
  ],
];

const ClientsSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden py-16 md:py-24 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="xl:col-span-2 xl:pr-12 mb-6 xl:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Clients</h2>
            <p className="text-lg leading-relaxed opacity-80">
              It’s easier to reach your savings goals when you have the right
              savings account. Take a look and find the right one for you! It’s
              easier to reach your savings goals when you have the right savings
              account.
            </p>
          </div>

          {/* Right Logos Section */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-3 text-center gap-y-6 md:gap-y-10">
              {clientLogos.map((col, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center ${
                    i === 1 ? "mt-6 md:mt-12" : ""
                  } ${i === 2 ? "mt-6 md:mt-20" : ""}`}
                >
                  {col.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`Client Logo ${idx + 1}`}
                      className="rounded-3xl w-full max-w-[180px] mb-4 mx-auto"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
    </section>
  );
};

export default ClientsSection;
