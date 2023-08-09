import { layout } from "@/utils/Classnames";
import React from "react";
import telegram from "../../utils/images/telegram.jpg";
import Image from "next/image";
import check from "../../utils/svg/check.svg";
import CourseSection from "@/global/CourseSection";

const ServiceSection = () => {
  return (
    <>
      <CourseSection
        heading={"B_T Premium Group Pride"}
        description={"Join our exclusive B_T Premium Group Pride on Telegram and gain access to a range of premium features that are tailored to enhance your trading experience."}
        highlights={highlightsOfBasis}
        cardImage={telegram}
        cardPoints={CardDetailsPremium}
        type="join"
        link="https://cosmofeed.com/vig/64c8fca04a0312001fa7d2f7?referralCode=cAwQIa&source=whatsapp&referralType=affiliateReferral"
      />
      <CourseSection
        heading={"Begin_Trader Telegram Group"}
        description={"Join our vibrant and dynamic Begin_Trader Telegram Group and access a plethora of valuable trading resources and updates."}
        highlights={highlightsOfPremium}
        cardImage={telegram}
        cardPoints={CardDetails}
        type="join"
        link="https://cosmofeed.com/vig/64c8fca04a0312001fa7d2f7?referralCode=cAwQIa&source=whatsapp&referralType=affiliateReferral"
      />
    </>
  );
};

const highlightsOfBasis = [
  "Receive daily index option calls with the potential to yield 100++ points.",
  "Explore exciting opportunities in the market with our actionable insights.",
  "On expiry days, receive jackpot calls with the potential for substantial gains.",
  "Experience the thrill of trading on these special occasions with our expert calls.",
  "Stay informed and up-to-date with the latest market news and updates.",
  "Benefit from our in-depth analysis and perspectives on market trends.",
  "Count on our high-accuracy calls, boasting an impressive rate of 80% and above.",
  "Enhance your trading success with our well-researched recommendations.",
];
const highlightsOfPremium = [
  "Receive high-potential index options calls on a daily basis.",
  "Capitalize on the market movements with expert insights and recommendations.",
  "Short Term Stock Investment Calls (5% Above Returns):",
  "Get timely stock investment calls with the potential for 5% or more returns.",
  "Make informed decisions on short-term stock trades to boost your portfolio.",
  "Trust our reliable and accurate calls, with an impressive accuracy rate of 80% and above.",
  "Increase your chances of profitable trades with our well-researched recommendations.",
  "Rely on our comprehensive guidance for proper entry and exit points, stop loss, and target levels.",
];


const CardDetailsPremium = [
  "Daily 4-6 calls (Index Options)",
  "Short Term Stock Investment Calls (5% Above returns)",
  "Accuracy - 80% Above",
  "Proper Entry , Exit , Stoploss and Target",
  "Minimum Capital Required 10k-15k",
  // "Daily Earnings 1k-3k",
  // "Live Market Assistance",
];

const CardDetails = [
  "Daily 100++ points Index Option Call",
  "Expiry Day Jackpot Calls",
  "Market News and Updates",
  "Accuracy 80% Above",
  "All of these are Free at Our Telegram Channel",
];

export default ServiceSection;
