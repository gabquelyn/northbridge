"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function Ossd() {
  const content = [
    {
      track: "a",
      name: "OSSD Online",
      lists: [
        "Learners with equivalent grade 11 education.",
        "Globally accessible via online learning.",
        "Self-based - Teacher supported - Mentor feedback",
        "Academic upgrading.",
        "Academic continuity",
      ],
      icon: "/asset/icon1.png",
    },
    {
      track: "b",
      name: "OSSD Only",
      lists: [
        "Completion of the Ontario Secondary School Diploma (OSSD)",
        "Tutoring and structured academic oversight",
        "University and college pathway planning",
      ],
      icon: "/asset/icon2.png",
    },
    {
      track: "c",
      name: "Advantage Year (AY12)",
      lists: [
        "Grade 12 OSSD plus concurrent Foundation-level preparation",
        "University-level academic writing and research skills",
        "University and college pathway planning",
        "Supported applications to Canadian post-secondary institutions",
        "Ongoing guidance toward post-secondary success",
      ],
      icon: "/asset/icon3.png",
      caption: (
        <p>
          Why AY12 Matters? <br /> Our flagship Grade 12 Advantage Year (AY12)
          delivers structured university readiness concurrently with Grade 12,
          significantly improving post-secondary readiness.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <div className="py-20 flex flex-col text-center items-center justify-center gap-6 px-[5%] md:px-[20%]">
        <div className="w-20 h-1 bg-gray-200 mb-4 rounded-full"></div>
        <h2 className="title font-semibold text-gray-900">Grade 12 OSSD</h2>
        <p className="max-w-3xl text-gray-700">
          <span className="font-bold">Grade 12 OSSD</span> is the bridge that
          transforms your previous international studies into a globally
          recognized Canadian secondary credential.
          <br />
          This program is designed for students who have successfully finished
          Grade 11 (or equivalent) and are ready to finalize their high school
          journey under the rigorous standards of the Ontario Ministry of
          Education.
        </p>
      </div>

      {/* Tracks Section */}
      <div className="bg-[#479DA526] py-16 px-[5%] md:px-[10%]">
        <p className="text-center title font-semibold text-gray-900 mb-10">
          Students select from{" "}
          <span className="text-[#479DA5]">
            20+ Ontario <br /> Grade 12 courses
          </span>{" "}
          across three tracks
        </p>

        <div className="grid grid-cols-1  gap-8">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl max-w-150 shadow-lg p-8 flex flex-col items-start gap-4 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
            >
              {/* Icon */}
              <div>
                <div className="w-16 h-16 rounded-full bg-[#479DA5]/10 flex items-center justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Track Name */}
              <p className="text-xl font-semibold text-gray-900">
                <span className="capitalize">Track {item.track} :</span> <br />{" "}
                {item.name}
              </p>

              {/* List Items */}
              <ul className="mt-3 space-y-2 text-gray-700 list-none list-inside">
                {item.lists.map((listItem, i) => (
                  <li key={i} className="flex gap-2 items-start md:items-center">
                    <span className="text-[#479DA5]">
                      <IoMdCheckboxOutline />
                    </span>
                    {listItem}
                  </li>
                ))}
              </ul>

              {/* Optional Caption */}

              {item?.caption && (
                <div className="flex gap-3 items-start text-gray-500">
                  <div>
                    <BsInfoCircleFill />
                  </div>
                  {item.caption}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
