import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Logo from "../assets/red.png";

const navItems = [
  { name: "Home", to: "/", icon: "ri-home-4-line" },
  {
    name: "Service",
    to: "",
    icon: "ri-customer-service-2-line",
    dropdown: [
      { name: "Web Development", to: "/service/web-development" },
      { name: "UI/UX Design", to: "/service/ui-ux" },
      { name: "SEO Optimization", to: "/service/seo" },
      { name: "E-commerce Solutions", to: "/service/ecommerce" },
    ],
  },
  { name: "Pricing", to: "/pricing", icon: "ri-price-tag-3-fill" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`w-full fixed top-0 z-30 transition-all duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="max-w-full mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-extrabold text-2xl select-none"
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="w-20 h-16 object-contain"
            loading="lazy"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex space-x-2">
            {navItems.map(({ name, to, icon, dropdown }) => (
              <li
                key={name}
                className="relative"
                onMouseEnter={dropdown ? handleMouseEnter : undefined}
                onMouseLeave={dropdown ? handleMouseLeave : undefined}
              >
                {dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-2 px-3 py-2 text-base font-medium tracking-wide transition duration-300 ${
                        scrolled
                          ? "text-indigo-600 hover:text-indigo-800"
                          : "text-black hover:text-gray-700"
                      }`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <i className={`${icon} text-base`} />
                      <span>{name}</span>
                      <i
                        className={`ri-arrow-down-s-line ml-1 text-sm transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        } ${scrolled ? "text-indigo-600" : "text-black"}`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`md:absolute left-0 mt-1 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 text-sm ${
                        dropdownOpen
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none translate-y-1"
                      }`}
                      role="menu"
                    >
                      <ul className="py-3">
                        {dropdown.map(({ name, to }) => (
                          <li key={name}>
                            <Link
                              to={to}
                              onClick={() => {
                                setDropdownOpen(false);
                                setMenuOpen(false);
                              }}
                              className="block px-5 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 rounded-md font-medium transition duration-200"
                              role="menuitem"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={to}
                    end={name === "Home"}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-3 py-2 text-base font-medium tracking-wide transition duration-300 ${
                        scrolled
                          ? isActive
                            ? "text-indigo-600"
                            : "text-indigo-600 hover:text-indigo-800"
                          : isActive
                          ? "text-black font-bold"
                          : "text-black hover:text-gray-700"
                      }`
                    }
                  >
                    <i className={`${icon} text-base`} />
                    <span>{name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/contact"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            Contact us
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-base font-medium text-gray-800 hover:text-indigo-600"
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 rounded-lg bg-indigo-600 text-white text-center text-base font-medium hover:bg-indigo-700"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
