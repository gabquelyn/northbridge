import React from "react";
import Image from "next/image";
export default function MediaPage({src} : {src: string}) {
  return (
    <div className="relative z-10 h-full w-full">
      <Image src={src} fill alt="image" className="object-cover" />
   
    </div>
  );
}
