"use client";
import { layout } from "@/utils/Classnames";
import React from "react";
import check from "../utils/svg/check.svg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CourseSection = ({
  heading,
  description,
  highlights,
  cardImage,
  cardType,
  cardPoints,
  cardPrice,
  cardTitle,
  type = "buy",
  price,
  link='#'
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className={layout} ref={ref}>
      <p
        className={`text-primary font-bold text-2xl mb:text-xl md:text-center md:block mt-4 ${
          inView ? "animate-pop-in-down leafBox-1" : "notVisible"
        }`}
      >
        {heading}
      </p>
      <div
        className={`md:items-center flex justify-between space-x-10 md:flex-col-reverse md:space-x-0 md:my-2`}
      >
        <div className="md:mt-4 w-full mt-3">
          <p
            className={`text-gray-600 mt-2 md:text-center md:text-sm mb-4 ${
              inView ? "animate-pop-in-down leafBox-2" : "notVisible"
            }`}
          >
            {description}
          </p>
          <div
            className={`border p-3 rounded-lg  shadow mt-10 ${
              inView ? "animate-pop-in-down leafBox-3" : "notVisible"
            }`}
          >
            <p className="text-xl font-semibold text-primaryDark">
              Highlights:
            </p>
            <div className="mt-2 space-y-3 text-gray-600">
              {highlights.map((item) => (
                <p>
                  <span className="text-primary">•</span> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <BuyCard
            image={cardImage}
            cardPoints={cardPoints}
            inView={inView}
            type={type}
            price={price}
            link={link}
          />
        </div>
      </div>
    </div>
  );
};

const BuyCard = ({ image, cardPoints, inView, type, price, link }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-lg space-y-2 border w-[350px] mb:w-full ${
        inView ? "animate-scale leafBox-4" : "notVisible"
      }`}
    >
      <Image src={image} className="w-[350px] mb:w-[330px]" />
      {type === "buy" && (
        <p className="text-lg font-semibold text-primary">₹ {price}</p>
      )}
      <a
        className="w-full bg-primary py-2 text-white rounded-lg block text-center cursor-pointer"
        href={link}
        target="_blank"
      >
        {type === "buy" ? "Buy Now" : "Join Now"}
      </a>
      <div className="px-1 py-2 space-y-1">
        {cardPoints.map((item, index) => (
          <div className="flex space-x-2 items-center text-[15px]" key={index}>
            <Image className="w-4" src={check} />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold text-center border-t border-primaryLight pt-2">
        Need Help ? <span className="text-primary">Contact Us</span>
      </p>
    </div>
  );
};

export default CourseSection;
