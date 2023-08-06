import { TableData, TableHeaders } from "@/utils/Constants";
import React from "react";

const PerformanceTable = () => {
  return (
    <div>
      <table className="table-auto w-full border-collapse border rounded-lg border-gray-300 ">
        <thead>
          <tr className="">
            {TableHeaders.map((item, index) => (
              <th
                key={item.value}
                className="border border-gray-300 px-4 py-3 text-left bg-gray-200 sm:px-2 mb:px-1 mb:text-sm"
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.map((item, index) => (
            <tr key={index} className="bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item["Company Name"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item["Strike price"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item["Entry"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item["Moved"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item["No of lots"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item["Number of shares per lot"]}
              </td>
              <td
                className={`sm:px-2 mb:text-sm mb:px-1 font-semibold border border-gray-300 px-4 py-2 ${
                  item["Moved"] - item["Entry"] > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item["Profit loss"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTable;
