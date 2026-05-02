"use client";
import React from "react";
import Article from "./Article";
import Link from "next/link";
export default function Blog() {
  const blogs = [
    {
      title: "The Annual Educators Conference 2026",
      highlight: "Northbridge Collegiate",
      preview: "Learn the best pathway to study in Canada from Nigeria",
      details: (
        <>
          <p>
            What does it take to bring Canadian academic standards to Lagos?
            Vision, rigour, and a Ministry of Education licence.
          </p>
          <p>
            We are proud to welcome Northbridge Collegiate as a partner of the
            Annual Educators Conference 2026.
          </p>
          <p>
            Established in 2025, Northbridge Collegiate is a groundbreaking
            institution, a Canadian university preparatory school operating in
            Lagos, Nigeria, formally registered and licensed by the Ontario
            Ministry of Education under BSID-886341.
          </p>
          <p>
            Northbridge delivers the Ontario Secondary School Diploma (OSSD), a
            credential recognised by universities across Canada, the UK, the
            USA, and dozens of other countries to students in Grades 11 and 12,
            Post-WAEC learners, and young adults aged 15 to 23 who are
            repositioning academically for global university entry.
          </p>
          <p>
            Their programme model is dual: fully online for students who need
            flexibility, and onsite for those who thrive in a structured
            classroom environment. Both pathways lead to the same
            internationally recognised outcome.
          </p>
          <p>
            For educators and school leaders, Northbridge Collegiate represents
            something important: a credible, licensed bridge between Nigerian
            secondary education and Canadian and by extension, global university
            expectations. For students who have completed WAEC and are wondering
            what comes next, Northbridge may be the clearest and most structured
            answer available in Nigeria today.
          </p>
          <p>
            Prepare to meet and engage with them at the Annual Educators
            Conference on: Saturday, May 2nd 2026 | 9:00 AM | Muson Centre,
            Lagos
          </p>
          <p>Conference Fee: ₦10,000 | $10 (International)</p>
          <p>
            Register{" "}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScTIyUBe0SoxRP9d0xP73jNI6PN7W90mkyPIvsnw-F1HyRqLg/closedform">
              Here
            </Link>
          </p>
        </>
      ),
      thumbnail: "/asset/afri.jpg",
    },
    {
      title: "How to Get into Canadian Universities from Nigeria",
      highlight: "Northbridge Collegiate",
      preview: "Learn the best pathway to study in Canada from Nigeria",
      details: (
        <>
          <p>Learn the best pathway to study in Canada from Nigeria.</p>
          <p>
            For many families in Nigeria, studying in Canada is a long-term
            goal. However, one of the most important—and often
            overlooked—questions is not just how to gain admission, but how to
            choose the right pathway leading up to it. <br />
            At Northbridge Collegiate, we focus on this exact stage: preparing
            students at the point where transition into university matters most.
          </p>
          <div>
            <p>
              Northbridge is designed specifically for students at the final
              stage of secondary education. Rather than replicating a
              traditional school environment, the focus is on:
            </p>
            <ul className="list-inside list-disc">
              <li>Academic alignment with Canadian standards</li>
              <li>Structured support</li>
              <li>University readiness</li>
            </ul>

            <p>
              This allows students to concentrate on what matters most—a
              successful transition into university.
            </p>
          </div>
          <p>
            For students who have completed or are nearing the end of secondary
            school, enrolling in another traditional school may not address the
            most important need: preparation for what comes next.
          </p>
          <p>
            Choosing the right pathway is just as important as choosing the
            right university.
          </p>
          <p>
            By completing the Canadian secondary school diploma (Ontario
            Secondary School Diploma - OSSD) locally in Lagos, combined with
            structured academic transition support, Northbridge Collegiate
            prepares students not only for admission, but for success in
            university Speak with our Admissions team to explore available
            pathways.
          </p>
          <p>Speak with our Admissions team to explore available pathways.</p>
        </>
      ),
      thumbnail: "/asset/blog1.jpeg",
    },
    {
      title: "Study in Canada from Nigeria",
      highlight: "Start Early | Earn University Credit Before You Arrive",
      preview:
        "For students planning to study in Canada, preparation does not have to begin after arrival.",
      details: (
        <>
          <p>
            For students planning to study in Canada, preparation does not have
            to begin after arrival. It can start earlier—while still in Nigeria.
          </p>
          <div>
            <p>
              At Northbridge Collegiate, students can begin their transition by
              engaging with university-level learning before stepping onto
              campus.
            </p>
            <p>This allows students to:</p>
            <ul className="list-inside list-disc">
              <li>Earn Canadian university credit from Nigeria</li>
              <li>Gain early exposure to university expectations</li>
              <li>Build confidence before arriving on campus</li>
            </ul>
          </div>
          <p>
            This is one of the most effective ways to strengthen a student's
            transition.
          </p>
          <p>
            At Northbridge, the pathway is simple: <br /> Secondary School →
            Northbridge Collegiate → Canadian University
          </p>
          <div>
            <p>Students may:</p>
            <ul className="list-inside list-disc">
              <li>
                Complete a Canadian secondary school diploma (the OSSD) in Lagos
              </li>
              <li>Participate in structured academic transition</li>
              <li>Begin earning university credit early</li>
            </ul>

            <p>
              While there is no single path to Canadian university— there is a
              clear advantage to choosing one that aligns with the system
              students are entering.
            </p>
          </div>
          <p>
            Because if the goal is Canada, the preparation should be Canadian.
          </p>
          <p>Speak with our Admissions team to explore available pathways.</p>
        </>
      ),
      thumbnail: "/asset/blog2.jpeg",
    },
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
