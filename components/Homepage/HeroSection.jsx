import Navbar from "@/global/Navbar";
import Image from "next/image";
import React from "react";
import Hero2 from "../../utils/images/Hero2.png";
import { layout } from "@/utils/Classnames";
import whatsApp from "../../utils/svg/whatsAppWhite.svg";

const HeroSection = () => {
  return (
    <div
      style={{
        background: "#7FDBB0",
        background: "radial-gradient(at center, #7FDBB0, #006E44)",
      }}
      className={`h-[800px] xl:h-auto py-6 text-white ${layout} overflow-hidden`}
    >
      <Navbar />
      <div className="flex justify-between mt-10 items-center sm:flex-col">
        <div className="space-y-6 mb-6">
          <p className="text-7xl font-semibold leading-[90px] xl:text-6xl lg:text-5xl sm:text-6xl mb:text-4xl mb:text-center animate-pop-in title">
            Financial <br />
            Solutions
          </p>
          <p className="w-[400px] lg:text-sm mb:w-auto mb:text-center animate-pop-in subtitle">
            Welcome to Begin Trader, where we are dedicated to embarking on a
            transformative journey with you, guiding you every step of the way
            on your path to becoming a successful trader.
          </p>
          <a
            className="py-2 px-4 border rounded-lg flex mb:mx-auto animate-pop-in hero-btn hover:scale-105 w-fit space-x-2"
            href="https://api.whatsapp.com/send?phone=9629123326"
            target="_blank"
          >
            <Image src={whatsApp} className="text-white" />
            <p>Get Started Today</p>
          </a>
        </div>
        <Image
          src={Hero2}
          className="w-[600px] xl:w-[500px] lg:w-[400px] md:w-[350px] sm:w-[500px] animate-image-pop-in"
          alt="Work illustrations by Storyset"
        />
      </div>
    </div>
  );
};

export default HeroSection;
