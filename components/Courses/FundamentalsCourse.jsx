import Subheading from "@/global/Subheading";
import { layout } from "@/utils/Classnames";
import FundamentalStockMarket from "../../utils/images/fundamentalsStockMarket.png";
import React from "react";
import Image from "next/image";
import check from "../../utils/svg/check.svg";
import Heading from "@/global/Heading";

const FundamentalsCourse = () => {
  return (
    <div className={layout}>
      <p className="text-primary font-bold text-2xl md:text-center hidden md:block mt-4">
        Fundamentals of Stock Market
      </p>
      <div
        className={`my-10  md:items-center flex justify-between space-x-10 md:flex-col-reverse md:space-x-0 md:my-2`}
      >
        <div className="md:mt-4">
          <p className="text-primary font-bold text-2xl mb:text-base md:hidden">
            Fundamentals of Stock Market
          </p>
          <p className="text-gray-600 mt-2 md:text-center md:text-sm">
            Welcome to "Fundamentals of Stock Market" at Begin Trader! Our
            comprehensive course is designed to equip you with essential
            knowledge and skills to navigate the exciting world of the stock
            market. Whether you're a beginner or looking to enhance your trading
            expertise, this course has something to offer for everyone.
          </p>
          <div className="mt-6">
            <p className="text-xl font-semibold text-primaryDark">
              Highlights:
            </p>
            <div className="space-y-4 mt-2">
              {highlightsData.map((item, index) => (
                <div key={index}>
                  <p className=" text-primary">{item.Heading}</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {item.details.map((i, ind) => (
                      <li key={ind}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <BuyCard image={FundamentalStockMarket} />
        </div>
      </div>
    </div>
  );
};

const highlightsData = [
  {
    Heading: "Stock Market Basics:",
    details: [
      "Gain a solid understanding of how the stock market operates.",
      "Learn about different asset classes, market participants, and trading hours.",
    ],
  },
  {
    Heading: "Fundamental Analysis:",
    details: [
      "Master the art of fundamental analysis to evaluate the intrinsic value of a stock.",
      "Explore financial statements, company performance, and industry trends.",
    ],
  },
  {
    Heading: "Technical Analysis:",
    details: [
      "Uncover the power of technical analysis in predicting price movements.",
      "Learn to read charts, identify trends, and use technical indicators effectively.",
    ],
  },
  {
    Heading: "3-Strategies:",
    details: [
      "Dive into three powerful trading strategies used by seasoned professionals.",
      "Understand how to implement these strategies in different market conditions.",
    ],
  },
];

const BuyCard = ({ image }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg space-y-2 border w-[350px] mb:w-[330px]">
      <Image src={image} className="w-[350px] mb:w-[330px]" />
      <p className="text-lg font-semibold text-primary">₹ 1200</p>
      <button className="w-full bg-primary py-2 text-white rounded-lg">
        Buy Now
      </button>
      <div className="px-1 py-2">
        {CardDetails.map((item, index) => (
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

const CardDetails = [
  "Stock Market Basics",
  "Fundamental Analysis",
  "Technical Analysis",
  "Trading Psychology",
  "3-Strategies",
];

export default FundamentalsCourse;
