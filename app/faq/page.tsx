import React from "react";
import Navigation from "../components/Navigation";
import FrequentlyAskedQuestions from "../components/Faq";
import Footer from "../components/Footer";
import NorthbridgeAcademicNav from "../components/StickyNav";
export default function Faq() {
  return (
    <div>
      {/* <Navigation /> */}
       <NorthbridgeAcademicNav/>
          
      <div className="bg-[url('/asset/graduands.jpg')] bg-no-repeat bg-cover bg-center pt-40 py-19 p-8 text-white  text-center relative">
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0"></div>
        <div className="relative flex title capitalize flex-col items-center gap-5 justify-center z-10">
          <p className="text-[#479DA5]">Parent</p>
          <p>Frequently Asked Question</p>
        </div>
      </div>
      <FrequentlyAskedQuestions />
      <Footer/>
    </div>
  );
}
