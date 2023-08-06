import FundamentalStockMarket from "../../utils/images/fundamentalsStockMarket.png";
import React from "react";
import CourseSection from "@/global/CourseSection";

const FundamentalsCourse = () => {
  return (
    <CourseSection
      heading={"Fundamentals of Stock Market"}
      description={
        " Welcome to 'Fundamentals of Stock Market' at Begin Trader! Our comprehensive course is designed to equip you with essential knowledge and skills to navigate the exciting world of the stock market. Whether you're a beginner or looking to enhance your trading expertise, this course has something to offer for everyone."
      }
      highlights={highlights}
      cardImage={FundamentalStockMarket}
      cardPoints={CardDetails}
    />
  );
};

const highlights = [
  "Gain a solid understanding of how the stock market operates.",
  "Learn about different asset classes, market participants, and trading hours.",
  "Master the art of fundamental analysis to evaluate the intrinsic value of a stock.",
  "Explore financial statements, company performance, and industry trends.",
  "Uncover the power of technical analysis in predicting price movements.",
  "Learn to read charts, identify trends, and use technical indicators effectively.",
  "Dive into three powerful trading strategies used by seasoned professionals.",
  "Understand how to implement these strategies in different market conditions.",
];

const CardDetails = [
  "Stock Market Basics",
  "Fundamental Analysis",
  "Technical Analysis",
  "Trading Psychology",
  "3-Strategies",
];

export default FundamentalsCourse;
