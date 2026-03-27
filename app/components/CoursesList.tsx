"use client";
import React from "react";
import { useCatgories, useCourses, useEnrolled } from "../hooks/useAdmission";
import AnimatedCancel from "./AnimatedCancel";
import CourseSkeletonGrid from "./CourseSkeletonGrid";
import Courses from "./Courses";

export default function CoursesList() {
  const { data, isPending, isError, isSuccess } = useCourses();
  const { data: categories, isSuccess: gotCategories } = useCatgories();
  const {data: enrolled} = useEnrolled()

  if (isPending) return <CourseSkeletonGrid count={6} />;

  if (isError)
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <AnimatedCancel message="Unable to fetch courses" />
      </div>
    );

  if (isSuccess && gotCategories) {
  
    return (
      <Courses
        courses={data.data}
        categories={categories?.data}
        enrolled={enrolled?.data}
        paid={enrolled?.paid}
        granted={enrolled?.granted}
      />
    );
  }
}
