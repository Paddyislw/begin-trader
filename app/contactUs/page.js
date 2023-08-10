"use client";
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
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
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
        <div
          ref={ref}
          className="flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0"
        >
          <Image
            src={ContactUsImg}
            className={`w-[500px] lg: lg:w-[400px] md:w-[300px] sm:w-[400px]  ${
              inView ? "animate-pop-in-down leafBox-1" : "notVisible"
            }`}
            alt="Work illustrations by Storyset"
          />
          <div className="grid grid-cols-2 justify-items-center gap-4 text-primaryDark">
            {ContactUsData.map((item) => (
              <a
                key={item.title}
                className={`bg-primaryLight w-[200px] text-center py-4 rounded-t-xl rounded-bl-xl flex justify-center space-x-2 shadow-xl cursor-pointer mb:w-[160px] mb:text-sm mb:space-x-0 ${
                  inView ? item.className : "notVisible"
                }`}
                href={item.link}
                target="_blank"
              >
                <Image src={item.icon} className="w-[22px] mx-3"  alt=""/>
                <p className="grow text-left ">{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const ContactUsData = [
  {
    title: "Email",
    icon: email,
    link: "mailto:begintraderr@gmail.com",
    className: "animate-pop-in-down leafBox-2",
  },
  {
    title: "9629123326",
    icon: call,
    link: "",
    className: "animate-pop-in-down leafBox-3",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://instagram.com/begin_trader?igshid=MmU2YjMzNjRlOQ==",
    className: "animate-pop-in-down leafBox-4",
  },
  {
    title: "Telegram",
    icon: telegram,
    link: "https://telegram.me/begin_trader",
    className: "animate-pop-in-down leafBox-5",
  },
  {
    title: "Whatsapp",
    icon: whatsApp,
    link: "https://api.whatsapp.com/send?phone=9629123326",
    className: "animate-pop-in-down leafBox-6",
  },
];

export default ContactUs;
