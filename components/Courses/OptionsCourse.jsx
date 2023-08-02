import Subheading from "@/global/Subheading";
import { layout } from "@/utils/Classnames";
import OptionsExpertise from "../../utils/images/optionsExpertise.png";
import React from "react";
import Image from "next/image";
import check from "../../utils/svg/check.svg";
import Heading from "@/global/Heading";

const OptionsCourse = () => {
  return (
    <div className={`${layout}`} >
      <p className="text-primary font-bold text-2xl md:text-center hidden md:block mt-4">
        Options Expertise
      </p>
      <div className={`my-10 md:items-center flex justify-between space-x-10 md:flex-col-reverse md:space-x-0 md:my-2`}>
        <div className="md:mt-4">
          <p className="text-primary font-bold text-2xl mb:text-base md:hidden">
            Options Expertise
          </p>
          <p className="text-gray-600 mt-2 md:text-center md:text-sm">
            Welcome to "Options Expertise" at Begin Trader! Options trading can
            be a highly lucrative strategy, but it requires specialized
            knowledge and risk management techniques. Our course will empower
            you with the skills to make the most of options trading
            opportunities and manage risk effectively.
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
          <BuyCard image={OptionsExpertise} />
        </div>
      </div>
    </div>
  );
};

const highlightsData = [
  {
    Heading: "How Options Work:",
    details: [
      "Demystify the world of options and understand their mechanics.",
      "Learn the differences between call and put options and how they can be used.",
    ],
  },
  {
    Heading: "Option Chain:",
    details: [
      "Navigate the option chain like a pro to identify potential trading opportunities.",
      "Analyze open interest, volume, and implied volatility to make informed decisions.",
    ],
  },
  {
    Heading: "5-Strategies:",
    details: [
      "Master five proven options trading strategies to maximize your returns.",
      "Understand the nuances of each strategy and their risk-reward profiles.",
    ],
  },
  {
    Heading: "Risk Management:",
    details: [
      "Learn crucial risk management techniques to protect your capital.",
      "Develop strategies to limit losses and preserve gains during market volatility.",
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
  "How Options Work",
  "Option chain",
  "5-Strategies",
  "Trading Psychology",
  "Risk Management",
];

export default OptionsCourse;
