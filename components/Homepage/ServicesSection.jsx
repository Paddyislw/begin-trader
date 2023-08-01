"use client";
import Heading from "@/global/Heading";
import Subheading from "@/global/Subheading";
import React from "react";
import Wave from "../../utils/svg/wave.svg";
import Image from "next/image";
import { layout } from "@/utils/Classnames";
import bank from "../../utils/svg/bank.svg";
import Personalized from '../../utils/icons/Personalized.png'
import OnDemand from '../../utils/icons/OnDemand.png'
import Supportive from '../../utils/icons/Supportive.png'
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true,threshold: 0.2 });
  return (
    <div className={`my-20 ${layout}`} ref={ref}>
      <div className="space-y-4 pt-6">
        <Subheading
          text={"Our Services"}
          className={`text-center  ${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          }`}
        />
        <Heading
          text={"What We Offer"}
          className={`text-center ${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          }`}
        />
      </div>
      <div className="flex justify-center mt-12 space-x-8 md:grid md:grid-cols-2 md:space-x-0 md:justify-items-center md:gap-4 mb:grid-cols-1">
        {CardData.map(({ des, heading, icon, number, className }) => (
          <Card
            key={number}
            des={des}
            heading={heading}
            icon={icon}
            number={number}
            className={className}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ heading, des, icon, number, className,inView }) => {
  return (
    <div
      className={`w-[270px] h-[320px] relative shadow-xl rounded-lg border border-gray-50 flex flex-col items-center justify-center space-y-4 ${
        inView ? className : "notVisible"
      }`}
    >
      <Image src={icon} className="w-14 mb-2 object-contain" />
      <div className="space-y-3">
        <p className="text-center text-gray-600 ">{number}</p>
        <p className="text-center text-lg font-semibold">{heading}</p>
        <p className="text-center text-sm text-gray-600">{des}</p>
        <Image src={Wave} className="absolute bottom-0 rounded-lg" />
      </div>
    </div>
  );
};

const CardData = [
  {
    heading: "Personalized Learning",
    des: "Seamless learning, your schedule, your way. On-demand courses, anytime, anywhere.",
    icon: Personalized,
    number: "#1",
    className: "animate-scale leafBox-2",
  },
  {
    heading: "On-Demand Access",
    des: "Trading education: engaging, not boring. Thrive in the stock market with enjoyable learning.",
    icon: OnDemand,
    number: "#2",
    className: "animate-scale leafBox-3",
  },
  {
    heading: "Supportive Community",
    des: "Join our supportive community of traders, where you can connect, share insights ,and learn.",
    icon: Supportive,
    number: "#3",
    className: "animate-scale leafBox-4",
  },
];
export default ServicesSection;
