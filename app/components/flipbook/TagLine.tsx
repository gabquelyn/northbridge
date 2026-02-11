import React from "react";

export default function TagLine({ tag }: { tag: string }) {
  return (
    <p className="md:text-2xl text-[#479DA5] text-center uppercase font-bold md:mb-6 mb-2">
      {tag}
    </p>
  );
}
