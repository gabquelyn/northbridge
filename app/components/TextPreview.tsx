import { useEffect, useState } from "react";

const TxtPreview = ({ url }: { url: string }) => {
  const [content, setContent] = useState<string>("Loading...");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("Failed to load file"));
  }, [url]);

  return (
    <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-auto max-h-125 text-sm">
      {content}
    </pre>
  );
};

export default TxtPreview;