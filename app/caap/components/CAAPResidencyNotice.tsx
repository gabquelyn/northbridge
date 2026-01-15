import React from "react";
import { HiInformationCircle, HiMapPin } from "react-icons/hi2";

export default function CAAPResidencyNotice() {
  return (
    <section className="bg-gray-50 py-20 px-[5%]">
      <div className="mx-auto max-w-5xl">

        <div className="relative  bg-white p-10 md:p-12 shadow-sm border border-gray-200">

          {/* Accent bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#479DA5]" />

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="mt-1">
              <HiInformationCircle className="h-7 w-7 text-[#479DA5]" />
            </div>

            <div>
              <p className="uppercase tracking-wide text-sm text-[#479DA5]">
                Optional Onsite Experience
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                CAAP 3-Day Onsite Residency
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The CAAP 3-Day Onsite Residency is an optional in-person experience
              designed to strengthen academic readiness, confidence, and
              familiarity with Canadian educational environments.
            </p>

            <p>
              During the residency, students participate in abridged
              Ontario-aligned classes, meet Northbridge school leadership, and
              engage with peers enrolled in the CAAP program.
            </p>

            <p>
              The experience also provides real-world insight through guided
              sessions with a licensed Canadian immigration consultant, former
              international students currently studying in Canada, and a
              licensed Canadian realtor.
            </p>
          </div>

          {/* Footer note */}
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
            <HiMapPin className="h-4 w-4" />
            <span>Participation is optional and designed to complement CAAP instruction.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
