import React from "react";
import ClientComponent from "./ClientComponent";
import { Metadata } from "next";
export const metadat: Metadata = {
  title: "Recover Account",
  description: "Fill your email to recover your account",
};
export default function page() {
  return <ClientComponent />;
}
