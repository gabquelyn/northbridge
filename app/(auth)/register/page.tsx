import React from "react";
import ClientComponent from "./ClientComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register",
  description:
    "Create an account to start and manage your child's application to Northbridge Collegiate.",
};
export default function page() {
  return (
    <div>
      <ClientComponent />
    </div>
  );
}
