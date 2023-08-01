"use client";
import Heading from "@/global/Heading";
import { layout } from "@/utils/Classnames";
import Image from "next/image";
import React from "react";
import testimonial from "../../mocks/testimonial.png";
import wapp1 from "../../mocks/wapp1.jpg";
import { useInView } from "react-intersection-observer";

const TestimonialSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      className={`flex justify-between items-center my-20 py-20 bg-primary sm:flex-col  ${layout}`}
      ref={ref}
    >
      <div className="w-[40%] space-y-6 xl:w-[50%] sm:w-full">
        <p
          className={`text-gray-300 font-bold text-xl mb:text-base ${
            inView ? "animate-pop-in-down leafBox-1" : "notVisible"
          }`}
        >
          Testimonial
        </p>
        <Heading
          text={`Manage Your Finances From one Place `}
          className={`${
            inView ? "animate-pop-in-down leafBox-2" : "notVisible"
          }`}
        />
        <p
          className={`text-gray-300 ${
            inView ? "animate-pop-in-down leafBox-3" : "notVisible"
          }`}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics
        </p>
        <p
          className={`text-gray-300  ${
            inView ? "animate-pop-in-down leafBox-4" : "notVisible"
          }`}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics
        </p>
        <button
          className={`text-gray-300 bg-primaryDark px-4 py-2 rounded-lg ${
            inView ? "animate-pop-in-down leafBox-4" : "notVisible"
          }`}
        >
          Testimonials
        </button>
      </div>
      <div className="flex">
        <Image
          src={testimonial}
          alt="Image by Freepik"
          className={`xl:w-[400px] h-[500px] lg:w-[350px] sm:w-[400px] mb:w-[360px] object-contain  ${inView ? "animate-scale isVisible " : "notVisible"}`}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
