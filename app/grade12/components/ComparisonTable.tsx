"use client";
import React from "react";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
export default function ComparisonTable() {
  const rows: React.ReactNode[][] = [
    [
      "OSSD awarded in Canada",
      <p className="flex items-center justify-center">
        <FaCheck className="text-[#F9CA52]" />
      </p>,
      <p className="flex items-center justify-center">
        <FaCheck className="text-[#F9CA52]" />
      </p>,
    ],
    [
      "University eligibility",
      <p className="flex items-center justify-center">
        <FaCheck className="text-[#F9CA52]" />
      </p>,
      <p className="flex items-center justify-center">
        <FaCheck className="text-[#F9CA52]" />
      </p>,
    ],
    ["Academic writing", "Limited", "Intensive"],
    ["Research & referencing", "Minial", "Structure"],
    [
      "University-style assessment",
      <p className="flex items-center justify-center">
        <FaTimes className="text-[#F9CA52]" />
      </p>,
      <p className="flex items-center justify-center">
        <FaCheck className="text-[#F9CA52]" />
      </p>,
    ],
    ["Transition Support", "Basic", "Comprehensive"],
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 pb-30">
      <p className="title capitalize text-center">
        <span className="text-[#479DA5]">AY12 vs Standard Grade 12</span>
        <br />
        Choosing Your Pace
      </p>

      <div className="px-[5%] flex justify-center items-center md:px-[15%] mt-3 w-full">
        <motion.table
          className="w-full border-collapse overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <thead>
            <tr>
              <th className="p-12 font-semibold text-left">Area</th>
              <th className="p-12 font-semibold bg-[#293B59] text-[#479DA5] border-r border-[#32425e]">
                AY 12
              </th>
              <th className="p-12 font-semibold bg-[#293B59] text-[#479DA5]">
                Grade 12
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <td className="p-4 font-medium text-left">{row[0]}</td>
                <td className="p-4 bg-[#293B59] border-r border-b text-center border-t border-[#32425e] text-white">
                  {row[1]}
                </td>
                <td className="p-4 bg-[#293B59] border-r text-center border-b border-t border-[#32425e] text-white">{row[2]}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}
