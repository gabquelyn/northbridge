import React from "react";
import Ossd from "./components/Explanation";
import Footer from "../components/Footer";
import { Metadata } from "next";
import StickyHero from "../components/atoms/StickyHero";
import NorthbridgeAcademicNav from "../components/StickyNav";
export const metadata: Metadata = {
  title:
    "Grade 12 OSSD | Best High School in Nigeria for Canadian University Placement",

  description:
    "A Grade 12 Canadian high school program at one of Nigeria's best secondary schools for university placement, a leading Secondary School in Lagos delivering the Ontario Curriculum and OSSD pathway. Focused on academic depth and readiness for Canadian and international university admission.",

  alternates: {
    canonical: "https://northbridgec.ac/grade12",
  },
};

export default function Grade12() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Secure Your Global Credential. <br />
          </>
        }
        typewrite="Fulfill Your Potential."
        image="bg-[url('/asset/girl.jpg')]"
        description={
          <p>
            At Northbridge, Grade 12 represents the "Complete" phase of the
            Ontario OSSD program.
          </p>
        }
        transparent
      />
      <Ossd />

      <Footer />
    </div>
  );
}
