import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Services from "./Components/Services";
import About from "./Components/About";
import Solutions from "./Components/Solutions";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import WebDevelopment from "./Components/Webdevlopment";
import UxUi from "./Components/UxUi";
import ECommerce from "./Components/E-commerce";
import Seo from "./Components/Seo";
import Preloader from "./Components/Preloader";
import AboutUs from "./Components/AboutUs";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative w-full overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Header/>
              <Services />
              <About />
              <Solutions />
              <Footer />
            </>
          }
        />
        {/* Service Subpages */}
        <Route path="/service/web-development" element={<WebDevelopment />} />
        <Route path="/service/ui-ux" element={<UxUi />} />
        <Route path="/service/ecommerce" element={<ECommerce />} />
        <Route path="/service/seo" element={<Seo />} />
        
        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;