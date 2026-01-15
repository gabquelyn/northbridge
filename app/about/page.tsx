import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/atoms/Hero";
import School from "./components/School";
import Vision from "./components/Vision";
import Footer from "../components/Footer";
import FounderMessage from "./components/FounderMessage";
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
      <div className="bg-[url('/asset/graduads.jpg')] bg-no-repeat bg-cover bg-center py-19 p-8 text-white  text-center relative">
        <div className="absolute bg-[rgba(0,0,0,0.55)] inset-0"></div>
        <div className="relative flex flex-col items-center justify-center min-h-100 z-10">
          <div className="max-w-200">
          <p className="title">
           A <span className="text-[#479DA5]">Canadian University</span> Prep Model
          </p>
          <p>
            Northbridge Collegiate is a private Canadian educational institution
            inspected and authorized by the Ontario Ministry of Education to
            deliver Ontario Secondary School Diploma (OSSD) programs in
            accordance with provincial requirements.
          </p>
          <p>
            As a Canadian University Preparation institution, we offer
            secondary-level academic programs through both online and in-class
            delivery. Our Canadian University Prep model is designed to prepare
            students for successful entry into Canadian universities.
          </p>
        </div>
        </div>
      </div>
      <Vision />
      <FounderMessage/>
      <Footer />
    </div>
  );
}
