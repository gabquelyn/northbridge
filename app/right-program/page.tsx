import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import ProgramOverview from "./components/ProgramOverview";
import Footer from "../components/Footer";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";
export default function SelectingPrograms() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Which Program
            <br />
          </>
        }
        typewrite="Is Right for You?"
        transparent
        description={
          <p>
            We have four major programs you can select from. Carefully look at
            the benefits and purpose of each program.
          </p>
        }
        image="bg-[url('/asset/guiding.jpg')] scale-x-[-1]"
      />
      <ProgramOverview />
      <Footer />
    </div>
  );
}
