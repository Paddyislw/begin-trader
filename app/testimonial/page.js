import PerformanceTable from "@/components/Testimonial/PerformanceTable";
import Heading from "@/global/Heading";
import Navbar from "@/global/Navbar";
import { layout } from "@/utils/Classnames";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <Navbar
        color="black"
        className={`${layout} pt-6 pb-4 bg-gray-100 shadow-lg border-b`}
        navType="navBtnGreen"
      />
      <div className="my-10">
        <p className="text-primary font-semibold text-4xl text-center mb-6 sm:text-3xl mb:text-2xl">Performance Table</p>
        <div className="justify-items-center flex  justify-center">
          <PerformanceTable />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
