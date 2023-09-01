import TelegramSection from "@/components/services/TelegramSection";
import WhatsAppSection from "@/components/services/WhatsAppSection";
import Navbar from "@/global/Navbar";
import { layout } from "@/utils/Classnames";
import React from "react";

const Service = () => {
  return (
    <div className="mb-[300px]">
      <Navbar
        color="black"
        className={`${layout} pt-6 pb-4 bg-gray-100 shadow-lg border-b`}
        navType="navBtnGreen"
      />
      <div className={`${layout} mt-10`}>
        <p className="text-4xl font-semibold  text-center text-primary mb-1">OUR SERVICES</p>
        <p className="text-red-500 font-bold text-center mb-8">
          If you're having trouble opening the link below, please try clicking
          it again from this location.
        </p>
        <div
          className={` flex space-x-10 w-fit mx-auto lg:space-x-4 md:flex-col md:space-x-0 md:space-y-6`}
        >
          <WhatsAppSection />
          <TelegramSection />
        </div>
      </div>
    </div>
  );
};

export default Service;
