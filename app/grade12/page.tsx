import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Ossd from "./components/Explanation";
import Footer from "../components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grade 12 OSSD (Canada)",

  description:
    "Earn the Ontario Secondary School Diploma (OSSD) through Northbridge Collegiate's Canadian-aligned Grade 12 program for international students.",

  alternates: {
    canonical: "https://northbridgec.ac/grade12",
  },

  openGraph: {
    title: "Grade 12 OSSD (Canada)",
    description:
      "An Ontario curriculum-based Grade 12 program preparing students for admission into Canadian universities.",
    url: "https://northbridgec.ac/grade12",
  },
};

export default function Grade12() {
  return (
    <div>
      <Navigation />
      <Hero
        text={
          <>
            Secure Your Global Credential. <br />
          </>
        }
        typewrite="Fulfill Your Potential."
        image="bg-[url('/asset/girl.jpg')]"
        description={
          <p>
            At Northbridge Collegiate, our Grade 12 OSSD Program represents the
            "Complete" phase of our signature pathway.
          </p>
        }
        transparent
      />
      <Ossd />
      {/* <Slideshow /> */}
      {/* <AdmissionRequirements /> */}
      {/* <ComparisonTable /> */}
      {/* <Graduands /> */}
      <Footer />
    </div>
  );
}
