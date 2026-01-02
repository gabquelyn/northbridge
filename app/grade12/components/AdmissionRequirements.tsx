"use client";
import React from "react";
import { motion } from "motion/react";
export default function AdmissionRequirements() {
  const details = [
    {
      title: "Academic Record",
      details: "Successful completion of Grade 11 or a recognized equivalent.",
    },
    {
      title: "Language Proficiency",
      details:
        "A formal English proficiency assessment to ensure classroom readiness.",
    },
    {
      title: "Admissions Interview",
      details:
        "A one-on-one academic readiness interview to align the student's goals with our curriculum.",
    },
  ];
  return (
    <div className="grid relative grid-cols-2 mx-[14%] my-20 items-center gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-[2.5rem] font-bold capitalize">
          Admissions <span className="text-[#479DA5]"> & Eligibility</span>
        </p>
        <p>
          To ensure academic success, applicants to our Grade 12 OSSD
          <br /> program must meet the following criteria:
        </p>
        <motion.div
          className={
            "bg-linear-0 w-fit from-[#479DA5] transition-all cursor-pointer text-white to-[#17757E] p-2 px-6 rounded-3xl"
          }
          whileHover={{ scale: "1.05" }}
        >
          Book a consultation
        </motion.div>
      </div>
      <div>
        <div className="rounded-2xl bg-[#F9CA52] p-6 flex flex-col gap-5">
          {details.map((d, i) => (
            <div>
              <p className="text-[#17757E]">
                {`0${i + 1} `} {d.title}
              </p>
              <p>{d.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
