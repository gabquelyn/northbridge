"use client";
import { useState } from "react";

const pages = ["Page 1", "Page 2", "Page 3"];

export default function FlipBook() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Book */}
      <div
        className="relative w-[380px] h-[520px]"
        style={{ perspective: "2000px" }}
      >
        {pages.map((content, i) => (
          <div
            key={i}
            className={`
              absolute inset-0
              origin-left
              transition-transform duration-700 ease-in-out
              [transform-style:preserve-3d]
              ${page >= i ? "-rotate-y-180" : "rotate-y-0"}
            `}
            style={{ zIndex: pages.length - i }}
          >
            {/* Front */}
            <div className="
              absolute inset-0
              bg-white rounded-xl shadow-xl
              p-6
              backface-hidden
            ">
              {content}
            </div>

            {/* Back */}
            <div className="
              absolute inset-0
              bg-gray-100 rounded-xl shadow-xl
              p-6
              rotate-y-180
              backface-hidden
            ">
              Back of {content}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          ◀ Prev
        </button>

        <button
          onClick={() => setPage(Math.min(page + 1, pages.length))}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}