import React from "react";
import { Metadata } from "next";
import ProgramOverview from "./components/ProgramOverview";
import Footer from "../components/Footer";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";
export const metadata: Metadata = {
  title: "Which Program Is Right for My Child? | Northbridge Pathways",

  description:
    "Compare CAAP, Grade 11, Grade 12, and AY12 to determine the most appropriate Canadian education pathway for your child's educational goals.",

  alternates: {
    canonical: "https://northbridgec.ac/right-program",
  },
};
export default function SelectingPrograms() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Which Program
            <br />
          </>
        }
        typewrite="Is Right for You?"
        transparent
        description={
          <p>
            We have four major programs you can select from. Carefully look at
            the benefits and purpose of each program.
          </p>
        }
        image="bg-[url('/asset/guiding.jpg')] scale-x-[-1]"
      />
      <ProgramOverview />
      <Footer />
    </div>
  );
}
