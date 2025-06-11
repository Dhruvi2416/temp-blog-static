import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    axios
      .get("http://3.7.81.243:3253/api/settings/fetch-frontend-details")
      .then((res) => setFooterData(res.data.data))
      .catch((err) => console.error("Error fetching footer settings", err));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-[#eef5f6] text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-lg font-medium">
            Tagline will go here. Lorem ipsum dolor sit amet...
          </h2>
          <a
            href={`mailto: ${footerData.inquiry_mail}`}
            className="text-cyan-500 mt-2 inline-block"
          >
            {footerData.inquiry_mail}
          </a>
        </div>

        <div className="hidden md:block w-px bg-gray-400"></div>

        <div className="flex-1">
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-sm whitespace-pre-line">{footerData.address}</p>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">{footerData.contact_mail}</p>
          <p className="text-sm">{footerData.contact_no}</p>
        </div>
      </div>

      <div className="mt-10 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 items-center text-sm">
        <img src="/assets/Logo.png" alt="Logo" className="w-24 mb-4" />
        <div className="flex gap-6 text-gray-600">
          <a href="#about">About</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
        </div>

        <p className="text-gray-500 text-xs mt-4 md:mt-0">
          © {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
