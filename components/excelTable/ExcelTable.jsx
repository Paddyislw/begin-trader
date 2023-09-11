"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

const ExcelTable = ({ data, TableHeaders }) => {
  let maxProfits = data.reduce(
    (total, item) => total + item["Maximum Profits"],
    0
  );
  let minProfits = data.reduce(
    (total, item) => total + item["Minimum Profits"],
    0
  );
  console.log("data..........", data);
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
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-50 hover:bg-gray-100">
              {/* <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["S.no"]}
              </td> */}
              {item?.["Stock Name"] && (
                <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                  {item?.["Stock Name"]}
                </td>
              )}
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["Strike Price"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["Entry"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["Points Moved"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["Points Booked"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["Shares per lot"]}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1 ${
                  item?.["Minimum Profits"] > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item?.["Minimum Profits"]}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1 ${
                  item?.["Maximum Profits"] > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item?.["Maximum Profits"]?.toFixed(2)}
              </td>
              {/* <td
                className={`sm:px-2 mb:text-sm mb:px-1 font-semibold border border-gray-300 px-4 py-2 ${
                  item["Moved"] - item["Entry"] > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item["Profit loss"]}
              </td> */}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1 font-bold">
            Total
          </td>
          {Array(TableHeaders.length - 3)
            .fill(1)
            .map(() => (
              <td></td>
            ))}
          <td
            className={`font-bold border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1 ${
              minProfits > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {minProfits}
          </td>
          <td
           className={`font-bold border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1 ${
            maxProfits > 0 ? "text-green-500" : "text-red-500"
          }`}
          >
            {maxProfits}
          </td>
        </tfoot>
      </table>
    </div>
  );
};

export default ExcelTable;
