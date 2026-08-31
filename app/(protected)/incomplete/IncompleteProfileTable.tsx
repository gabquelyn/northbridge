"use client";
import Pagination from "@/app/components/Pagination";
import usePagination from "@/app/hooks/usePagination";
import moment from "moment";
import React from "react";

export default function IncompleteProfileTable({ data }: { data: Profile[] }) {
  const { pageData, pageNumbers, start, end, goTo, currentPage, totalPages } =
    usePagination({ data, pageSize: 12 });
  return (
    <div className="w-full">
      <p className="text-lg font-semibold text-gray-900 mb-4">
        Incomplete Profiles
      </p>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="text-xs uppercase text-secondary bg-gray-50">
              <th className="table-head">Guardian</th>
              <th className="table-head">Created</th>
              <th className="table-head">Updated</th>
            </tr>
          </thead>
          <tbody>
            {(pageData as ProfileData[]).map((datum) => (
              <tr key={datum._id}>
                <td className="table-td">{datum.guardian.email}</td>
                <td className="table-td">
                  {moment(datum.createdAt).format("YYYY MMM D, h:mm A")}
                </td>
                <td className="table-td">
                  {moment(datum.updatedAt).format("YYYY MMM D, h:mm A")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        length={data.length}
        end={end}
        start={start}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        totalPages={totalPages}
        goTo={goTo}
      />
    </div>
  );
}
