import React from "react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import Footer from "../components/Footer";
import CoursesList from "../components/CoursesList";
import { Metadata } from "next";
export const metadata: Metadata  = {
title: "Online Summer Program Lagos | Schools Preparing Students for Canadian University Pathways",
description: "Northbridge Collegiate offers Online Summer Programs in Lagos designed for students preparing for Canadian university pathways. Explore Ontario curriculum programs, university-focused secondary education, and programs that prepare students for Canada."
}
export default function page() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <div className="px-5 md:px-[10%] py-24">
        <CoursesList />
      </div>
      <Footer />
    </div>
  );
}
