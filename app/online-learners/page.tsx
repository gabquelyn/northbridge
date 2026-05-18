import React from "react";
import OnlinePrograms from "./components/OnlinePrograms";
// import For from "./components/For";
import Learners from "./components/Learners";
import Pathway from "./components/Pathway";
import Footer from "../components/Footer";
import MatureLearnersForm from "./components/MatureLearnersForm";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Direct Entry Pathway | Post WAEC pathway to Canada & Canadian University Preparation",

  description:
    "A structured pre university academic pathway to Canada for post WAEC students transitioning to the Canadian system, focused on academic alignment, readiness, and confidence — one of Lagos's most direct alternatives to A Levels, WAEC and JAMB.",

  alternates: {
    canonical: "https://northbridgec.ac/online-learners",
  },
};

export default function OnlineLearners() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Learning rarely <br />
          </>
        }
        typewrite="follows a straight line."
        description={
          <p>
            Not every learner is at the same stage. Some have completed
            secondary school and are preparing for university, repositioning
            academically, or planning their next step more deliberately.
          </p>
        }
        image="bg-[url('/asset/center.jpg')]"
      />
      <OnlinePrograms />
      {/* <For /> */}
      <Learners />
      <Pathway />
      <MatureLearnersForm />
      <Footer />
    </div>
  );
}
