import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import OnlinePrograms from "./components/OnlinePrograms";
import For from "./components/For";
import Learners from "./components/Learners";
import Pathway from "./components/Pathway";
import Footer from "../components/Footer";
import MatureLearnersForm from "./components/MatureLearnersForm";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transitional Learners | Preparing Students for Canadian Education",

  description:
    "Support for transitional learners entering the Canadian system, focusing on academic alignment, readiness, and confidence before university.",

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
      <For />
      <Learners />
      <Pathway />
      <MatureLearnersForm />
      <Footer />
    </div>
  );
}
