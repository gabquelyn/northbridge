import React from "react";
import Image from "next/image";
import clsx from "clsx";
export default function MediaPage({src, className} : {src: string, className?: string}) {
  return (
    <div className="relative z-10 h-full w-full">
      <Image src={src} fill alt="image" className={clsx("object-cover", className)} />
   
    </div>
  );
}
