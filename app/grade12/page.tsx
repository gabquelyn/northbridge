import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Ossd from "./components/Explanation";
import Slideshow from "./components/Slideshow";
import AdmissionRequirements from "./components/AdmissionRequirements";
import Graduands from "../caap/components/Graduands";
import ComparisonTable from "./components/ComparisonTable";
import Footer from "../components/Footer";
export default function Grade12() {
  return (
    <div>
      <Navigation />
      <Hero
        text={"Secure Your Global Credential."}
        typewrite="Fulfill Your Potential."
        image="bg-[url('/asset/girl.jpg')]"
        description={
          <p>
            At Northbridge Collegiate, our Grade 12 OSSD Program represents the
            "Complete" phase of our signature pathway.
          </p>
        }
        transparent
      />
      <Ossd />
      <Slideshow />
      <AdmissionRequirements />
      <ComparisonTable />
      <Graduands />
      <Footer />
    </div>
  );
}
