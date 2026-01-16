"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
export default function AdmissionRequirements() {
  const details = [
    {
      title: "Who It's For",
      details:
        "Students who have successfully completed Grade 10 or a recognized international equivalent.",
    },
    {
      title: "Admissions Process",
      details:
        "Includes an academic review and readiness assessment to ensure proper course placement.",
    },
    {
      title: "Progression",
      details:
        "Successful completion grants eligibility for all Northbridge Grade 12 pathways.",
    },
  ];
  return (
    <section className="grid relative grid-cols-1 md:grid-cols-2 mx-5 lg:mx-[15%] py-20 pb-30 items-center gap-8">
      <div className="flex items-center md:items-start flex-col gap-2">
        <p className="text-[2rem] md:text-[2.5rem] font-bold capitalize">
          Admissions <span className="text-[#479DA5]"> & Eligibility</span>
        </p>
        <p className="text-center md:text-left max-w-100">
          To ensure academic success, applicants to our Grade 11 OSSD
          program must meet the following criteria:
        </p>
        <Link href="/consultation">
          <motion.button whileHover={{ scale: "1.05" }}>
            Book a consultation
          </motion.button>
        </Link>
      </div>
      <div>
        <div className="rounded-2xl bg-[#F9CA52] p-6 flex flex-col gap-5">
          {details.map((d, i) => (
            <div>
              <p className="text-[#17757E] text-[1rem]">
                {`0${i + 1} `} {d.title}
              </p>
              <p>{d.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
