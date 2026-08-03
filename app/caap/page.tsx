import React from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";
import AcademicExpectations from "./components/Expectiations";
import CAAPResidencyNotice from "./components/CAAPResidencyNotice";
import CAAPClosingSummary from "./components/Summary";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";

export const metadata: Metadata = {
  title:
    "CAAP Program | Canadian Education Foundation Pathway & Alternative to WAEC for Nigerian Students",
  description:
    "The CAAP program provides an academic foundational entry pathway for students transitioning from non-Ontario systems — a leading alternative to WAEC for students pursuing Canadian university routes from Lagos.",

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
            The Canadian Academic Advancement Program (CAAP) is Northbridge
            Collegiate&apos;s signature pre-university pathway for students preparing
            to study in Canada. Here, we bridge system gaps and build the
            required academic expectations of Canadian universities
          </p>
        }
        image="bg-[url('/asset/toronto.jpg')]"
      />

      <AcademicExpectations />
      <CAAPClosingSummary />
      {/* <CAAPResidencyNotice /> */}
      <Footer />
    </div>
  );
}
