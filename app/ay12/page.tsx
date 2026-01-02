import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Explanation from "./components/Explanation";
import ComparisonTable from "../grade12/components/ComparisonTable";
import Graduands from "../caap/components/Graduands";
import Footer from "../components/Footer";
export default function AY12() {
  return (
    <div>
      <Navigation />
      <Hero
        image="bg-[url('/asset/graduate.jpg')]"
        text={
          <>
            Same Diploma. <br />
          </>
        }
        typewrite="Stronger Preparation."
        transparent
        description={
          <p>
            The Grade 12 Advantage Year (AY12) is our flagship academic
            experience. It is designed for the ambitious student who recognizes
            that getting into a Canadian university is only half the battle
          </p>
        }
      />
      <Explanation />
      <ComparisonTable />
      <Graduands />
      <Footer />
    </div>
  );
}
