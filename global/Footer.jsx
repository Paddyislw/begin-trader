import { layout } from "@/utils/Classnames";
import React from "react";
import logo from "../utils/icons/logowithoutname.png";
import Image from "next/image";


const Footer = () => {
  return (
    <div className={`${layout} flex justify-between py-24 sm:grid sm:grid-cols-2 sm:justify-items-center sm: gap-4 `}>
      <div>
        <div className="flex items-center mb-2">
          <Image src={logo} className="w-14 mb:w-10" />
          <p className="mb:text-sm">Begin Trader</p>
        </div>
        <p className="text-gray-600 text-sm mb:text-xs text-center">The art<br className="hidden mb:block"/> of trading</p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <p className="cursor-pointer  navBtnGreen">Home</p>
        <p className="cursor-pointer  navBtnGreen">About Us</p>
        <p className="cursor-pointer  navBtnGreen">Testimonial</p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <p className="cursor-pointer  navBtnGreen">Our Services</p>
        <p className="cursor-pointer  navBtnGreen">Contact Us</p>
        <p className="cursor-pointer  navBtnGreen">FAQ</p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <p className="cursor-pointer  navBtnGreen">Email Us</p>
        <p className="cursor-pointer  navBtnGreen">Instagram</p>
        <p className="cursor-pointer  navBtnGreen">WhatsApp</p>
      </div>
    </div>
  );
};

export default Footer;
