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
        <Testimonials inView={inView}/>
        <Image src={FAQ} className={`w-[500px] xl:w-[450px] lg:w-[400px] mb:w-[360px] ${inView ? "animate-scale isVisible " : "notVisible"}`} />
      </div>
    </div>
  );
};

const Testimonials = ({inView}) => {
  return (
    <div className="flex flex-col items-center w-[40%] lg:w-[50%] sm:w-full justify-center  mt-6 space-y-8">
      <div className={`${
            inView ? "animate-pop-in-down leafBox-3" : "notVisible"
          }`}>
        <div className="flex justify-between">
          <p className="text-primaryDark text-lg font-semibold">
            How long will the training go on for ?
          </p>
        </div>
        <p className="text text-gray-600">
          6 Months. You will have 16 theory classes for Weekday Batch and 8
          theory classes for Weekend Batch. (It will be done in a period of 4-5
          weeks). Both batches will have same number of training hours. After
          you complete your theory classes, you will have doubt clearing
          sessions and also other special sessions regularly.
        </p>
      </div>
      <div className={`${
            inView ? "animate-pop-in-down leafBox-4" : "notVisible"
          }`}>
        <div className="flex justify-between">
          <p className="text-primaryDark text-lg font-semibold">
            How can I contact the company once I have paid the fees?
          </p>
        </div>
        <p className="text text-gray-600">
          Kindly send a screenshot of your payment confirmation & your email
          address & phone number used while making payment. A client manager
          will be assigned to help you in every aspect of you journey with us.
          You can also always call us on “84688-11500” & mail us at
          “support@kingresearch.co.in”
        </p>
      </div>
    </div>
  );
};
export default FAQsection;
