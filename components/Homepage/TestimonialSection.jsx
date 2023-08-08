"use client";
import Heading from "@/global/Heading";
import { layout } from "@/utils/Classnames";
import Image from "next/image";
import React from "react";
import testimonial from "../../mocks/testimonial.png";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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
          text={`Discover Real Stories of Success`}
          className={`${
            inView ? "animate-pop-in-down leafBox-2" : "notVisible"
          }`}
        />
        <p
          className={`text-gray-300 ${
            inView ? "animate-pop-in-down leafBox-3" : "notVisible"
          }`}
        >
          ❝ I must commend your accuracy on expiry day! The stock touched 360
          and then surged to 400. Thanks to your guidance, I closed the trade
          with a 30-point target. Impressive! ❞
        </p>
        <p
          className={`text-gray-300  ${
            inView ? "animate-pop-in-down leafBox-4" : "notVisible"
          }`}
        >
          ❝ Your trading signals are spot on! I followed your advice on a
          volatile stock, and it hit the target price exactly as you predicted.
          I managed to book a 20% profit within a short timeframe. Thank you! ❞
        </p>
        <Link
          className={`text-gray-300 block w-fit bg-primaryDark px-4 py-2 rounded-lg ${
            inView ? "animate-pop-in-down leafBox-4" : "notVisible"
          }`}
          href={'/testimonial'}
        >
          Testimonials
        </Link>
      </div>
      <div className="flex">
        <Image
          src={testimonial}
          alt="Image by Freepik"
          className={`xl:w-[400px] h-[500px] lg:w-[350px] sm:w-[400px] mb:w-[360px] object-contain  ${
            inView ? "animate-scale isVisible " : "notVisible"
          }`}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
