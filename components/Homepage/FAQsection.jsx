"use client";
import Heading from "@/global/Heading";
import Subheading from "@/global/Subheading";
import { layout } from "@/utils/Classnames";
import Image from "next/image";
import React from "react";
import FAQ from "../../mocks/FAQ.png";
import { useInView } from "react-intersection-observer";

const FAQsection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className={`my-20 pt-8 ${layout}`} ref={ref}>
      <div className="space-y-3">
        <Subheading
          text={"Frequntly Asked Questions"}
          className={`text-center ${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          }`}
        />

        <p
          className={`text-4xl font-semibold text-primaryDark sm:text-3xl lg:text-4xl mb:text-2xl text-center ${
            inView ? "animate-pop-in-down leafBox-2" : "notVisible"
          }`}
        >
          If you have any queries related to our services,check FAQ section
        </p>
      </div>
      <div className="flex justify-center space-x-8 items-center sm:flex-col">
        <Testimonials inView={inView} />
        <Image
          src={FAQ}
          className={`w-[500px] xl:w-[450px] lg:w-[400px] mb:w-[360px] ${
            inView ? "animate-scale isVisible " : "notVisible"
          }`}
        />
      </div>
    </div>
  );
};

const Testimonials = ({ inView }) => {
  return (
    <div className="flex flex-col  w-[40%] lg:w-[50%] sm:w-full justify-center  mt-6 space-y-8">
      <FAQTab
        question={"What languages are the courses available in?"}
        answer={
          "The courses are available in both Tamil and English, catering to a wider audience."
        }
        leafBox={"1"}
        inView={inView}
      />
      <FAQTab
        question={"How are the classes conducted?"}
        answer={
          "All classes are held online via Zoom, providing a convenient and interactive learning experience."
        }
        leafBox={"2"}
        inView={inView}
      />
      <FAQTab
        question={"Are the sessions pre-recorded?"}
        answer={
          "No, all our classes are live and interactive. There are no pre-recorded sessions, ensuring real-time engagement with the instructors."
        }
        leafBox={"3"}
        inView={inView}
      />
    </div>
  );
};

const FAQTab = ({ question, answer, inView, leafBox }) => {
  return (
    <div
      className={`${
        inView ? `animate-pop-in-down leafBox-${leafBox}` : "notVisible"
      }`}
    >
      <p className="text-primaryDark text-lg font-semibold">{question}</p>
      <p className="text text-gray-600">{answer}</p>
    </div>
  );
};

export default FAQsection;
