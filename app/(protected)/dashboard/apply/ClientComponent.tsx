"use client";
import ApplicationPage from "@/app/components/form/ApplicationPage";
import React from "react";

export default function ClientComponent() {
  return (
    <React.Suspense>
      <ApplicationPage />
    </React.Suspense>
  );
}
