// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCopyOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    // const [copied, setCopied] = useState(false);
    const email = "hello@remotehealth.com";
    
  return (
    <footer className="bg-[#E6F2FF] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-32 mb-16">
          {/* CONTACT */}
          <div>
            <h3 className="text-sm md:text-xl lg:text-[28px] font-bold text-[#484848] mb-6">CONTACT US</h3>
            <p className="text-sm md:text-base lg:text-[20px] text-[#484848] mb-6">Have a concern or inquiry?</p>
            <button className="bg-[#007BFF] text-[#FFFFFF] px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-500 flex items-center gap-2 text-sm md:text-base lg:text-[20px] whitespace-nowrap">
              Chat with us now →
            </button>

            <div className="mt-10 md:mt-12">
              <p className="text-sm md:text-base lg:text-[20px] text-[#484848] mb-3">or email us at</p>
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm lg:text-[20px] text-[#484848] border border-[#007BFF] rounded-lg px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                  {email} 
                  <IoCopyOutline className="text-[#484848] cursor-pointer hover:text-gray-600" />
                </span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm md:text-xl lg:text-[28px] font-bold text-[#484848] mb-6">QUICK LINKS</h3>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <NavLink to="/services" className="text-sm md:text-base lg:text-[20px] text-[#484848] hover:text-[#007BFF] transition duration-500 font-medium">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-sm md:text-base lg:text-[20px] text-[#484848] hover:text-[#007BFF] transition duration-500 font-medium">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm md:text-base lg:text-[20px] text-[#484848] hover:text-[#007BFF] transition duration-500 font-medium">
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="text-sm md:text-xl lg:text-[28px] font-bold text-[#484848] mb-6">INFORMATION</h3>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <NavLink to="/terms" className="text-sm md:text-base lg:text-[20px] text-[#484848] hover:text-[#007BFF] transition duration-500 font-medium">
                  Terms of service
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="text-sm md:text-base lg:text-[20px] text-[#484848] hover:text-[#007BFF] transition duration-500 font-medium">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-sm md:text-base lg:text-[20px] text-[#484848] hover:text-[#007BFF] transition duration-500 font-medium">
                  FAQs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="border-t border-gray-300 pt-8 md:pt-10">
          <div className="grid grid-cols-1 sm:flex-row items-start sm:items-center justify-between gap-6">
           
            <div className="flex items-center gap-6">
              <a href="#link-to-facebook" className="text-gray-600 hover:text-blue-600 transition" title="Facebook">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#link-to-instagram" className="text-gray-600 hover:text-blue-600 transition" title="Instagram">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#link-to-twitter" className="text-gray-600 hover:text-blue-600 transition" title="Twitter">
                <FaXTwitter className="text-lg" />
              </a>
              <a href="#link-to-linkedin" className="text-gray-600 hover:text-blue-600 transition" title="LinkedIn">
                <FaLinkedin className="text-lg" />
              </a>
            </div>

            {/* Copyright */}
            <p className="md:text-sm lg:text-[20px] text-[#484848]">
              © 2025 Remote Health. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
