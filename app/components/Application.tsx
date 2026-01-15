import React from "react";
import Image from "next/image";
import clsx from "clsx";
export default function Application() {
  const content = [
    {
      title: "Enquire with Northbridge Collegiate",
      image: "/asset/w.png",
      instruction: "Submit an online enquiry form.",
    },
    {
      title: "Apply to Northbridge Collegiate",
      image: "/asset/x.png",
      instruction:
        "Submit an digital application, required documents, and placement assessment.",
    },
    {
      title: "Receive Your Northbridge Collegiate Offer",
      image: "/asset/y.png",
      instruction:
        "Admission results and next steps are shared through your private account.",
    },
    {
      title: "Enroll at Northbridge Collegiate",
      image: "/asset/z.png",
      instruction:
        "Confirm your place by accepting the offer and completing enrolment requirements.",
    },
  ];
  return (
    <div className="flex py-10 flex-col items-center gap-5 px-5 md:px-[20%]">
      <p className="title text-center">
        How to Apply to
        <br />
        <span className="text-[#479DA5]">Northbridge Collegiate</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {content.map((c, i) => (
          <div key= {i} className="bg-[#479DA526] flex gap-8 p-7 md:p-15 rounded-xl">
            <div className={clsx("relative", i==0 ? "h-15 w-15" : i ==3 ? "h-22 w-22" : "h-20 w-20 ")}>
              <Image src={c.image} alt="" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#479DA5] text-[1.2rem] font-bold">
                0{`${i + 1}`}
              </p>
              <p className="text-[1.2rem]">{c.title}</p>
              <p className="text-sm">{c.instruction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
