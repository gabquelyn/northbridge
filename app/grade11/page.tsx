import React from "react";
import Hero from "../components/atoms/Hero";
import Navigation from "../components/Navigation";
import Purpose from "./components/Purpose";
import Standard from "./components/Standard";
import Graduands from "../caap/components/Graduands";
import AdmissionRequirements from "./components/AdmissionRequirements";
import Footer from "../components/Footer";
export default function Grade11Page() {
  return (
    <div>
      <Navigation />
      <Hero
        text={
          <>
            Grade 11 OSSD:
            <br />
          </>
        }
        typewrite="Building the Foundation."
        description={
          <p>
            The Grade 11 program offers students access to a structured
            selection of Ontario Secondary School Diploma (OSSD) courses
            delivered through in-class instruction.
          </p>
        }
        image="bg-[url('/asset/meeting.jpg')] scale-x-[-1]"
      />
      <Purpose/>
      <Standard/>
      <Graduands/>
      <AdmissionRequirements/>
      <Footer/>
    </div>
  );
}
