import React, { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import Logo from '../assets/logo.png'
const navItems = [
  { name: 'Home', to: '/', icon: 'ri-home-4-line' },
  {
    name: 'Service',
    to: '/service',
    icon: 'ri-customer-service-2-line',
    dropdown: [
      { name: 'Web Development', to: '/service/web-development' },
      { name: 'UI/UX Design', to: '/service/ui-ux' },
      { name: 'SEO Optimization', to: '/service/seo' },
      { name: 'E-commerce Solutions', to: '/service/ecommerce' },
    ],
  },
  { name: 'About', to: '/about', icon: 'ri-information-line' },
  { name: 'Contact', to: '/contact', icon: 'ri-contacts-line' },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownTimeout = useRef();

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
    <header className="sticky top-0 bg-white shadow-sm z-30">
      <nav className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center space-x-2 font-extrabold text-2xl text-gray-900 select-none tracking-tight">
          <img src={Logo} alt="Company Logo" className="w-24 h-24 object-contain" loading="lazy" />

        </Link>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'} />
        </button>

        {/* Nav links */}
        <ul
          className={`md:flex md:space-x-10 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          } md:flex-row flex-col md:items-center shadow md:shadow-none z-20`}
        >
          {navItems.map(({ name, to, icon, dropdown }) => (
            <li
              key={name}
              className="relative"
              onMouseEnter={dropdown ? handleMouseEnter : undefined}
              onMouseLeave={dropdown ? handleMouseLeave : undefined}
            >
              <NavLink
                to={to}
                end={name === 'Home'}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 md:py-0 text-gray-700 text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-gray-900 focus:outline-none ${
                    isActive ? 'text-gray-900 border-b-2 border-indigo-600 md:pb-1' : ''
                  }`
                }
                aria-haspopup={dropdown ? 'menu' : undefined}
                aria-expanded={dropdown ? (dropdownOpen ? 'true' : 'false') : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <i className={`${icon} text-xl`} />
                <span>{name}</span>
                {dropdown && (
                  <i
                    className={`ri-arrow-down-s-line ml-1 text-lg text-gray-600 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                )}
              </NavLink>

              {/* Dropdown menu */}
              {dropdown && (
                <div
                  className={`md:absolute left-0 mt-1 md:mt-2 w-full md:w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
                    dropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'
                  }`}
                  role="menu"
                  aria-label="Service submenu"
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
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
