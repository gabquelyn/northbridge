import React from "react";
import CourseSkeletonCard from "./CourseSkeleton";

export default function CourseSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CourseSkeletonCard key={i} />
      ))}
    </div>
  );
}
