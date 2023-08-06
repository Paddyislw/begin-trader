import Navbar from "@/global/Navbar";
import { layout } from "@/utils/Classnames";
import ContactUsImg from "../../mocks/ContactUs.png";
import Image from "next/image";
import React from "react";
import whatsApp from "../../utils/svg/whatsapp.svg";
import email from "../../utils/svg/email.svg";
import call from "../../utils/svg/call.svg";
import telegram from "../../utils/svg/telegram.svg";
import instagram from "../../utils/svg/instagram.svg";

const ContactUs = () => {
  return (
    <>
      <Navbar
        color="black"
        className={`${layout} pt-6 pb-4 bg-gray-100 shadow-lg border-b`}
        navType="navBtnGreen"
      />
      <div>
        <p className="text-center mb-6 text-xl font-semibold text-primary mt-14">
          Contact Us Through These Links
        </p>
        <div className="flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0">
          <Image
            src={ContactUsImg}
            className="w-[500px] lg: lg:w-[400px] md:w-[300px] sm:w-[400px]"
          />
          <div className="grid grid-cols-2 justify-items-center gap-4 text-primaryDark">
            {ContactUsData.map((item) => (
              <div
                key={item.title}
                className={
                  "bg-primaryLight w-[200px] text-center py-4 rounded-t-xl rounded-bl-xl flex justify-center space-x-2 shadow-xl cursor-pointer mb:w-[160px] mb:text-sm mb:space-x-0"
                }
              >
                <Image src={item.icon} className="w-[22px] mx-3" />
                <p className="grow text-left ">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const ContactUsData = [
  { title: "Email", icon: email },
  { title: "Phone Number", icon: call },
  { title: "Instagram", icon: instagram },
  { title: "Telegram", icon: telegram },
  { title: "Whatsapp", icon: whatsApp },
];

export default ContactUs;
