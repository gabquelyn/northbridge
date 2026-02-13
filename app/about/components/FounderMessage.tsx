import React from "react";
import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="bg-gray-50 py-20 px-[5%]">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-4xl bg-white shadow-xl p-10 md:p-14">
          {/* Accent strip */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#479DA5]" />

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#479DA5]">
              Message from the Founder
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">
              Preparation for what comes next.
            </h2>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 items-start">
            {/* Message */}
            <div className="text-gray-700 leading-relaxed space-y-5">
              <p>
                Through years of operating regulated businesses in Canada and
                working closely with a predominantly immigrant workforce—many of
                whom first arrived as international students—I witnessed
                firsthand how challenging it can be to balance academics,
                employment obligations, regulatory requirements, and cultural
                adjustment simultaneously.
              </p>

              <div>
                <p>I listened to their stories.</p>
                <p>
                  I observed capable individuals navigating school, work rules,
                  immigration expectations, and unfamiliar systems—all at once,
                  often without adequate preparation or support.
                </p>
                <p>
                  That experience led to the founding of Northbridge Collegiate.
                </p>
              </div>

              <p>
                Northbridge was designed as a preparatory academic institution
                to support students and families before entry and during
                transition into the Canadian university system. My background in
                educational neuroscience, psychology, and learning sciences
                provided the structure to translate what I observed in practice
                into an intentional academic model.
              </p>
              <p>
                Grades 11 and 12 are not simply senior years—they are decision
                years. At this stage, academic records become permanent,
                pathways narrow or expand, independence accelerates, and the
                consequences of misalignment can be long-lasting. Northbridge
                exists to intervene thoughtfully at this critical point,
                concentrating our resources and expertise, with care where
                students face the greatest complexity and pressure.
              </p>
              <p>
                Beyond grades and credentials, we help students develop the
                thinking skills, judgment, and responsibility required to
                function well in global academic and professional systems.
              </p>
              <p>
                Our aim is to build strong academic, personal, and ethical
                foundations that students will carry long after they leave our
                classrooms. When our graduates succeed quietly and responsibly
                in environments we do not control, we know our work has been
                done well.
              </p>
              <p>-That is the commitment that defines Northbridge.</p>
              <p>We look forward to supporting your student.</p>
            </div>

            {/* Founder Profile */}
            <div className="flex flex-col items-start md:items-center gap-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#479DA5]/20">
                <Image
                  src="/asset/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-left md:text-center">
                <p className="text-sm text-gray-500">Founder</p>
                <p className="text-sm text-gray-500">Northbridge Collegiate</p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-10">
            <p className="italic text-gray-500">
              “Preparing Students for Successful Entry into Canadian
              Universities”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
