import React from "react";

export default function Special() {
  const details = [
    {
      title: "The Northbridge Academic Bridge Model",
      label:
        "Northbridge is a leader in academic bridge education. Our unique model combines the authorized Ontario Secondary School Diploma (OSSD) curriculum with a structured alignment process. This ensures that students from diverse educational backgrounds are fully prepared for the rigors of Canadian school programming.",
      list: [],
    },
    {
      title: "The Canadian University Preparation Framework",
      label:
        "Entering a Canadian university requires more than just high grades; it requires mastery of specific academic conventions. Our framework is meticulously designed to introduce you to:",
      list: [
        "Academic Writing & Research: Master the specific citation and literacy standards required by Canadian professors.",
        "Self-Directed Learning: Develop the independence and time-management skills expected in North American higher education.",
        "Assessment Familiarity: Get comfortable with the testing and grading formats used in Canadian classrooms.",
        "Classroom Norms: Build the confidence to participate in discussions, seminars, and collaborative projects.",
      ],
    },
    {
      title: "Program Design and Scope",
      label:
        "Northbridge Collegiate delivers Canadian-aligned secondary programming that includes:",
      list: [
        "Academic alignment and placement processes",
        "Ontario curriculum-based instruction",
        "Structured academic oversight",
        "Defined progression pathways",
      ],
    },
  ];
  return (
    <div className="py-20">
      <p className="text-[2.5rem] font-bold text-center capitalize">
        How we are <span className="text-[#479DA5]">Different.</span>
      </p>

      <div className="px-[15%] mt-10 flex flex-col gap-15">
        {details.map((d, i) => (
          <div className="grid grid-cols-2 gap-10" key={i}>
            <div className="flex gap-10 items-center">
              <p className="text-9xl text-[#293B59]">{`0${i + 1}`}</p>
              <div className="bg-slate-300 h-px w-80"></div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">{d.title}</p>
              <p>{d.label}</p>
              <ul className="list-disc">
                {d.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
