"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
export default function Ossd() {
  const details = [
    {
      title: "Ministry Aligned",
      details:
        "Our curriculum strictly adheres to Ontario Ministry of Education requirements, ensuring that every credit earned is valid and verifiable.",
    },
    {
      title: "Structural Fulfillment",
      details:
        "This program ensures you meet the exact credit requirements and instructional hours needed to graduate with a standard Canadian high school diploma.",
    },
    {
      title: "Uncompromising Standards",
      details:
        "Whether delivered in-person or through our cross-border model, the integrity of the OSSD remains intact.",
    },
  ];

  return (
    <div>
      <div className="py-20 bg-white flex flex-col text-center items-center justify-center gap-4 px-[5%] md:px-[25%]">
        <div className="w-90 mb-4 h-2 bg-gray-100"></div>
        <p>
          <span className="font-bold">Grade 12 OSSD</span> is the bridge that
          transforms your previous international studies into a globally
          recognized Canadian secondary credential.
        </p>
        <p>
          This program is designed for students who have successfully finished
          Grade 11 (or equivalent) and are ready to finalize their high school
          journey under the rigorous standards of the Ontario Ministry of
          Education.
        </p>
      </div>

      <div className="bg-[#293B59] flex flex-col items-center gap-4 text-center text-white py-20 p-5">
        <p className="text-[2.5rem] font-bold text-center  capitalize">
          Diploma Integrity &<br />
          <span className="text-[#479DA5]">Global Recognition.</span>
        </p>
        <p>
          The Ontario Secondary School Diploma (OSSD) is one of the most
          respected
          <br /> secondary school credentials in the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4 px-[5%] md:px-[15%]">
          {details.map((de) => (
            <div
              key={de.title}
              className="bg-[#010A1D] w-75 gap-10 rounded-lg p-9 flex flex-col  items-center text-center"
            >
              <p>{de.title}</p>
              <p>{de.details}</p>
            </div>
          ))}
          <motion.div
            className="relative w-70 rounded-lg overflow-hidden"
            animate={{
              y: [0, -12, 0, 8, 0],
              x: [0, 6, 0, -6, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src="/asset/figure.jpg"
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
