import React from "react";
import Layout from "./components/Layout";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
}
