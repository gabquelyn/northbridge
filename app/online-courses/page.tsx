import React from "react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import Footer from "../components/Footer";
import CoursesList from "../components/CoursesList";

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
