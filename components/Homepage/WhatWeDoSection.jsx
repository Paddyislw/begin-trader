"use client";
import Heading from "@/global/Heading";
import Subheading from "@/global/Subheading";
import { layout } from "@/utils/Classnames";
import React from "react";
import "../../app/globals.css";
import { useInView } from "react-intersection-observer";

const WhatWeDoSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className={`${layout} my-20`} ref={ref}>
      <Subheading
        text={"What we do"}
        className={`sm:text-center ${
          inView ? "animate-pop-in-down leafBox-1" : "notVisible"
        }`}
      />
      <div className="flex space-x-4 justify-between sm:flex-col sm:items-center sm:space-x-0 sm:space-y-6">
        <div className="w-[40%] space-y-8 text-gray-600 text-sm xl:w-1/2 sm:space-y-3 sm:w-[80%] sm:text-center mb:w-full">
          <Heading
            text={"Empowering individuals to navigate stocks passionately."}
            className={` mt-6 ${
              inView ? "animate-pop-in-down leafBox-2" : "notVisible"
            }`}
          />
          <p
            className={`w-[80%] sm:w-full mb:text-sm  ${
              inView ? "animate-pop-in-down leafBox-3" : "notVisible"
            }`}
          >
            Our Mission: Our mission is to provide high-quality stock market
            courses that cater to traders of all levels, from beginners to
            experienced investors. We believe in offering practical, actionable
            knowledge that can help you achieve your financial goals.
          </p>
          <p
            className={`w-[80%] sm:w-full mb:text-sm  ${
              inView ? "animate-pop-in-down leafBox-4" : "notVisible"
            }`}
          >
            Expert Instructors: Our team of expert instructors comprises
            seasoned traders, financial analysts, and industry professionals who
            have a wealth of experience in the stock market. They are dedicated
            to sharing their expertise and guiding you towards success.
          </p>
        </div>
        <div className=" w-1/2 grid grid-cols-2 gap-4 justify-items-center sm:w-[80%] mb:w-full">
          <LeafBox
            className={`rounded-b-[70px] rounded-tl-[70px] leafBox-1  ${
              inView ? "animate-scale isVisible " : "notVisible"
            }`}
            heading={"18"}
            subHeading={"Years Experience"}
          />
          <LeafBox
            className={`rounded-b-[70px] rounded-tl-[70px] leafBox-2  ${
              inView ? "animate-scale isVisible " : "notVisible"
            }`}
            heading={"240+"}
            subHeading={"Completed Projects"}
          />
          <LeafBox
            className={`rounded-b-[70px] rounded-tl-[70px] leafBox-3  ${
              inView ? "animate-scale isVisible " : "notVisible"
            }`}
            heading={"9.5/10"}
            subHeading={"Average rating"}
          />
          <LeafBox
            className={`rounded-b-[70px] rounded-tl-[70px] leafBox-4  ${
              inView ? "animate-scale isVisible " : "notVisible"
            }`}
            heading={"150+"}
            subHeading={"Served"}
          />
        </div>
      </div>
    </div>
  );
};

const LeafBox = ({ className, heading, subHeading, item }) => (
  <div
    className={` w-[250px] h-[150px] ${className} bg-primaryLight text-primary flex flex-col items-center  justify-center xl:w-[200px] xl:h-[120px] md:w-[160px] md:h-[100px]`}
  >
    <div>
      <p className="text-4xl font-semibold xl:text-3xl md:text-2xl mb:text-xl">
        {heading}
      </p>
      <p className="md:text-sm">{subHeading}</p>
    </div>
  </div>
);

export default WhatWeDoSection;
