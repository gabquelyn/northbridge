import React from "react";
import CreateBlog from "../components/CreateBlog";

export default function page() {
  return (
    <React.Suspense>
      <CreateBlog />
    </React.Suspense>
  );
}
