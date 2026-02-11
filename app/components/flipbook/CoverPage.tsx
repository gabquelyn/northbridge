import React from "react";
import clsx from "clsx";
export default function CoverPage({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div
        className={clsx(
          "absolute inset-0 bg-cover bg-center bg-no-repeat",
          image,
        )}
      />
      {/* ================= Premium Overlay ================= */}
      <div className="absolute inset-0 bg-linear-to-b from-[#00355D] via-[#00355D]/85 to-[#00355D]" />

      {/* ================= Soft Grain / Depth Layer ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {children}
    </div>
  );
}
