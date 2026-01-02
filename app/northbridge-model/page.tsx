import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import Philosophy from "./components/Philosophy";
import Special from "../about/components/Special";
import Footer from "../components/Footer";
export default function ModelPage() {
  return (
    <div>
      <Navigation />
      <Hero
        image="bg-[url('/asset/workers.jpg')]"
        text={
          <>
            The Northbridge Academic Bridge <br />
          </>
        }
        typewrite="Model"
        description={
          <>
            Most schools focus on getting you to the university door.
            <br />We focus on ensuring you excel once you walk through it.
          </>
        }
      />
      <Philosophy/>
      <Special/>
      <Footer/>
    </div>
  );
}
