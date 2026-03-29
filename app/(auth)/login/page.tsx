import React from "react";
import ClientComponent from "./ClientComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to manage your child's application to Northbridge Collegiate.",
};
export default function page() {
  return (
    <React.Suspense>
      <ClientComponent />
    </React.Suspense>
  );
}
