import React from "react";
import Navigation from "../components/Navigation";
import Hero from "./components/Hero";
import Ossd from "./components/Explanation";
import Slideshow from "./components/Slideshow";
import AdmissionRequirements from "./components/AdmissionRequirements";
import Graduands from "../caap/components/Graduands";
import ComparisonTable from "./components/ComparisonTable";
import Footer from "../components/Footer";
export default function AY12() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Ossd />
      <Slideshow/>
      <AdmissionRequirements/>
      <ComparisonTable/>
      <Graduands/>
      <Footer/>
    </div>
  );
}
