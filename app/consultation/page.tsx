import React from "react";
import Navigation from "../components/Navigation";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "../components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book a Consultation | Study in Canada",

  description:
    "Book a personalized consultation with Northbridge Collegiate to explore Canadian academic bridge programs and university preparation pathways.",

  alternates: {
    canonical: "https://northbridgec.ca/consultation",
  },

  openGraph: {
    title: "Book a Consultation | Northbridge Collegiate",
    description:
      "Speak with our academic advisors and explore the right Canadian academic pathway for your goals.",
    url: "https://northbridgec.ca/consultation",
  },
};

export default function Consultation() {
  return (
    <div>
      <Navigation />
      <div className="bg-[url('/asset/graduands.jpg')] bg-no-repeat bg-cover bg-center py-19 p-8 text-white  text-center relative">
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0"></div>
        <div className="relative flex title capitalize flex-col items-center gap-5 justify-center z-10">
          <p className="text-[#479DA5]">Book an</p>
          <p>Academic consultation</p>
        </div>
      </div>
      <ConsultationForm/>
      <Footer/>
    </div>
  );
}
