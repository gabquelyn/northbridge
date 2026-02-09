import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Explanation from "./components/Explanation";
import ComparisonTable from "../grade12/components/ComparisonTable";
import Graduands from "../caap/components/Graduands";
import Footer from "../components/Footer";
import { Metadata } from "next";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";

export const metadata: Metadata = {
  title:
    "AY12 Program | Canadian University Preparation Year in Lagos, Nigeria",

  description:
    "The AY12 is an enrichment program designed for Grade 12 students preparing for success in Canadian universities by placing strong emphasis on system awareness, academic strengthening and personal formation.",

  alternates: {
    canonical: "https://northbridgec.ca/ay12",
  },
};

export default function AY12() {
  return (
    <div>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            name: "Grade 12 Advantage Year (AY12)",
            description:
              "A structured Grade 12 pathway designed to prepare students for Canadian university success.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Northbridge Collegiate",
              url: "https://northbridgec.ac",
            },
            educationalCredentialAwarded: "University Preparation",
            timeToComplete: "P6M",
            url: "https://northbridgec.ac/caap",
          }),
        }}
      /> */}
      <NorthbridgeAcademicNav />
      <StickyHero
        image="bg-[url('/asset/graduate.jpg')]"
        text={
          <>
            Same Diploma. <br />
          </>
        }
        typewrite="Stronger Preparation."
        transparent
        description={
          <p>
            The Grade 12 Advantage Year (AY12) is our flagship academic
            experience. It is designed for the ambitious student who recognizes
            that getting into a Canadian university is only half the battle
          </p>
        }
      />
      <Explanation />
      <ComparisonTable />
      <Graduands />
      <Footer />
    </div>
  );
}
