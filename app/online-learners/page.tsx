import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import OnlinePrograms from "./components/OnlinePrograms";
import For from "./components/For";
import Learners from "./components/Learners";
import Pathway from "./components/Pathway";
import Footer from "../components/Footer";
import MatureLearnersForm from "./components/MatureLearnersForm";
export default function OnlineLearners() {
  return (
    <div>
      <Navigation />
      <Hero
        text={<>Learning rarely <br/></>}
        typewrite="follows a straight line."
        description={
          <p>
            Not every learner is at the same stage. Some have completed
            secondary school and are preparing for university, repositioning
            academically, or planning their next step more deliberately.
          </p>
        }
        image="bg-[url('/asset/center.jpg')]"
      />
      <OnlinePrograms/>
      <For/>
      <Learners/>
      <Pathway/>
      <MatureLearnersForm/>
      <Footer/>
    </div>
  );
}
