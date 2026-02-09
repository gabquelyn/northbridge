import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Ossd from "./components/Explanation";
import Footer from "../components/Footer";
import { Metadata } from "next";
import StickyHero from "../components/atoms/StickyHero";
import NorthbridgeAcademicNav from "../components/StickyNav";
export const metadata: Metadata = {
  title: "Grade 12 OSSD Program | Canadian High School in Lagos, Nigeria",

  description:
    "A Grade 12 Canadian high school program in Lagos delivering Ontario-aligned coursework focused on academic depth, assessment readiness, and skills required for Canadian and international university admission.",

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
