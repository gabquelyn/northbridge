import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Philosophy from "./components/Philosophy";
import Special from "../about/components/Special";
import Footer from "../components/Footer";
import AcademicFramework from "./components/AcademicFramework";
import ClearRoute from "./components/ClearRoute";
import Graduands from "../caap/components/Graduands";
import type { Metadata } from "next";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";

export const metadata: Metadata = {
  title: "The Northbridge Model | Senior Secondary Preparation Explained",

  description:
    "Explore the Northbridge Model—an intentional approach to senior secondary education focused on alignment, preparation, and long-term student success.",

  alternates: {
    canonical: "https://northbridgec.ac/northbridge-model",
  },
};

export default function ModelPage() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        image="bg-[url('/asset/consult.jpg')]"
        text={
          <>
            Our Model: <br />
          </>
        }
        typewrite="Redefining Readiness"
        transparent
        description={
          <>
            Enabling learners to manage critical transitions with clarity,
            responsibility, and impacts that shapes their future.
          </>
        }
      />
      <AcademicFramework />
      {/* <Philosophy /> */}
      <Special />
      <ClearRoute />
      <Graduands />
      <Footer />
    </div>
  );
}
