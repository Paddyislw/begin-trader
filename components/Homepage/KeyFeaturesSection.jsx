"use client";
import Heading from "@/global/Heading";
import Subheading from "@/global/Subheading";
import { layout } from "@/utils/Classnames";
import Image from "next/image";
import React from "react";
import phone from "../../utils/svg/phone.svg";
import innovative from "../../utils/icons/innovative.png";
import assistance from "../../utils/icons/assistance.png";
import team from "../../utils/icons/team.png";
import calling from "../../utils/icons/calling.png";
import { useInView } from "react-intersection-observer";

const KeyFeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      className={`my-20 pt-4 flex justify-center space-x-20 ${layout} lg:space-x-10 sm:flex-col sm:space-x-0 sm:space-y-8`}
      ref={ref}
    >
      <div className="grid justify-items-center grid-cols-2 gap-4">
        {CardData.map((item) => (
          <Card
            icon={item.icon}
            text={item.text}
            key={item.text}
            className={item.className}
            inView={inView}
            alt={item.alt}
          />
        ))}
      </div>
      <div className="w-[40%] space-y-4 sm:w-full sm:text-center">
        <Subheading
          text={"Start Now"}
          className={`sm:text-center  ${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          }`}
        />
        <Heading
          text={"Start now and embrace your trading journey!"}
          className={`${
            inView ? "animate-pop-in-down leafBox-2" : "notVisible"
          }`}
        />
        <p className={inView ? "animate-pop-in-down leafBox-3" : "notVisible"}>
          Practice Trading: Put your knowledge into action with our simulated
          trading environment. Practice trading without risking real money,
          allowing you to build confidence and refine your skills before diving
          into the real market.
        </p>
        <p className={inView ? "animate-pop-in-down leafBox-4" : "notVisible"}>
          Lifetime Access: Once you enroll in a course, you'll have lifetime
          access to the content and any future updates. Keep your knowledge
          up-to-date with the ever-changing market trends.
        </p>
      </div>
    </div>
  );
};

const Card = ({ icon, text, className, inView ,alt}) => {
  return (
    <div
      className={`w-[200px] h-[200px] border rounded-lg shadow-lg flex-col flex items-center justify-center space-y-6 mb:w-[170px] mb:h-[170px] ${
        inView ? className : "notVisible"
      }`}
    >
      <Image
        src={icon}
        className="w-14 mx-auto bg-primaryLight rounded-t-full rounded-br-full p-2"
        alt={alt}
      />
      <p className="text-base text-primaryDark font-semibold text-center mb:text-base">
        {text}
      </p>
    </div>
  );
};

const CardData = [
  {
    icon: innovative,
    text: "Innovative Solutions",
    className: "animate-scale leafBox-1",
    alt: "Icon by manshagraphics",
  },
  {
    icon: assistance,
    text: "Market Assistance",
    className: "animate-scale leafBox-2",
    alt: "Icon by surang",
  },
  {
    icon: team,
    text: "Professional Team",
    className: "animate-scale leafBox-3",
    alt: "Icon by Iconjam",
  },
  {
    icon: calling,
    text: "Fast Calling",
    className: "animate-scale leafBox-4",
    alt: "Icon by dickprayuda",
  },
];

export default KeyFeaturesSection;
