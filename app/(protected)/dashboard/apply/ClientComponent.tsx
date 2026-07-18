"use client";
import React from "react";
import ApplicationProfile from "./ApplicationProfile";

export default function ClientComponent() {
  return (
    <React.Suspense>
      <ApplicationProfile />
    </React.Suspense>
  );
}
