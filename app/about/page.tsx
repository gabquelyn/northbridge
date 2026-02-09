import React from "react";
import School from "./components/School";
import Vision from "./components/Vision";
import Footer from "../components/Footer";
import FounderMessage from "./components/FounderMessage";
import { Metadata } from "next";
import StickyHero from "../components/atoms/StickyHero";
import NorthbridgeAcademicNav from "../components/StickyNav";
export const metadata: Metadata = {
  title: "About Northbridge Collegiate | A Canadian University-Prep Institution in Lagos, Nigeria",

  description:
    "Learn about Northbridge Collegiate's mission, values, and senior-secondary focus preparing students for Canadian education and long-term university success.",

  alternates: {
    canonical: "https://northbridgec.ca/about",
  },


};

export default function About() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Get to <br />
          </>
        }
        typewrite="Know us more"
        description={
          <p>
            Northbridge Collegiate is a Canadian University Prep Institution
            designed to prepare students for successful entry into, and
            performance within, Canadian universities and beyond.
          </p>
        }
        transparent
        image="bg-[url('/asset/student.jpg')] scale-x-[-1]"
      />
      <School />
      <div className="bg-[url('/asset/graduads.jpg')] bg-no-repeat bg-cover bg-center py-19 p-8 text-white  text-center relative">
        <div className="absolute bg-[rgba(0,0,0,0.55)] inset-0"></div>
        <div className="relative flex flex-col items-center justify-center min-h-100 z-10">
          <div className="max-w-200">
            <p className="title">
              A <span className="text-[#479DA5]">Canadian University</span> Prep
              Model
            </p>
            <p>
              Northbridge Collegiate is a private Canadian educational
              institution inspected and authorized by the Ontario Ministry of
              Education to deliver Ontario Secondary School Diploma (OSSD)
              programs in accordance with provincial requirements.
            </p>
            <p>
              As a Canadian University Preparation institution, we offer
              secondary-level academic programs through both online and in-class
              delivery. Our Canadian University Prep model is designed to
              prepare students for successful entry into Canadian universities.
            </p>
          </div>
        </div>
      </div>
      <Vision />
      <FounderMessage />
      <Footer />
    </div>
  );
}
