"use client";
import Search from "@/app/components/atoms/Search";
import CourseFilterDropdown from "@/app/components/CourseFilter";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 10;

export default function ApplicationTable({ data }: { data: Application[] }) {
  const [category, setCategory] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter()


  const filteredData = useMemo(() => {
    return data.filter(
      (d) =>
        d.profile?.bio.firstName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        d.profile?.bio.lastName?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, page]);

  return (
    <div className="bg-white text-sm p-8 rounded-2xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg font-semibold text-gray-900">Applications</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
        <Search value={search} setSearch={setSearch} />

        <CourseFilterDropdown
          categories={[
            "Art",
            "STEM",
            "Business",
            "Life Science",
            "Social Science",
            "Humanities/Law",
          ].map((p, i) => ({ id: i, name: p }))}
          selectedCategory={category}
          onChange={(num) => setCategory(num)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-xs uppercase text-secondary">
              <th className="text-left py-3 px-4 font-medium">Student</th>
              <th className="text-left py-3 px-4 font-medium">Pathway</th>
              <th className="text-left py-3 px-4 font-medium">
                Date submitted
              </th>
              <th className="text-left py-3 px-4 font-medium">Mode</th>
              <th className="text-left py-3 px-4 font-medium">
                Payment status
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((datum, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 cursor-pointer transition border-b border-gray-100"
                onClick={() => router.push(`/dashboard/application/${datum._id}`)}
              >
                <td className="py-4 px-4 border-b border-b-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                      <Image
                        src={datum.profile.documents.passport[0].url}
                        fill
                        className="object-cover"
                        alt="student"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {datum.profile?.bio.firstName}{" "}
                        {datum.profile?.bio.lastName}
                      </span>
                      <span className="text-xs text-secondary">
                        {datum.profile?.bio.email}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 border-b border-b-gray-100 text-gray-600">
                  {datum.profile.academics.pathway}
                </td>

                <td className="py-4 px-4 border-b border-b-gray-100 text-gray-600">
                  {new Date(datum.createdAt).toLocaleDateString()}
                </td>

                <td className="py-4 px-4 border-b border-b-gray-100 text-gray-600 capitalize">
                  {datum.mode}
                </td>

                <td className="py-4 px-4 border-b border-b-gray-100">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      datum.paid
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {datum.paid ? "Paid" : "Unpaid"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-secondary">
          Page {page} of {totalPages}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="action"
          >
            <GrFormPrevious />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
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

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="action"
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
}
