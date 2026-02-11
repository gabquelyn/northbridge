import React from "react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import Footer from "../components/Footer";
import LeafletFlip from "../components/FlipBook";
import CoverPage from "../components/flipbook/CoverPage";
import Image from "next/image";
import NorthbridgeRoadmap from "../components/flipbook/RoadMap";
import Wrapper from "../components/flipbook/Wrapper";
import MediaPage from "../components/flipbook/MediaPage";
import TagLine from "../components/flipbook/TagLine";
import NorthbridgeAdmissions from "../components/flipbook/NorthbridgeAdmissions";
import CTA from "../components/flipbook/CTA";
import { coursesOverview } from "../components/flipbook/overview";
export default function Prospectus() {
  const pages = [
    <CoverPage image="bg-[url('/asset/hall.jpg')]" key={1}>
      <div className="relative flex flex-col items-center justify-between  h-full py-[24%]  z-10">
        <div className="w-15 md:w-20 h-15 md:h-20 p-1 rounded-full bg-white shadow-lg">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/asset/logo2.png"
              fill
              className="object-contain"
              alt="Northbridge Logo"
            />
          </div>
        </div>

        <div className="text-white md:text-2xl flex flex-col items-center">
          <p>Northbridge Collegiate</p>
          <p className="text-[#479DA5]">Parent Prospectus</p>
        </div>
      </div>
    </CoverPage>,
    <Wrapper key = {Math.random()}>
      <p className="md:text-2xl text-[#479DA5] font-bold md:mb-6 mb-2">
        Founder's Message
      </p>
      <p>
        Northbridge Collegiate was founded out of a clear conviction: the most
        consequential work in education happens at points of transition.
        Northbridge exists to intervene thoughtfully at this critical point.
      </p>

      <p>
        Our focus on senior secondary education is intentional. We concentrate
        our expertise where students face the greatest academic and personal
        complexity. Northbridge Collegiate was intentionally designed to operate
        at the most pivotal stage of a student's development. By focusing
        exclusively on Grades 12 and 12 (years that shape academic trajectories,
        personal identity, and future opportunity), we build strong academic and
        personal foundations at the point where decisions carry lifelong impact.
      </p>
      <p>
        Through structured academic preparation, purpose-led career exploration,
        leadership development, ethical formation, and civic responsibility,{" "}
        <span className="hidden md:inline">
          our approach integrates rigorous senior secondary education with
          intentional formation—developing students who think critically, act
          responsibly, and engage the world with clarity and purpose.
        </span>
      </p>
      <p className="hidden md:block">
        Northbridge Collegiate exists to help students understand not only where
        they are going, but who they are becoming.
      </p>
      <p className="hidden md:block text-right">
        — Founder, Northbridge Collegiate
      </p>
    </Wrapper>,

    <Wrapper key={2}>
      <p className="md:hidden">
        our approach integrates rigorous senior secondary education with
        intentional formation—developing students who think critically, act
        responsibly, and engage the world with clarity and purpose.
      </p>
      <p className="md:hidden">
        Northbridge Collegiate exists to help students understand not only where
        they are going, but who they are becoming.
      </p>
      <p className="text-right md:hidden">— Founder, Northbridge Collegiate</p>
      <NorthbridgeRoadmap />
    </Wrapper>,
    <MediaPage src="/asset/exam.jpg" key={3} />,

    <Wrapper key={4}>
      <p className="md:text-2xl text-[#479DA5] font-bold md:mb-6 mb-2">
        WHY GRADES 11 & 12 ONLY
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <p className="text-justify">
            Northbridge Collegiate was intentionally designed to operate at the
            most pivotal stage of a student's development: Grades 11 and 12.
            These are the years when academic decisions become irreversible,
            university pathways are determined, and independence accelerates.
            Intervention at this point has greater long-term impact than broad
            intervention earlier.
          </p>
        </div>
        <div className="hidden md:block bg-white shadow p-5 rounded-2xl">
          <div className="relative w-full h-40 overflow-hidden">
            <Image
              src="/asset/logo2.png"
              fill
              alt="logo"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <p className="text-justify">
        Grades 11-12 are where: - Academic records become permanent and
        consequential - Identity and independence solidify - Decision-making
        capacity is tested - Systems either empower or cause unnecessary
        ambiguity. By focusing exclusively on these years, Northbridge builds
        strong academic and personal foundations at the moment they matter most.
      </p>
    </Wrapper>,
    <MediaPage src="/asset/research.jpg" key={5} />,
    <Wrapper key={6}>
      <TagLine tag="Faith, Ethos & Community Expectations" />
      <div className="relative w-full hidden md:flex h-80 md:h-60 rounded-3xl overflow-hidden shadow-lg mb-6">
        <Image
          src="/asset/moral.jpg"
          alt="Faith and Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto space-y-4 text-slate-700 leading-relaxed">
        <p>
          Northbridge Collegiate is an educational environment shaped by
          faith-informed principles.
        </p>
        <p>
          Our educational approach is informed by Christian teachings on
          character, integrity, service, and moral responsibility. These values
          shape expectations around conduct, leadership, and community life.
        </p>
        <p>
          Northbridge serves a diverse student body and does not require
          students to be Christian. However, enrollment assumes a willingness to
          engage respectfully in a Christian faith-based worldview and to uphold
          the school's standards of conduct and expectations. Respect for the
          school's values is a condition of enrollment.
        </p>
      </div>
    </Wrapper>,

    <Wrapper key={7}>
      <TagLine tag=" Who Northbridge Is For" />
      <div className="text-center max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-4">
        <p>
          Northbridge Collegiate serves students typically aged 15-19 who are:
        </p>
        <ul className="text-left list-disc list-inside space-y-2">
          <li>Interested in Grades 11 or 12 within the Canadian system</li>
          <li>Planning long-term university success</li>
        </ul>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-80 md:h-100 rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/asset/mixed.jpg"
          alt="Student Diversity"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </Wrapper>,

    <MediaPage src="/asset/cana.jpg" key={8} />,
    <Wrapper key={9}>
      <p className="md:text-2xl text-[#479DA5] capitalize font-bold md:mb-6 mb-2">
        Understanding The canadian context
      </p>
      <p>
        Canadian education is distinct, particularly in continuous assessment,
        independent learning, and analytical expectations. Many capable students
        struggle not because of ability, but because of system mismatch. Success
        in Canada requires preparation beyond completing secondary school.
      </p>
      <p>
        Northbridge exists to bridge this gap intentionally and responsibly.
      </p>
    </Wrapper>,

    <MediaPage src="/asset/class.jpg" key={10} />,

    <Wrapper key={11}>
      <TagLine tag="" />
      <p className="md:text-2xl text-[#479DA5] capitalize font-bold md:mb-6 mb-2">
        Academic Programs Overview
      </p>

      <p>Northbridge offers four primary programs:</p>
      <ul className="flex flex-col gap-2 list-disc list-outside">
        <li>CAAP — Canadian Academic Alignment Program</li>
        <li>Grade 11 — Ontario curriculum foundation year</li>
        <li>Grade 12 (OSSD) — University-recognized diploma year</li>
        <li>AY12 — University preparation and enrichment year.</li>
      </ul>

      <p>
        Each program leads closed to completion of the Ontario Secondary School
        Diploma (OSSD).
      </p>
    </Wrapper>,
    <MediaPage src="/asset/caap.jpg" key={12} />,
    <Wrapper key={13}>
      <TagLine tag="CAAP" />

      <p className="text-center">
        CAAP (Canadian Academic Alignment Program) is designed as a foundation
        program. It's an orientation into Canadian programming. CAPP is the
        standard entry pathway for students transitioning from non-Ontario
        systems.
      </p>

      <div className="mt-8 flex flex-col items-center text-center gap-3">
        <TagLine tag="GRADE 11 PROGRAM" />

        <p>
          Grade 11 at Northbridge delivers Ontario-aligned coursework with a
          focus on academic writing, critical thinking, and study skills.
        </p>
        <p>
          Grade 11 students must complete a minimum of 6 courses with
          Northbridge Collegiate.
        </p>
        <p>
          Grade 11 provides the adjustment period needed to perform strongly in
          Grade 12.
        </p>
      </div>
    </Wrapper>,
    <MediaPage src="/asset/congratulations.jpg" key={14} />,
    <Wrapper key = {Math.random()}>
      <TagLine tag=" GRADE 12 PROGRAM" />

      <div className="text-center max-w-3xl mx-auto space-y-1 md:space-y-4  text-slate-700 leading-relaxed">
        <p>
          The Grade 12 program leads to the Ontario Secondary School Diploma
          (OSSD), recognized by universities in Canada and internationally.
        </p>
        <p>
          Students receive structured academic monitoring and guidance to meet
          Canadian university expectations.
        </p>
        <p>
          Grade 12 students must complete a minimum of 4 courses with
          Northbridge Collegiate.
        </p>
      </div>

      <div className="mt-2 md:mt-8 space-y-6">
        <TagLine tag="AY12: University Preparation Year" />
        <p className="md:text-2xl text-[#479DA5] uppercase font-bold text-center mb-1 md:mb-4 tracking-wide"></p>
        <div className="text-center max-w-3xl mx-auto space-y-1 md:space-y-4  text-slate-700 leading-relaxed">
          <p>
            AY12 is an enrichment layer to Grade 12. It does not replace Grade
            12; rather, they run concurrently.
          </p>
          <p>
            AY12 places a strong emphasis on system awareness, further academic
            strengthening, and personal formation.
          </p>
        </div>
      </div>
    </Wrapper>,
    <video
      autoPlay
      muted
      loop
      playsInline
      key={"video gif"}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/asset/online.mp4" type="video/mp4" />
    </video>,
    <Wrapper key={15}>
      <TagLine tag="ONLINE LEARNING" />
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className=" text-slate-700 leading-relaxed">
          For families requiring flexibility, Northbridge offers online
          Ontario-aligned learning with structured academic oversight. Online
          learners receive the same pathway guidance and monitoring as on-campus
          students.
        </p>
        <p className=" text-slate-700 leading-relaxed">
          Our learning spaces include theatre-style classrooms, seminar rooms,
          and student lounges. The environment supports independence,
          responsibility, and focus.
        </p>
      </div>

      <div className="mt-4 md:mt-18">
        <TagLine tag="TEACHING APPROACH & STUDENT SUPPORT" />
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className=" text-slate-700 leading-relaxed">
            Northbridge classrooms are intentionally small, allowing
            personalized instruction and close academic monitoring. Support
            includes academic advising, guidance counselling, and regular
            progress reviews.
          </p>
        </div>
      </div>
    </Wrapper>,
    <Wrapper key={16}>
      <TagLine tag="UNIVERSITY PREPARATION & OUTCOMES" />
      <div className="relative w-full h-40 md:h-80 rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/asset/cont.jpg"
          alt="University Preparation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className=" text-slate-700 leading-relaxed">
          Admission is only the first step. Long-term success requires
          preparation for academic rigour and independent learning.
        </p>
        <p className=" text-slate-700 leading-relaxed">
          Northbridge focuses on readiness that supports sustained university
          performance.
        </p>
      </div>
    </Wrapper>,

    <NorthbridgeAdmissions key={17} />,
    <CTA key={18} />,
    <CoverPage image="bg-[url('/asset/overview.jpg')]" key={19}>
      <div className="relative p-8 md:p-15  z-10">
        <p className="md:text-xl text-[#479DA5] font-bold">
          SENIOR SECONDARY CURRICULUM OVERVIEW (GRADES 11 & 12)
        </p>
        <ul className="text-white flex flex-col gap-2 capitalize list-outside list-disc  mt-5">
          {[
            "ENGLISH & ACADEMIC COMMUNICATION",
            "MATHEMATICS",
            "SCIENCES",
            "COMPUTER SCIENCE, ENGINEERING & TECHNOLOGY",
            "BUSINESS, ECONOMICS & ACCOUNTING",
            "SOCIAL SCIENCES, LAW & GLOBAL STUDIES",
            "HEALTH, WELLNESS & HUMAN DEVELOPMENT",
            "WRITERS' CRAFT & ADVANCED EXPRESSION",
            "Specialized Senior Electives",
          ].map((course) => (
            <li key={course} className="">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </CoverPage>,
    <Wrapper key={20}>
      <TagLine tag="Ontario-Aligned Learning for University Readiness" />
      <p>
        Northbridge Collegiate delivers Ontario-aligned senior secondary courses
        designed to prepare students for the academic, analytical, and
        independent learning expectations of Canadian universities.
      </p>
      <p>
        Courses are offered at University <span className="font-bold">(U)</span>{" "}
        and University/College <span className="font-bold">(M)</span> levels,
        allowing academic pathways to be tailored to each student's readiness,
        strengths, and long-term goals.
      </p>
    </Wrapper>,
    ...coursesOverview.map((course) => (
      <Wrapper key={course.title}>
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#f7fbfc] to-white border border-[#e6f1f2] shadow-sm p-8 md:p-12">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#479DA5]" />

          <div className="ml-4 md:ml-6">
            <p className="md:text-3xl text-left font-semibold text-[#1f2d3d] mb-4 tracking-tight">
              {course.title}
            </p>
            <div className="w-16 h-0.5 bg-[#479DA5] mb-6" />

            <p className="text-gray-700 leading-relaxed max-w-3xl">
              {course.description}
            </p>

            {/* <div className="mt-8">
              <span className="inline-block px-4 py-1 text-sm tracking-wide uppercase bg-[#479DA5]/10 text-[#479DA5] rounded-full">
                University Pathway Stream
              </span>
            </div> */}
          </div>
        </div>
      </Wrapper>
    )),
  ];
  return (
    <div>
      <NorthbridgeAcademicNav />
      <LeafletFlip pages={pages} />
      <Footer />
    </div>
  );
}
