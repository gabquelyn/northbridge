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
              Guided by Experience. Designed for Student Transition.
            </h2>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 items-start">
            {/* Message */}
            <div className="text-gray-700 leading-relaxed space-y-5">
              <p>
                Through years of operating regulated businesses in Canada and
                employing a predominantly immigrant workforce—many of whom first
                arrived as international students—I saw firsthand how
                challenging it can be to balance school, work, and complex
                requirements all at once.
              </p>

              <div>
                <p>I listened to their stories.</p>
                <p>
                  I watched them navigate academics, employment rules,
                  immigration expectations, and cultural adjustment—often at the
                  same time.
                </p>
              </div>

              <p>
                That is why I founded Northbridge Collegiate. Designed as a
                preparatory academic institute to support students and families
                before entry and during their transition into the Canadian
                university system. My background in educational neuroscience,
                psychology and learning sciences helped give structure to what
                I observed in practice.
              </p>

              <p>We look forward to supporting your student.</p>
            </div>

            {/* Founder Profile */}
            <div className="flex flex-col items-start md:items-center gap-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#479DA5]/20">
                <Image
                  src="/asset/founder.jpg" // replace
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-left md:text-center">
              
                <p className="text-sm text-gray-500">
                  Founder & Chancellor
                </p>
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
