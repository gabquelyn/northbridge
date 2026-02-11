import React from "react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import CoverPage from "../components/flipbook/CoverPage";
import Introduction from "../components/flipbook/Introduction";
import Image from "next/image";
import { grade11courses } from "../components/flipbook/grade11";
import { electivecourses } from "../components/flipbook/elective";
import { grade12courses } from "../components/flipbook/grade12";
import Course from "../components/flipbook/Course";
import RecommendationTable from "../components/flipbook/RecommendationTable";
import LeafletFlip from "../components/FlipBook";
import Footer from "../components/Footer";
export default function CourseGuide() {
  const pages = [
    // <div className="bg-white h-full w-full" />,
    <CoverPage image="bg-[url('/asset/building.jpg')]" key={1}>
      <div className="relative flex flex-col items-center justify-between  h-full py-[24%]  z-10">
        <div className="w-15 md:w-20 h-15 md:h-20 p-1 rounded-full bg-white shadow-lg">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/asset/logo2.png"
              fill
              className="object-contain"
              alt="Northbridge Logo"
            />
          </div>
        </div>

        <div className="text-white md:text-2xl flex flex-col items-center">
          <p>Northbridge Collegiate</p>
          <p className="text-[#479DA5]">Grade 11-12 Course Guide</p>
        </div>
      </div>
    </CoverPage>,
    <Introduction key={2} />,
    <CoverPage image="bg-[url('/asset/grade-cover.jpg')]" key={3}>
      <div className="relative p-8 md:p-15  z-10">
        <p className="md:text-xl text-[#479DA5] font-bold">GRADE 11 PROGRAM</p>
        <ul className="text-white flex flex-col gap-2 capitalize list-outside list-disc  mt-5">
          {[
            "English (ENG3U)",
            "Mathematics — Functions & Data Management (MCR3U / MDM4U)",
            "Biology (SBI3U)",
            "Chemistry (SCH3U)",
            "Physics (SPH3U)",
            "Computer Science (ICS3U)",
            "Business Studies(BOH4M / BAF3M)",
            "Social Sciences & Humanities (HSP3U, HSB4U)",
            "Specialized Senior Electives",
          ].map((course) => (
            <li key={course} className="">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </CoverPage>,
    ...grade11courses.map((details) => (
      <Course {...details} accent="GRADE 11" key={details.title} />
    )),
    <CoverPage image="bg-[url('/asset/pillar.jpg')]" key={4}>
      <div className="relative p-8 md:p-15  z-10">
        <p className="md:text-xl text-[#f4bd30] font-bold">GRADE 12 PROGRAM</p>
        <ul className="text-white flex flex-col gap-2 capitalize list-outside list-disc  mt-5">
          {[
            "English (ENG4U)",
            "MATHEMATICS — Advanced Functions & Calculus (MHF4U, MCV4U)",
            "BIOLOGY (SBI4U)",
            "Chemistry (SCH4U)",
            "Physics (SPH4U)",
            "Computer Science (ICS4U)",
            "Specialized Senior Electives",
          ].map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </CoverPage>,
    ...grade12courses.map((details) => (
      <Course {...details} accent="GRADE 12" key={details.title} />
    )),
    <CoverPage image="bg-[url('/asset/diss.jpg')]" key={5}>
      <div className="relative p-8 md:p-15  z-10">
        <p className="md:text-xl text-[#D96C2C] font-bold">
          SPECIALIZED SENIOR ELECTIVES
        </p>
        <ul className="text-white flex flex-col gap-2 capitalize list-outside list-disc  mt-5">
          {[
            "THE WRITER'S CRAFT (ENG4U / elective specialization)",
            "KIN 4U — Kinesiology & Human Performance",
            "BUSINESS LEADERSHIP & ACCOUNTING",
          ].map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </CoverPage>,
    ...electivecourses.map((details) => (
      <Course {...details} accent="ELECTIVE" key={details.title} />
    )),

    <RecommendationTable key={6} />,
  ];
  return (
    <div>
      <NorthbridgeAcademicNav />
      <LeafletFlip pages={pages} />
      <Footer />
    </div>
  );
}
