"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";
import { GrLineChart } from "react-icons/gr";

export default function ClearRoute() {
  return (
    <div className="py-20 flex flex-col gap-8 items-center justify-center text-center px-[5%] xl:px-[20%]">
      <div>
        <p className="title capitalize">
          One Clear <span className="text-[#479DA5]">Route.</span>
        </p>
        <p>
          The Northbridge Academic Pathway simplifies the journey to university
          <br className="hidden md:block" />
          success into four powerful stages:
        </p>
      </div>

      <div className="bg-[#479DA526] p-10 rounded-lg gap-15 flex flex-col md:flex-row items-center">
        <Image src="/asset/frame1.png" alt="" height={400} width={400} />
        <div className="text-left flex flex-col items-center md:items-start gap-5">
          <p className="text-[#479DA5] font-bold ">ALIGN (CAAP)</p>
          <p className="text-center md:text-left">
            Your journey begins with the Canadian Academic Alignment Program.
            Here, we bridge system gaps and build the foundational academic
            literacy required for the Canadian classroom.
          </p>
          <div>
            <Link href="/caap">
              <motion.div
                className="border-2 text-[#479DA5] border-[#479DA5] rounded-3xl flex items-center gap-3 w-fit p-2 px-6"
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <div className="flex">
                  <FaGreaterThan />
                  <FaGreaterThan />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#293B5926] shadow p-10 rounded-lg gap-15 flex flex-col md:flex-row items-center">
        <div className="text-left flex flex-col items-center md:items-start gap-5">
          <p className="text-[#293B59] font-bold">GRADE 11 (OSSD)</p>
          <p className="text-center md:text-left">
            Ontario Grade 11 at Northbridge Collegiate offers Ontario
            curriculum-aligned instruction that builds the academic foundation,
            critical thinking, and independent learning skills required for the
            demands of Grade 12
          </p>
          <div>
            <Link href="/grade11">
              <motion.div
                className="border-2 text-[#293B59] border-[#293B59] rounded-3xl flex items-center gap-3 w-fit p-2 px-6"
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <div className="flex">
                  <FaGreaterThan />
                  <FaGreaterThan />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        <Image src="/asset/frame3.png" alt="" height={400} width={400} />
      </div>

      <div className="bg-[#F9CA5226] p-10 rounded-lg gap-15 flex flex-col md:flex-row items-center">
        <div className="text-left flex flex-col items-center md:items-start gap-5">
          <p className="text-[#F9CA52] font-bold">COMPLETE (OSSD)</p>
          <p className="text-center md:text-left">
            Next, you fulfill your Ontario Secondary School Diploma
            requirements. Our Ministry-aligned curriculum ensures your credits
            are globally recognized and academically rigorous.
          </p>
          <div>
            <Link href="/grade12">
              <motion.div
                className="border-2 text-[#F9CA52] border-[#F9CA52] rounded-3xl flex items-center gap-3 w-fit p-2 px-6"
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <div className="flex">
                  <FaGreaterThan />
                  <FaGreaterThan />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
        <Image src="/asset/frame2.png" alt="" height={400} width={400} />
      </div>

      <div className="bg-white p-10 shadow rounded-lg gap-15 flex flex-col md:flex-row items-center">
        <div className="relative mb-20 mr-13">
          <div className="absolute -right-15 top-20">
            <div className="relative z-20 rounded-3xl h-40 md:h-50 overflow-hidden w-40 md:w-50">
              <Image
                src="/asset/son.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-9xl bg-gray-100 p-10 md:p-14 pt-3 rounded-3xl">
            <GrLineChart />
          </div>
        </div>
        <div className="text-left flex flex-col items-center md:items-start gap-5">
          <p className="text-[#293B59] font-bold">ADVANCE (AY12)</p>
          <p className="text-center md:text-left">
            In the final stage, you enter the "Advantage Year." You master
            university-level writing, research, and critical thinking, entering
            your first year of university with a massive head start over your
            peers.
          </p>
          <div>
            <Link href="/ay12">
              <motion.div
                className="border-2 text-[#293B59] border-[#293B59] rounded-3xl flex items-center gap-3 w-fit p-2 px-6"
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <div className="flex">
                  <FaGreaterThan />
                  <FaGreaterThan />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
