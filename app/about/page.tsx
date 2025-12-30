import React from "react";
import Navigation from "../components/Navigation";
import Hero from "./components/Hero";
import School from "./components/School";
import Vision from "./components/Vision";
import Footer from "../components/Footer";
import Special from "./components/Special";

export default function About() {
  return (
    <div>
      <Navigation />
      <Hero />
      <School />
      <Vision />
      <Special />
      <Footer />
    </div>
  );
}
