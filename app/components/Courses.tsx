"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { RiSearch2Line } from "react-icons/ri";
import CourseFilter from "./CourseFilter";
import NotFoundAnimated from "./NotFoundAnimated";
import Search from "./atoms/Search";

export default function Courses({
  courses,
  categories = [],
  enrolled,
  paid,
  granted,
}: {
  courses: Course[];
  categories?: { id: number; name: string }[];
  enrolled?: number[];
  paid?: boolean;
  granted?: boolean;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const filteredCourse = courses.filter((course) =>
    category
      ? course.category == category &&
        course.fullname.toLowerCase().includes(search.toLowerCase())
      : course.fullname.toLowerCase().includes(search.toLowerCase()),
  );
  const enrolledSet = new Set(enrolled);

  return (
    <section className="text-sm">
      <div className="my-5 flex gap-2 justify-end">
        <Search value={search} setSearch={setSearch} />

        <div>
          <CourseFilter
            categories={categories}
            selectedCategory={category}
            onChange={(num) => setCategory(num)}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourse.map((course) => (
          <CourseCard
            key={course.id}
            data={course}
            category={categories?.find(
              (category) => category.id == course.category,
            )}
            enrolled={enrolledSet.has(course.id)}
            paid={paid}
            granted={granted}
          />
        ))}
      </div>

      <div>{filteredCourse.length === 0 && <NotFoundAnimated />}</div>
    </section>
  );
}
