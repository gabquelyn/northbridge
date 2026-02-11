import React from "react";

export default function RecommendationTable() {
  return (
    <div className="p-5 md:pt-10 bg-white text-xs md:text-[1rem] h-full flex flex-col gap-1 md:p-3 items-center mt-3 w-full">
      {/* <p className="font-bold">Pathway Alignment Recommendations</p> */}

      <table className="w-full border-collapse overflow-hidden">
        <thead>
          <tr>
            <th className="text-left p-1 md:p-3 border-2 border-slate-100">Pathway</th>
            <th className="text-left p-1 md:p-3 border-2 border-slate-100">
              Core Focus
            </th>
            <th className="text-left p-1 md:p-3 border-2 border-slate-100">
              Recommended Courses
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-slate-100 ">
            <td className="p-1 md:p-3 border-2 border-slate-100">STEM</td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Science, maths, logical problem solving
            </td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Advanced Functions, Calculus, Physics, Chemistry, Computer Science
            </td>
          </tr>
          <tr>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              BUSINESS & ECONOMICS
            </td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Markets, finance, leadership
            </td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Mathematics, Business Leadership, Accounting, Economics
            </td>
          </tr>
          <tr>
            <td className="p-1 md:p-3 border-2 border-slate-100">HUMANITIES & ARTS</td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Communication, culture, creativity
            </td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              English, Writer's Craft, Social Sciences
            </td>
          </tr>
          <tr>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              HEALTH & BIOMEDICAL
            </td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Human sciences, well-being
            </td>
            <td className="p-1 md:p-3 border-2 border-slate-100">
              Biology, Kinesiology, Chemistry
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
