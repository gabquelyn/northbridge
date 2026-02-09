import React from "react";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "../components/Footer";
import { Metadata } from "next";
import NorthbridgeAcademicNav from "../components/StickyNav";
export const metadata: Metadata = {
  title: "Book an Education Consultation | Northbridge Collegiate, Lagos, Nigeria",

  description:
    "Book a consultation with Northbridge Collegiate to discuss your child's pathway options, and preparation for Canadian high school and university.",

  alternates: {
    canonical: "https://northbridgec.ca/consultation",
  },
};

export default function Consultation() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <div className="bg-[url('/asset/graduands.jpg')] bg-no-repeat bg-cover bg-center pt-40 py-19 p-8 text-white  text-center relative">
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0"></div>
        <div className="relative flex title capitalize flex-col items-center gap-5 justify-center z-10">
          <p className="text-[#479DA5]">Book an</p>
          <p>Academic consultation</p>
        </div>
      </div>
      <ConsultationForm />
      <Footer />
    </div>
  );
}
