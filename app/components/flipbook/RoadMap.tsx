import clsx from "clsx";
import React from "react";

/**
 * Northbridge Vertical Academic Roadmap
 * AY12 → CAAP → Grade 11 → Grade 12
 */

const programs = [
  {
    key: "caap",
    label: "CAAP",
    desc: "Career & academic pathway planning.",
    highlight: false,
  },
  {
    key: "g11",
    label: "Grade 11",
    desc: "Advanced subject specialization and continuous assessment.",
    highlight: true,
  },
  {
    key: "g12",
    label: "Grade 12",
    desc: "Final preparation for exams, university entry, and global exposure.",
    highlight: true,
  },
  {
    key: "ay12",
    label: "AY12",
    desc: "Foundation year focused.",
    highlight: false,
  },
];

export default function NorthbridgeRoadmap() {
  return (
    <section className="w-full p-5 bg-white hidden md:block">
      <div className="max-w-4xl mx-auto px-6">
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
          <div className="relative flex flex-col gap-5">
            {programs.map((item, idx) => (
              <div
                key={item.key}
                className={`flex w-full items-center ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className="w-50 px-6">
                  <div
                    className={`p-6 rounded-xl border shadow-sm transition-all duration-300 ${
                      item.highlight
                        ? "border-[#479DA5] bg-[#479DA5]/10"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <p className="text-xs text-center font-semibold tracking-wide text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs text-slate-600 text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center marker */}
                <div className="relative flex flex-col items-center w-0">
                  <span
                    className={clsx(
                      `w-4 absolute h-4 rounded-full z-10 ${
                        item.highlight ? "bg-white border-2 border-[#479DA5]" : ""
                      }`,
                      idx == 1
                        ? "right-3 -top-2"
                        : idx == 2
                          ? "left-2 -top-2"
                          : "",
                    )}
                  />
                  <span
                    className={clsx(
                      " bg-[#479DA5]/40",
                      idx == 1 || idx == 2 ? "h-px w-12" : "",
                    )}
                  />
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
