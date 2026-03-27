"use client";
import React from "react";
import ClientComponent from "./ClientComponent";

export default function page() {
  return (
    <React.Suspense>
      <ClientComponent />
    </React.Suspense>
  );
}
