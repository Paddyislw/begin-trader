import { layout } from "@/utils/Classnames";
import React from "react";
import logo from "../utils/icons/logowithoutname.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`${layout} flex justify-between py-24 sm:grid sm:grid-cols-2 sm:justify-items-center sm: gap-4`}>
      <div>
        <div className="flex items-center mb-2">
          <Image src={logo} className="w-14 mb:w-10" />
          <p className="mb:text-sm">Begin Trader</p>
        </div>
        <p className="text-gray-600 text-sm mb:text-xs mb:text-center">Highest rated <br className="hidden mb:block"/> export team</p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <p>Home</p>
        <p>About Us</p>
        <p>Testimonial</p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <p>Our Services</p>
        <p>Contact Us</p>
        <p>FAQ</p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <p>Email Us</p>
        <p>Instagram</p>
        <p>WhatsApp</p>
      </div>
    </div>
  );
};

export default Footer;
