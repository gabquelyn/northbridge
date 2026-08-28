"use client"
import React, { useMemo, useState } from "react";

interface PaginationProps {
  data: any[];
  pageSize?: number;
}
export default function usePagination({ data, pageSize = 8 }: PaginationProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const start = data.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, data.length);

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
  return {
    pageData,
    pageNumbers,
    start,
    end,
    goTo,
    currentPage,
    totalPages,
  };
}
