import React from "react";

export default function Section({
  title,
  children,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-[#f2f2f2] rounded-2xl shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-semibold border-[#e9e5e5] border-b-2 pb-2">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
