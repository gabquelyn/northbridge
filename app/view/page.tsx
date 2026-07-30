import React from "react";
import FileViewer from "./FileViewer";

export default function page() {
  return (
    <React.Suspense>
      <FileViewer />
    </React.Suspense>
  );
}
