import clsx from "clsx";
import React from "react";

export default function Course({
  title,
  overview,
  skills,
  pathways,
  accent,
}: {
  title: string;
  overview: string;
  skills: string[];
  pathways: string;
  accent: "GRADE 11" | "GRADE 12" | "ELECTIVE";
}) {
  const color =
    accent == "GRADE 11"
      ? "#479DA5"
      : accent == "GRADE 12"
        ? "#f4bd30"
        : "#D96C2C";
  return (
    <div className="bg-white h-full md:p-15 p-8">
      <p className="font-bold">{title}</p>

      <div className="mt-3 md:mt-10 text-xs md:text-[1rem] md:text-justify tracking-wide flex flex-col gap-4">
        <div>
          <p className={`text-[${color}] mb-2`}> Course Overview:</p>
          <p className="">{overview}</p>
        </div>

        <div>
          <p className={`text-[${color}] mb-2`}> Key Skills Developed:</p>
          <div
            className={clsx(
              `rounded-lg p-3`,
              accent == "GRADE 11"
                ? `bg-[#479DA5]/20`
                : accent == "GRADE 12"
                  ? `bg-[#f4bd30]/20`
                  : "bg-[#D96C2C]/20",
            )}
          >
            {skills.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </div>

        <div>
          <p className={`text-[${color}] mb-2`}>Pathways Supported:</p>
          <p>{pathways}</p>
        </div>
      </div>
    </div>
  );
}
