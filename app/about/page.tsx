import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import School from "./components/School";
import Vision from "./components/Vision";
import Footer from "../components/Footer";
import Special from "./components/Special";

export default function About() {
  return (
    <div>
      <Navigation />
      <Hero
        text={
          <>
            Get to <br />
          </>
        }
        typewrite="Know us more"
        description={
          <p>
            <span className="text-[#17757E] font-bold">
              Northbridge Collegiate{" "}
            </span>
            is a Canadian University Prep Institution designed to prepare
            international students for successful entry into, and performance
            within, Canadian universities.
          </p>
        }
        transparent
        image="bg-[url('/asset/student.jpg')]"
      />
      <School />
      <Vision />
      <Special />
      <Footer />
    </div>
  );
}
