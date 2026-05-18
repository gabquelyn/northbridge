import React from "react";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "../components/Footer";
import { Metadata } from "next";
import NorthbridgeAcademicNav from "../components/StickyNav";
export const metadata: Metadata = {
  title:
    "Book an Education Consultation | Schools That Prepare Students for Canada - Northbridge Collegiate",
  description:
    "Book a consultation with Northbridge Collegiate — one of Lagos's top secondary schools preparing students for Canada — to discuss your child's SS2 pathway to Canada, program options, and Canadian university preparation.",

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
