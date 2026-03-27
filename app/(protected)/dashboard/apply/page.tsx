import React from "react";
import ClientComponent from "./ClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit your application",
  description: "Apply for programs and courses",
};

export default function page() {
  return <ClientComponent />;
}
