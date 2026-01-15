"use client"
import React from "react";
import Question from "./atoms/Question";
import {motion} from "motion/react"
import { HiBuildingLibrary, HiAcademicCap, HiUserGroup } from "react-icons/hi2";
import { IconType } from "react-icons";

const data = {
  institutional: [
    {
      faq: "Is Northbridge Collegiate an authorized school?",
      ans: "Yes. Northbridge Collegiate is a private Canadian institution inspected and authorized by the Ontario Ministry of Education to administer secondary education leading to an official Ontario Secondary School Diploma (OSSD) and transcript.",
    },
    {
      faq: "How is Northbridge different from an education agent or tutoring center?",
      ans: "Unlike agents who only provide placement advice, Northbridge is an authorized academic institution that delivers the actual Canadian curriculum, conducts assessments, and issues official credits.",
    },
    {
      faq: "Is Northbridge only for international students?",
      ans: "No. Our programs are open to learners globally, offering flexible study options including fully online, in Canada, or through blended pathways.",
    },
  ],

  program : [
    {
      faq: "Will my child earn a recognized Canadian diploma?",
      ans: "Yes. All Grade 12 pathways at Northbridge lead to the Ontario Secondary School Diploma (OSSD), which is globally recognized for university admission.",
    },
    {
      faq: "What is the Grade 12 Advantage Year (AY12)?",
      ans: "AY12 is a premium program that runs concurrently with Grade 12. It combines standard OSSD credits with intensive university-readiness training.",
    },
    {
      faq: "Does AY12 replace the standard Grade 12?",
      ans: "No. Students complete all standard Grade 12 requirements to earn their OSSD as scheduled, but they receive additional preparation in university-level research and writing.",
    },
    {
      faq: "What is included in the Grade 12 tuition?",
      ans: "The program includes tuition, tutoring, immigration documentation guidance, university pathway planning, and application fees for the first five schools .",
    },
  ],

  academicQuestions: [
    {
      faq: "Why should my child start with the CAAP program?",
      ans: "Beginning with academic alignment ensures students enter Grade 12 appropriately placed and confident in Canadian expectations, which reduces academic stress and improves long-term outcomes.",
    },
    {
      faq: "Why is CAAP delivered online?",
      ans: "Online and blended learning are standard in Canadian higher education. Introducing this early in a supported environment ensures students are not overwhelmed by digital platforms when they reach university.",
    },
    {
      faq: "Is the online learning supervised?",
      ans: "Yes. Our online programs are structured, instructor-led, and closely monitored, following a defined schedule with live sessions and continuous feedback.",
    },
  ],

  parents: [
    {
      faq: "How do I track my child's progress?",
      ans: "Parents receive regular academic progress reports, attendance and engagement updates, and have direct lines of communication with the Northbridge academic team .",
    },
    {
      faq: "Is accommodation provided?",
      ans: "Northbridge focuses on academics and transition support. While accommodation is not included in the program fees, we do provide separate guidance for finding suitable housing",
    },
  ],
};

const Section = ({ title, icon: Icon, questions }: {title: string; icon: IconType, questions: {faq: string, ans: string}[]}) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-start gap-3">
     <Icon className="h-6 w-6 text-[#479DA5] mt-1" />
      <h3 className="text-lg font-semibold text-[#010A1D]">{title}</h3>
    </div>

    <div className="flex flex-col gap-2">
      {questions.map((q) => (
        <Question key={q.faq} question={q.faq} ans={q.ans} />
      ))}
    </div>
  </motion.div>
);

export default function FaqInstitutional() {
  return (
    <section className="bg-gray-50 py-24 px-[5%]">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        <Section
          title="Institutional Status & Legitimacy"
          icon={HiBuildingLibrary}
          questions={data.institutional}
        />
        <Section
          title="Program Mechanics (Grade 12 & AY12)"
          icon={HiAcademicCap}
          questions={data.program}
        />
        <Section
          title="Information for Parents"
          icon={HiUserGroup}
          questions={data.parents}
        />
      </div>
    </section>
  );
}
