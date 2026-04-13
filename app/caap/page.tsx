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
            CAAP is a 10-12 week foundational program designed to align students
            with the Canadian academic system. It ensures a smooth, confident
            transition without loss of critical learning time and serves as the
            standard entry pathway for students joining Northbridge from
            non-Canadian systems
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
