import React from "react";
import Image from "next/image";

export default function CAAPClosingSummary() {
  return (
    <section className="relative py-28 px-[5%]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/asset/library.jpg"
          alt="Canadian academic environment"
          fill
       className="object-cover object-center brightness-75"
        />
        {/* Soft overlay */}
        {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" /> */}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl max-w-5xl mx-auto p-12 shadow-lg">
          {/* Header */}
          <div className="mb-8 max-w-3xl">
            <p className="uppercase tracking-wide text-sm text-[#479DA5]">
              Program Summary
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              A Deliberate Preparation Strategy
            </h2>
          </div>

          {/* Core message */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                CAAP is a deliberate academic preparation strategy designed to
                build the foundational competencies required for success in
                Canadian post-secondary education.
              </p>

              <p>
                The program supports students as they develop independence in a
                structured, guided environment—before these expectations are
                fully imposed at the university level.
              </p>
            </div>

            {/* Right – Skills */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <p className="font-semibold text-gray-900 mb-4">
                Through CAAP, students build:
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>• Academic independence</li>
                <li>• Digital literacy</li>
                <li>• Confidence with Canadian-style learning systems</li>
              </ul>

              <p className="mt-5 text-sm text-gray-600">
                These competencies are essential for success within Canadian
                universities and colleges.
              </p>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-10 pt-8 border-t border-gray-200 text-gray-700">
            <p>
              CAAP bridges the gap between secondary education and Canadian
              post-secondary study by mirroring the learning structures used by
              many universities and colleges—while providing the support
              students need to transition confidently and successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
