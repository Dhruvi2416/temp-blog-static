import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: "url('/assets/HeroLayer.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <img src="/assets/Logo.png" alt="Logo" className="w-28 md:w-32" />

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
          <li>
            <a href="#services" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About us
            </a>
          </li>
          <li>
            <a href="#blogs" className="hover:text-white">
              Blogs
            </a>
          </li>
          <li>
            <a href="#case-studies" className="hover:text-white">
              Case Studies
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
