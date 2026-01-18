"use client";
import React from "react";
import Article from "./Article";
export default function Blog() {
  const blogs = [
    {
      title: "Northbridge Collegiate to Be Introduced to Nigerian Families",
      highlight: "Lagos, Nigeria — January 31, 2026",
      preview:
        "Northbridge Collegiate will be formally introduced to families in Nigeria at the upcoming Canada Family Advantage Program…",
      details: (
        <>
          <p>
            Northbridge Collegiate will be formally introduced to families in
            Nigeria at the upcoming Canada Family Advantage Program, taking
            place on{" "}
            <span className="font-bold">
              January 31st in Ikoyi, Lagos at the Isglo Conference Center.
            </span>
          </p>
          <p>
            The Founder of Northbridge Collegiate will speak at the event,
            marking the school's inaugural introduction to the Nigerian market.
            The session will outline Northbridge's academic philosophy, its
            transition-focused model, and how the institution supports learners
            preparing for Canadian and other global post-secondary education
            systems.
          </p>
          <p>
            The Canada Family Advantage Program is designed to help families
            understand academic expectations, planning timelines, and readiness
            considerations before making major education decisions. The Lagos
            session will provide an opportunity for families to engage directly,
            ask questions, and explore how structured academic preparation can
            influence long-term student outcomes
          </p>
        </>
      ),
      thumbnail: "/asset/Picture1.png",
    },
    {
      title:
        "Northbridge Collegiate Opens Registration for Online Programs and 2026/2027 Lagos School Year",
      highlight: "Lagos, Nigeria — January 31, 2026",
      preview:
        "Toronto, Canada / Lagos, Nigeria — Northbridge Collegiate has announced that registration is now open for its online academic programs...",
      details: (
        <>
          <p>
            Toronto, Canada / Lagos, Nigeria — Northbridge Collegiate has
            announced that registration is now open for its online academic
            programs, including CAPP, Grade 11 Online, and Grade 12 Online. The
            school has also opened applications for the 2026/2027 academic year
            for Grade 11 and Grade 12 at its Lagos campus.
          </p>
          <p>
            Northbridge's programs are designed for families seeking structured
            academic preparation ahead of Canadian or other global
            post-secondary education pathways. The offerings support learners
            through clear academic oversight, readiness-focused programming, and
            guided progression.
          </p>
          <p>
            All academic oversight is coordinated through Northbridge's
            Canada-based headquarters, ensuring alignment with Canadian academic
            standards while supporting learners across multiple locations.
            Enrollment is structured and capacity-managed, and families are
            encouraged to apply early.
          </p>
        </>
      ),
      thumbnail: "/asset/registration.jpeg",
    },
  ];
  return (
    <div className="flex flex-col items-center py-20 pb-40 px-5 md:px-[15%]">
      <p className="title text-center">
        Northbridge <br />
        <span className="text-[#479DA5]">Collegiate News</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
        {blogs.map((blog) => (
          <Article
            key={blog.title}
            title={blog.title}
            highlight={blog.highlight}
            preview={blog.preview}
            thumbnail={blog.thumbnail}
            details={blog.details}
          />
        ))}
      </div>
    </div>
  );
}
