import React from "react";
import Hero from "../components/atoms/Hero";
import Navigation from "../components/Navigation";
import Purpose from "./components/Purpose";
import Standard from "./components/Standard";
import Graduands from "../caap/components/Graduands";
import AdmissionRequirements from "./components/AdmissionRequirements";
import Footer from "../components/Footer";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grade 11 Ontario Curriculum | Canadian High School in Lagos, Nigeria",

  description:
    "A Grade 11 Canadian high school program in Lagos, Nigeria that builds academic foundations, critical thinking, and readiness for Grade 12 and university study.",

  alternates: {
    canonical: "https://northbridgec.ac/grade11",
  },
};

export default function Grade11Page() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Grade 11 OSSD:
            <br />
          </>
        }
        typewrite="Building the Foundation."
        description={
          <p>
            The Grade 11 program offers students access to a structured
            selection of Ontario Secondary School Diploma (OSSD) courses
            delivered through in-class instruction.
          </p>
        }
        image="bg-[url('/asset/meeting.jpg')] scale-x-[-1]"
      />
      <Purpose />
      <Standard />
      <Graduands />
      <AdmissionRequirements />
      <Footer />
    </div>
  );
}
