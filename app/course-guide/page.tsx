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
import Wrapper from "../components/flipbook/Wrapper";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
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
    <CoverPage image="bg-[url('/asset/pex.jpg')]" key={7}>
      <div className="relative text-2xl p-8 md:p-15 h-full flex items-center justify-center text-center text-white z-10">
        <p>
          <span className="font-bold text-[#479DA5] ">AY12</span> <br /> The
          Grade 12 <br />
          Advantage Year Program.
        </p>
      </div>
    </CoverPage>,
    <Wrapper key={9}>
      <p>
        When delivered in our Ontario, Canada headquaters, the program focuses
        on academic maturity, intellectual confidence, and responsible
        self-management. AY12 operates as a an enrichment experience designed to
        prepare students for the academic, intellectual, and personal demands of
        university study and does not confer secondary school credits
      </p>
      <div>
        <p className="text-[#479DA5] mb-2 md:mb-4">Purpose of AY12</p>
        <p>
          AY12 prepares students for successful entry into university by
          developing degree-level academic readiness and producing
          admissions-usable academic evidence. The program is designed to
          strengthen university applications while equipping students with the
          skills and systems required for sustained success beyond admission.
        </p>
      </div>
    </Wrapper>,
    <Wrapper key={10}>
      <p className="text-[#479DA5] mb-2 md:mb-4">Key Outcomes of AY12</p>
      <p>
        Upon completion, students graduate with a portfolio of verified academic
        outputs, which may include:
      </p>
      <div className="flex flex-col gap-2">
        {[
          "University-standard academic writing samples",
          "Instructor evaluation and reference (where appropriate)",
          "A completed capstone project",
          "A formal academic readiness report",
          "Refined university application materials",
        ].map((outcome) => (
          <div
            key={outcome}
            className="w-full bg-[#479DA5]/80 text-slate-100 p-4 md:p-5 rounded-xl"
          >
            {outcome}
          </div>
        ))}
      </div>
      <p>
        These outputs are designed to be directly usable within university
        admissions and evaluation processes.
      </p>
    </Wrapper>,

    <Wrapper key={11}>
      <p className="text-[#479DA5] mb-2 md:mb-4">Program Framework</p>
      <p>
        AY12 is structured around three core pillars valued by universities and
        families:
      </p>
      <div className="flex flex-col gap-2">
        {[
          {
            title: "Orientation",
            details:
              " Developing how students think, reason, and engage as they enter a new academic phase",
          },
          {
            title: "Academic Maturity",
            details:
              "Strengthening learning strategies, research skills, assessment literacy, and academic performance",
          },
          {
            title: "Personal Formation",
            details:
              "Building responsibility, independence, and effective self-management in institutional and real-world environments",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="w-full bg-[#479DA5]/80 text-slate-100 p-4 md:p-5 rounded-xl"
          >
            <p className="text-white mb-1">{c.title}</p>
            <p>{c.details}</p>
          </div>
        ))}
      </div>
    </Wrapper>,

    <Wrapper key={12}>
      <p className="text-[#479DA5] mb-2 md:mb-4">Core Program Components</p>
      <p>
        AY12 integrates academic readiness with structured formation beyond the
        classroom, including:
      </p>

      <div className="flex flex-col gap-2">
        {[
          "Academic writing, research, and critical thinking",
          "Critical thinking, argument building & presentation skills",
          "Purpose, career, and pathway exploration",
          "Leadership, ethics, and civic responsibility",
          "Global competence and cultural awareness",
          "Personal responsibility, life skills, and independent living readiness",
        ].map((r) => (
          <div key={r} className="flex items-center gap-2">
            <p className="text-[#479DA5]">
              <IoCheckmarkDoneOutline />
            </p>
            <p>{r}</p>
          </div>
        ))}
      </div>

      <p>
        The program culminates in a capstone project and a final academic
        readiness assessment.
      </p>
    </Wrapper>,

    <Wrapper key={13}>
      <p className="text-[#479DA5] mb-2 md:mb-4">Who AY12 Is For</p>
      <p>
        AY12 is designed for students preparing to transition into university
        study in Canada or internationally who wish to strengthen readiness,
        maturity, and positioning beyond minimum admission requirements.
      </p>
      <p>
        AY12 is not a credential and does not replace formal Grade 12
        qualifications.
      </p>
    </Wrapper>,
  ];
  return (
    <div>
      <NorthbridgeAcademicNav />
      <LeafletFlip pages={pages} />
      <Footer />
    </div>
  );
}
