import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import School from "./components/School";
import Vision from "./components/Vision";
import Footer from "../components/Footer";
import Special from "./components/Special";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Northbridge Collegiate",

  description:
    "Learn about Northbridge Collegiate, our academic bridge model, and how we prepare international students for success in Canadian secondary schools and universities.",

  alternates: {
    canonical: "https://northbridgec.ca/about",
  },

  openGraph: {
    title: "About Northbridge Collegiate",
    description:
      "Discover Northbridge Collegiate's academic bridge model designed to align international students with Canadian education standards.",
    url: "https://northbridgec.ca/about",
  },
};

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
