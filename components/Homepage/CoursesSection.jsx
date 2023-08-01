"use client";
import Heading from "@/global/Heading";
import Subheading from "@/global/Subheading";
import React from "react";
import course from "../../mocks/course.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

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

const CourseCard = ({ title, des, subTitle, image, className, inView }) => {
  return (
    <div
      className={`w-[320px] border rounded-lg shadow-xl sm:w-[280px] mb:w-[320px] ${
        inView ? className : "notVisible"
      }`}
    >
      <Image src={image} />
      <div className="p-3 space-y-2 mt-2 mb-2">
        <p className="text-primary font-semibold text-sm">{subTitle}</p>
        <p className="text-primaryDark font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{des}</p>
        <button className="bg-primary text-white py-2 px-4 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

const CourseData = [
  {
    title: "Fundamentals of stock market",
    des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    subTitle: "January 01, 2021",
    className: "animate-scale leafBox-1",
    image: course,
  },
  {
    title: "Options expertise",
    des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    subTitle: "January 01, 2021",
    className: "animate-scale leafBox-2",
    image: course,
  },
];
export default CoursesSection;
