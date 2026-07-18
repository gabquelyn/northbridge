"use client";
import Search from "@/app/components/atoms/Search";
import CourseFilterDropdown from "@/app/components/CourseFilter";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/app/utils/formatCurrency";

const ITEMS_PER_PAGE = 10;
const PAGE_WINDOW = 5; // how many page buttons to show around the current page

// application.completed  -> application fee has been paid
// application.paid       -> student has paid for a course / program
// application.rescinded  -> admission has been rescinded
// application.granted    -> admission has been granted
type StatusFilter = "all" | "completed" | "paid" | "granted" | "rescinded";

const STATUS_OPTIONS: { id: number; name: string; value: StatusFilter }[] = [
  { id: 0, name: "All", value: "all" },
  { id: 1, name: "Fee completed", value: "completed" },
  { id: 2, name: "Paid", value: "paid" },
  { id: 3, name: "Granted", value: "granted" },
  { id: 4, name: "Rescinded", value: "rescinded" },
];

const BADGE_STYLES = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  gray: "bg-gray-200 text-gray-700",
  red: "bg-red-100 text-red-600",
};

function useDebouncedValue<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounced;
}

export default function ApplicationTable({ data }: { data: Application[] }) {
  const [statusId, setStatusId] = useState<number | null>(0); // default: "All"
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();

  const debouncedSearch = useDebouncedValue(search, 250);

  const selectedStatus: StatusFilter =
    STATUS_OPTIONS.find((s) => s.id === statusId)?.value ?? "all";

  const filteredData = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();

    return data.filter((d) => {
      const matchesSearch =
        !term ||
        d.profile?.bio.firstName?.toLowerCase().includes(term) ||
        d.profile?.bio.lastName?.toLowerCase().includes(term);

      if (!matchesSearch) return false;

      switch (selectedStatus) {
        case "all":
          return true;
        case "completed":
          return !!d.completed;
        case "paid":
          return !!d.paid;
        case "granted":
          return !!d.granted;
        case "rescinded":
          return !!d.rescinded;
        default:
          return true;
      }
    });
  }, [data, debouncedSearch, selectedStatus]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));

  // Keep page in range whenever the filtered set shrinks/grows
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, selectedStatus]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, page]);

  const pageNumbers = useMemo(() => {
    const half = Math.floor(PAGE_WINDOW / 2);
    let start = Math.max(1, page - half);
    const end = Math.min(totalPages, start + PAGE_WINDOW - 1);
    start = Math.max(1, end - PAGE_WINDOW + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  // Admission status: rescinded overrides granted (an admission can be granted
  // then later rescinded), granted overrides "under review", and a student who
  // hasn't even completed the application fee is just "pending".
  const getAdmissionInfo = (datum: Application) => {
    if (datum.rescinded) {
      return { label: "Rescinded", style: BADGE_STYLES.red };
    }
    if (datum.granted) {
      return { label: "Admission granted", style: BADGE_STYLES.green };
    }
    if (datum.completed) {
      return { label: "Under review", style: BADGE_STYLES.yellow };
    }
    return { label: "Pending application fee", style: BADGE_STYLES.gray };
  };

  return (
    <div className="bg-white text-sm p-8 rounded-2xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg font-semibold text-gray-900">Applications</p>
        <p className="text-xs text-secondary">
          {filteredData.length} result{filteredData.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
        <Search value={search} setSearch={setSearch} />

        <CourseFilterDropdown
          categories={STATUS_OPTIONS.map(({ id, name }) => ({ id, name }))}
          selectedCategory={statusId}
          onChange={(id) => setStatusId(id)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-xs uppercase text-secondary bg-gray-50">
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Student</th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Pathway</th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Date submitted</th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Mode</th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Application fee</th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Course/program payment</th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap">Admission status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-10 text-center text-secondary">
                  No applications match your search or filter.
                </td>
              </tr>
            ) : (
              paginatedData.map((datum) => {
                const admission = getAdmissionInfo(datum);

                return (
                  <tr
                    key={datum._id}
                    className="hover:bg-gray-50 cursor-pointer transition border-b border-gray-100 last:border-b-0"
                    onClick={() => router.push(`/application/${datum._id}`)}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                          {datum.profile?.documents?.passport?.[0]?.url ? (
                            <Image
                              src={datum.profile.documents.passport[0].url}
                              fill
                              className="object-cover"
                              alt={`${datum.profile?.bio.firstName ?? "Student"} avatar`}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-gray-400">
                              {datum.profile?.bio.firstName?.[0]}
                              {datum.profile?.bio.lastName?.[0]}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col min-w-0">
                          <span className="font-medium text-gray-900 truncate">
                            {datum.profile?.bio.firstName} {datum.profile?.bio.lastName}
                          </span>
                          <span className="text-xs text-secondary truncate">
                            {datum.profile?.bio.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-gray-600 whitespace-nowrap">
                      {datum.profile?.academics.pathway}
                    </td>

                    <td className="py-4 px-4 text-gray-600 whitespace-nowrap">
                      {new Date(datum.createdAt).toLocaleDateString()}
                    </td>

                    <td className="py-4 px-4 text-gray-600 capitalize whitespace-nowrap">
                      {datum.mode}
                    </td>

                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          datum.completed ? BADGE_STYLES.green : BADGE_STYLES.red
                        }`}
                      >
                        {datum.completed ? "Completed" : "Pending"}
                      </span>
                    </td>

                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          datum.paid ? BADGE_STYLES.green : BADGE_STYLES.red
                        }`}
                      >
                        {datum.paid ? "Paid" : "Unpaid"}
                      </span>
                    </td>

                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${admission.style}`}
                      >
                        {admission.label}
                      </span>
                    </td>

                    {/* <td className="py-4 px-4 text-gray-600 whitespace-nowrap">
                      {datum?.outstanding ? formatCurrency(datum.outstanding) : "-"}
                    </td> */}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
          <p className="text-sm text-secondary">
            Page {page} of {totalPages}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="action disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <GrFormPrevious />
            </button>

            {pageNumbers[0] > 1 && (
              <>
                <button
                  onClick={() => setPage(1)}
                  className="px-3 py-2 rounded-lg border text-sm text-gray-600 hover:bg-gray-50"
                >
                  1
                </button>
                {pageNumbers[0] > 2 && <span className="px-1 text-gray-400">…</span>}
              </>
            )}

            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  page === num
                    ? "bg-primary text-white border-primary"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {num}
              </button>
            ))}

            {pageNumbers[pageNumbers.length - 1] < totalPages && (
              <>
                {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                  <span className="px-1 text-gray-400">…</span>
                )}
                <button
                  onClick={() => setPage(totalPages)}
                  className="px-3 py-2 rounded-lg border text-sm text-gray-600 hover:bg-gray-50"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="action disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <GrFormNext />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}