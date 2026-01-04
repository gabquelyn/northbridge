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

export const metadata: Metadata = {
  title: "The Northbridge Academic Bridge Model",

  description:
    "Discover the Northbridge Academic Bridge Model—a structured approach that aligns international students with Canadian academic standards and university expectations.",

  alternates: {
    canonical: "https://northbridgec.ac/northbridge-model",
  },

  openGraph: {
    title: "The Northbridge Academic Bridge Model",
    description:
      "Learn how Northbridge Collegiate's academic bridge model prepares students from diverse educational backgrounds for success in Canadian universities.",
    url: "https://northbridgec.ac/northbridge-model",
  },

  twitter: {
    title: "The Northbridge Academic Bridge Model",
    description:
      "A structured academic bridge model designed to prepare students for Canadian university success.",
  },
};

export default function ModelPage() {
  return (
    <div>
      <Navigation />
      <Hero
        image="bg-[url('/asset/workers.jpg')]"
        text={
          <>
            The Northbridge  <br />
          </>
        }
        typewrite="Academic Bridge Model"
        description={
          <>
            Most schools focus on getting you to the university door.
            <br className="hidden md:block" />We focus on ensuring you excel once you walk through it.
          </>
        }
      />
      <Philosophy/>
      <AcademicFramework/>
      <Special/>
      <ClearRoute/>
      <Graduands/>
      <Footer/>
    </div>
  );
}
