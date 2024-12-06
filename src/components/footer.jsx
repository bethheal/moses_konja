import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterDivider,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <FlowbiteFooter container>
      <div className="w-full max-w-screen-xl mx-auto ">
        <div className="w-full md:flex md:items-center md:justify-between text-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img src={logo} alt="logo" className="w-32 h-32" />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center space-x-6 text-lg">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 transition hover:opacity-75"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 transition hover:opacity-75"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 transition hover:opacity-75"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className=" flex justify-center space-x-6 sm:justify-center">
          <a
            href="https://www.facebook.com/africabusinessfestival"
            className="text-gray-500 hover:text-gray-900"
          >
            <BsFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/africabusinessfestival"
            className="text-gray-500 hover:text-gray-900"
          >
            <BsInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/africabusinessfest"
            className="text-gray-500 hover:text-gray-900"
          >
            <BsTwitter size={20} />
          </a>
        </div>

        {/* Divider */}
        <FooterDivider />

        {/* Copyright Section */}
        <div className="mt-6 text-center">
          <FooterCopyright href="https://github.com/bethheal" by="LiT" year={2024} />
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
