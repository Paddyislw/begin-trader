"use client";
import Heading from "@/global/Heading";
import Subheading from "@/global/Subheading";
import React from "react";
import course from "../../mocks/course.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import FundamentalStockMarket from "../../utils/images/fundamentalsStockMarket.png";
import OptionsExpertise from "../../utils/images/optionsExpertise.png";
import Link from "next/link";

const CoursesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="my-20 pt-4" ref={ref}>
      <div className="space-y-3 mb-10">
        <Subheading
          text={"Our Services"}
          className={`text-center ${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          }`}
        />
        <Heading
          text={"Courses We Provide"}
          className={`text-center ${
            inView ? "animate-pop-in-down leafBox-2" : "notVisible"
          }`}
        />
      </div>
      <div className="flex justify-center space-x-8 mt-4 sm:space-x-2 mb:flex-col mb:items-center mb:space-y-4 mb:space-x-0">
        {CourseData.map((item, index) => (
          <CourseCard {...item} key={index} inView={inView} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({
  title,
  des,
  subTitle,
  image,
  className,
  inView,
  details,
}) => {
  return (
    <div
      className={`w-[320px] border rounded-lg shadow-xl sm:w-[280px] mb:w-[320px] ${
        inView ? className : "notVisible"
      }`}
    >
      <Image src={image} alt="Image by Freepik"/>
      <div className="p-4 space-y-2 mt-2 mb-2">
        <p className="text-primary font-semibold text-sm">{subTitle}</p>
        <p className="text-primaryDark font-semibold">{title}</p>
        <ul className="list-inside list-disc text-gray-600">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* <p className="text-sm text-gray-600">{des}</p> */}
        <Link className="bg-primary text-white py-2 px-4 rounded-lg block mt-2 w-fit" href={'/courses'}>
          Read More
        </Link>
      </div>
    </div>
  );
};

const CourseData = [
  {
    title: "Fundamentals of stock market",
    des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    subTitle: "# Master the Market",
    className: "animate-scale leafBox-1",
    image: FundamentalStockMarket,
    details: [
      "Stock Market Basics",
      "Fundamental Analysis",
      "Technical Analysis",
      "3-Strategies",
    ],
  },
  {
    title: "Options expertise",
    des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    subTitle: "# Unlock the Power of Options",
    className: "animate-scale leafBox-2",
    image: OptionsExpertise,
    details: [
      "How Options Work",
      "Option chain",
      "5-Strategies",
      "Risk Management",
    ],
  },
];
export default CoursesSection;
