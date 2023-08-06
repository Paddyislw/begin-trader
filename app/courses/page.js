import FundamentalsCourse from "@/components/Courses/FundamentalsCourse";
import OptionsCourse from "@/components/Courses/OptionsCourse";
import Navbar from "@/global/Navbar";
import { layout } from "@/utils/Classnames";
import ServicesSection from '../../components/serviceSection/ServiceSection.jsx'
import React from "react";

const CoursePage = () => {
  return (
    <div>
      <Navbar
        color="black"
        className={`${layout} pt-6 pb-4 bg-gray-100 shadow-lg border-b`}
        navType="navBtnGreen"
      />
      <div className="space-y-20">
        <FundamentalsCourse />
        <OptionsCourse />
        <ServicesSection />
      </div>
    </div>
  );
};

export default CoursePage;
