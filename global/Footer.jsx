import { layout } from "@/utils/Classnames";
import React from "react";
import logo from "../utils/icons/logowithoutname.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`${layout} flex justify-between py-24`}>
      <div>
        <div className="flex items-center mb-2">
          <Image src={logo} className="w-14" />
          <p>Begin Trader</p>
        </div>
        <p className="text-gray-600 text-sm">Highest rated export team</p>
      </div>
      <div className="font-semibold space-y-3">
        <p>Home</p>
        <p>About Us</p>
        <p>How it Works</p>
      </div>
      <div className="font-semibold space-y-3">
        <p>Our Services</p>
        <p>Contact Us</p>
        <p>FAQ</p>
      </div>
      <div className="font-semibold space-y-3">
        <p>Our Team</p>
        <p>Careers</p>
      </div>

      <div>
        <p>Face</p>
      </div>
    </div>
  );
};

export default Footer;
