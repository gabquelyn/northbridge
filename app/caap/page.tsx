import React from "react";
import Hero from "../components/atoms/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Metadata } from "next";
import AcademicExpectations from "./components/Expectiations";
import CAAPResidencyNotice from "./components/CAAPResidencyNotice";
import CAAPClosingSummary from "./components/Summary";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";

export const metadata: Metadata = {
  title:
    "CAAP Program | Canadian Education Foundation Program for Nigerian Students",
  description:
    "The CAAP program provides academic foundational entry pathway for students transitioning from non-Ontario systems.",

  alternates: {
    canonical: "https://northbridgec.ca/caap",
  },
};

export default function CAAP() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Align. Advance.
            <br />
          </>
        }
        typewrite="Complete."
        description={
          <p>
            CAAP is a structured academic transition program designed for
            students who have completed secondary education and are preparing
            for the academic expectations of Canadian universities.
          </p>
        }
        image="bg-[url('/asset/toronto.jpg')]"
      />

      <AcademicExpectations />
      <CAAPClosingSummary />
      <CAAPResidencyNotice />
      <Footer />
    </div>
  );
}
