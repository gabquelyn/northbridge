import React from "react";
import clsx from "clsx";
import Image from "next/image";
export default function Programs({
  data,
  programChange,
  canadian,
}: {
  data: string[];
  programChange: (e: Programs, checked: boolean) => void;
  canadian: boolean;
}) {
  const programs: {
    image: string;
    name: string;
    description: string;
    value: Programs;
  }[] = [
    {
      image: "/asset/caap.png",
      name: "Canadian Academic Alignment Program",
      description:
        "Don't repeat a year—align it. CAAP recognizes your prior learning to fast-track your success in Canadian education.",
      value: "CAAP",
    },
    {
      image: "/asset/grade11.png",
      name: "Grade 11 OSSD",
      description:
        "Ideal for students prepared to begin Ontario curriculum-based secondary studies following Grade 10-level education",
      value: "GRADE11",
    },
    {
      image: "/asset/grade12.png",
      name: "Grade 12 OSSD",
      description:
        "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      value: "GRADE12",
    },
    {
      image: "/asset/ay12.png",
      name: "Advantage Year 12 (AY12) + Grade 12",
      description:
        "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      value: "AY12",
    },
  ];

  return (
    <div>
      {!canadian && (
        <p className="text-secondary italic mb-3">
          CAAP is compulsory for non-canadian student (The starting point)
        </p>
      )}

      <div className="grid grid-cols-2 gap-5">
        {programs.map((program) => (
          <label className="w-full cursor-pointer" key={program.name}>
            <div
              className={clsx(
                "relative border rounded-2xl p-6 h-44 flex flex-col items-center justify-center text-center transition-all duration-300",
                "shadow-sm hover:shadow-md",
                data.includes(program.value)
                  ? "border-primary bg-primary/10 scale-[1.02]"
                  : "border-slate-200 hover:border-primary/40 bg-[#F9FAFB]",
              )}
            >
              <input
                type="checkbox"
                name="canadian"
                value={program.value}
                disabled = {!canadian && (program.value == "CAAP")}
                checked={data.includes(program.value)}
                className="hidden"
                onChange={(e) => {
                  programChange(e.target.value as Programs, e.target.checked);
                }}
              />
              <div className="flex items-center flex-col gap-2 justify-center text-center">
                <Image src={program.image} alt="flag" height={20} width={30} />
                <div>
                  <p className="">{program.name}</p>
                  <p className="text-secondary text-xs">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
