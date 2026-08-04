"use client";
import React, { useMemo, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuFileText } from "react-icons/lu";
import Link from "next/link";

export default function PersonnelTable({
  personnels,
}: {
  personnels: Personnel[];
}) {
  const pageSize = 8;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(personnels.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagePersonnel = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return personnels.slice(start, start + pageSize);
  }, [personnels, currentPage, pageSize]);

  const start = personnels.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, personnels.length);

  const goTo = (p: number) => setPage(Math.min(Math.max(p, 1), totalPages));

  const pageNumbers = useMemo(() => {
    const pages: (number | "…")[] = [];
    const add = (p: number) => pages.push(p);
    const addEllipsis = () => {
      if (pages[pages.length - 1] !== "…") pages.push("…");
    };

    add(1);
    for (let p = currentPage - 1; p <= currentPage + 1; p++) {
      if (p > 1 && p < totalPages) {
        if (p > (pages[pages.length - 1] as number) + 1) addEllipsis();
        add(p);
      }
    }
    if (totalPages > 1) {
      if (totalPages > (pages[pages.length - 1] as number) + 1) addEllipsis();
      add(totalPages);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="w-full">
      <p className="text-lg font-semibold text-gray-900 mb-4">Personnels</p>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-separate border-spacing-0 bg-white">
          <thead>
            <tr className="text-xs uppercase text-secondary bg-gray-50">
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Name
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Email
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Resume
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Cover letter
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {pagePersonnel.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-14 px-4">
                  <div className="flex flex-col items-center justify-center gap-2 text-secondary">
                    <LuFileText size={22} className="text-gray-300" />
                    <p className="text-sm">No personnels yet</p>
                  </div>
                </td>
              </tr>
            ) : (
              pagePersonnel.map((personnel, i) => (
                <tr
                  key={`${personnel._id}`}
                  className="cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3.5 px-4 border-b border-gray-100 align-top">
                    {personnel.name}
                  </td>
                  <td className="py-3.5 px-4 border-b border-gray-100 align-top whitespace-nowrap">
                    {personnel.email}
                  </td>
                  <td>
                    <Link
                      href={`/view?public_id=${personnel.resume[0].public_id}&resource_type=${personnel.resume[0].resource_type}`}
                    >
                      View Resume
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/view?public_id=${personnel.coverLetter[0].public_id}&resource_type=${personnel.coverLetter[0].resource_type}`}
                    >
                      View Cover letter
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {personnels.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
          <p className="text-xs text-secondary">
            Showing <span className="font-medium text-darkBlue">{start}</span>–
            <span className="font-medium text-darkBlue">{end}</span> of{" "}
            <span className="font-medium text-darkBlue">
              {personnels.length}
            </span>
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
