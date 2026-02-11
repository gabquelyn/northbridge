import React from "react";

/**
 * Northbridge Vertical Academic Roadmap
 * AY12 → CAAP → Grade 11 → Grade 12
 */

const programs = [
  {
    key: "ay12",
    label: "AY12",
    title: "Academic Year 12",
    desc: "Foundation year focused on academic readiness and core skills.",
    highlight: false,
  },
  {
    key: "caap",
    label: "CAAP",
    title: "CAAP Program",
    desc: "Career & academic pathway planning with guided assessments.",
    highlight: true,
  },
  {
    key: "g11",
    label: "Grade 11",
    title: "Senior Secondary I",
    desc: "Advanced subject specialization and continuous assessment.",
    highlight: false,
  },
  {
    key: "g12",
    label: "Grade 12",
    title: "Senior Secondary II",
    desc: "Final preparation for exams, university entry, and global exposure.",
    highlight: true,
  },
];

export default function NorthbridgeRoadmap() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#00355D] mb-16 text-center">
          Academic Journey at Northbridge
        </h2>

        <div className="relative">
          {/* Vertical dotted SVG path */}
          <svg
            viewBox="0 0 200 900"
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[200px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 100 40 C 40 200, 40 350, 100 500 S 160 750, 100 860"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="6 12"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Timeline items */}
          <div className="relative flex flex-col gap-24">
            {programs.map((item, idx) => (
              <div
                key={item.key}
                className={`flex w-full items-center ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className="w-1/2 px-6">
                  <div
                    className={`p-6 rounded-xl border shadow-sm transition-all duration-300 ${
                      item.highlight
                        ? "border-[#D96C2C] bg-[#FFF7F2]"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-wide text-slate-500">
                      {item.label}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-[#00355D]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center marker */}
                <div className="relative flex flex-col items-center w-0">
                  <span
                    className={`w-4 h-4 rounded-full z-10 ${
                      item.highlight
                        ? "bg-[#D96C2C]"
                        : "bg-[#00355D]"
                    }`}
                  />
                  <span className="w-px h-12 bg-slate-300" />
                </div>

                {/* Spacer */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
