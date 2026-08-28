import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationProps {
  length: number;
  end: number;
  start: number;
  currentPage: number;
  totalPages: number;
  pageNumbers: (number | "…")[];
  goTo: (page: number) => void;
}
export default function Pagination({
  length,
  end,
  start,
  currentPage,
  pageNumbers,
  totalPages,
  goTo,
}: PaginationProps) {
  return (
    <div>
      {/* Pagination */}
      {length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
          <p className="text-xs text-secondary">
            Showing <span className="font-medium text-darkBlue">{start}</span>–
            <span className="font-medium text-darkBlue">{end}</span> of{" "}
            <span className="font-medium text-darkBlue">{length}</span>
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={[
                "inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 transition-colors",
                currentPage === 1
                  ? "cursor-not-allowed text-gray-300"
                  : "text-secondary hover:bg-gray-50 hover:text-darkBlue",
              ].join(" ")}
            >
              <LuChevronLeft size={16} />
            </button>

            {pageNumbers.map((p, idx) =>
              p === "…" ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-1.5 text-sm text-gray-300 select-none"
                >
                  …
                </span>
              ) : (
                <button
                  key={p}
                  type="button"
                  onClick={() => goTo(p)}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={[
                    "inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium transition-colors",
                    p === currentPage
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-gray-50 hover:text-darkBlue",
                  ].join(" ")}
                >
                  {p}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={[
                "inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 transition-colors",
                currentPage === totalPages
                  ? "cursor-not-allowed text-gray-300"
                  : "text-secondary hover:bg-gray-50 hover:text-darkBlue",
              ].join(" ")}
            >
              <LuChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
