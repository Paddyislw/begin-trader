"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const ExcelTable = ({data}) => {
console.log('data..........',data)
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
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
                {item?.["Minimum Profits"]}
              </td>
              <td className="border border-gray-300 px-4 py-2 sm:px-2 mb:text-sm mb:px-1">
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
      </table>
    </div>
  );
};

export const TableHeaders = [
  // { label: "S.no", value: "S.no" },
  { label: "Strike price", value: "Strike Price" },
  { label: "Entry", value: "Entry" },
  { label: "Moved", value: "Points Moved" },
  { label: "Points Booked", value: "Points Booked" },
  { label: "Shares per lot", value: "Shares per lot" },
  { label: "Minimum Profits", value: "Minimum Profits" },
  { label: "Maximum Profits", value: "Maximum Profits" },
];

export default ExcelTable;


