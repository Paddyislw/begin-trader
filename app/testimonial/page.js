import PerformanceTable from "@/components/Testimonial/PerformanceTable";
import ExcelTable from "@/components/excelTable/ExcelTable";
import Heading from "@/global/Heading";
import Navbar from "@/global/Navbar";
import { layout } from "@/utils/Classnames";
import Image from "next/image";
import React from "react";
import data1 from "../../utils/Aug1To31Index.json";
import data2 from "../../utils/Aug1To31Option.json";

const Testimonial = () => {
  return (
    <div>
      <Navbar
        color="black"
        className={`${layout} pt-6 pb-4 bg-gray-100 shadow-lg border-b`}
        navType="navBtnGreen"
      />
      <div className="my-10">
        <p className="text-primary font-semibold text-4xl text-center mb-6 sm:text-3xl mb:text-2xl">
          Performance Table
        </p>
        <div className="justify-items-center flex  justify-center flex-col space-y-8 items-center">
          <PerformanceTable />
          <div className="px-1">
            <p className="mb-2 text-xl font-semibold text-center">
              Aug 1 to Aug 31 Premium index calls
            </p>
            <ExcelTable data={data1} TableHeaders={TableHeaders2} />
          </div>
          <div className="px-1">
            <p className="mb-2 text-xl font-semibold text-center">
              Aug 1 to Aug 31 Stock Options Premium Calls
            </p>
            <ExcelTable data={data2} TableHeaders={TableHeaders1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableHeaders1 = [
  { label: "Stock Name", value: "Stock Name" },
  { label: "Strike price", value: "Strike Price" },
  { label: "Entry", value: "Entry" },
  { label: "Moved", value: "Points Moved" },
  { label: "Points Booked", value: "Points Booked" },
  { label: "Shares per lot", value: "Shares per lot" },
  { label: "Minimum Profits", value: "Minimum Profits" },
  { label: "Maximum Profits", value: "Maximum Profits" },
];
export const TableHeaders2 = [
  { label: "Strike price", value: "Strike Price" },
  { label: "Entry", value: "Entry" },
  { label: "Moved", value: "Points Moved" },
  { label: "Points Booked", value: "Points Booked" },
  { label: "Shares per lot", value: "Shares per lot" },
  { label: "Minimum Profits", value: "Minimum Profits" },
  { label: "Maximum Profits", value: "Maximum Profits" },
];

export default Testimonial;
