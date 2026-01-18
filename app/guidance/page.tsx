import React from "react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import StickyHero from "../components/atoms/StickyHero";
import Footer from "../components/Footer";
import Learners from "./components/Learners";
import Structure from "./components/Structure";
import CareerEducationSection from "./components/CareerEducation";

export default function Guidance() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        image="bg-[url('/asset/c.jpg')] scale-x-[-1]"
        text={
          <>
            Building Confident, <br/> Self-Aware
            <br />
          </>
        }
        typewrite="Learners"
        transparent
        description={
          <p>
            Academic success is not accidental. At Northbridge Collegiate, our
            Guidance Centre helps students understand how they learn, build
            strong academic habits, and develop the confidence to advocate for
            themselves—preparing them for independent success in school and
            beyond
          </p>
        }
      />
      <Learners/>
      <Structure/>
      <CareerEducationSection/>
      <Footer/>
    </div>
  );
}
