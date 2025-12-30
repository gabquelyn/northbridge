import React from "react";

export default function Message() {
  const details = [
    {
      name: "Risk Reduction",
      title:
        "We address potential hurdles before they become academic difficulties or lead to wasted tuition.",
    },
    {
      name: "Investment Protection",
      title:
        "Preparation is the best way to ensure your family's investment yields a degree and a career.",
    },
    {
      name: "Confidence, Not Overwhelm",
      title: `Your child will arrive in Canada feeling aligned and empowered, rather than struggling to keep up. The Canadian Academic Alignment Program ensures that the first step onto Canadian soil is taken with total confidence`,
    },
  ];
  return (
    <div className="px-[15%] py-20">
      <div className="grid grid-cols-2 gap-15">
        <div className="text-left">
          <p className="text-[2.5rem] font-bold capitalize">
            <span className="text-[#479DA5]">a message to parents:</span> <br />
            Protect your investment
          </p>
          <p>
            We understand that sending a child abroad is a significant emotional
            and financial commitment. The CAAP model is designed to sit before
            the point of risk.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {details.map((d) => (
            <div
              className="bg-[#293B59] flex flex-col gap-3 text-white rounded-md p-4 px-6"
              key={d.name}
            >
              <p className="font-bold">{d.name}</p>
              <p>{d.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
