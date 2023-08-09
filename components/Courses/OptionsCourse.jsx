import OptionsExpertise from "../../utils/images/optionsExpertise.png";
import React from "react";
import CourseSection from "@/global/CourseSection";

const OptionsCourse = () => {
  return (
    <CourseSection
      heading={"Options Expertise"}
      description={
        "Welcome to 'Options Expertise' at Begin Trader! Options trading can be a highly lucrative strategy, but it requires specialized knowledge and risk management techniques. Our course will empower you with the skills to make the most of options trading opportunities and manage risk effectively."
      }
      highlights={highlights}
      cardImage={OptionsExpertise}
      cardPoints={CardDetails}
      link="https://cosmofeed.com/vp/64d3298dd21eda001ea9c5ba"
    />
  );
};

const highlights = [
  "Demystify the world of options and understand their mechanics.",
  "Learn the differences between call and put options and how they can be used.",
  "Navigate the option chain like a pro to identify potential trading opportunities.",
  "Analyze open interest, volume, and implied volatility to make informed decisions.",
  "Master five proven options trading strategies to maximize your returns.",
  "Understand the nuances of each strategy and their risk-reward profiles.",
  "Learn crucial risk management techniques to protect your capital.",
  "Develop strategies to limit losses and preserve gains during market volatility.",
];


const CardDetails = [
  "How Options Work",
  "Option chain",
  "5-Strategies",
  "Trading Psychology",
  "Risk Management",
];

export default OptionsCourse;
