"use client";
import moment from "moment";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuFileText } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "@/app/components/atoms/Button";
import Link from "next/link";

import DeleteBlog from "./DeleteBlog";
import { useRouter } from "next/navigation";

interface BlogTableProps {
  blogs: Blog[];
  pageSize?: number;
  onRowClick?: (blog: Blog) => void;
}

export default function BlogTable({
  blogs,
  pageSize = 8,
  onRowClick,
}: BlogTableProps) {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const totalPages = Math.max(1, Math.ceil(blogs.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const [remove, setRemove] = useState<Blog | null>(null);
  const pageBlogs = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return blogs.slice(start, start + pageSize);
  }, [blogs, currentPage, pageSize]);

  const start = blogs.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, blogs.length);

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
      {remove && <DeleteBlog onClose={() => setRemove(null)} blog={remove} />}
      <p className="text-lg font-semibold text-gray-900 mb-4">Blogs</p>
      <div className="flex justify-end my-3">
        <Link href="/blog/create">
          <Button>
            <p className="text-sm">Create new Blog Post</p>
          </Button>
        </Link>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm border-separate border-spacing-0 bg-white">
          <thead>
            <tr className="text-xs uppercase text-secondary bg-gray-50">
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Title
              </th>
              <th className="text-left py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100">
                Date
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {pageBlogs.length === 0 ? (
              <tr>
                <td colSpan={2} className="py-14 px-4">
                  <div className="flex flex-col items-center justify-center gap-2 text-secondary">
                    <LuFileText size={22} className="text-gray-300" />
                    <p className="text-sm">No blog posts yet</p>
                  </div>
                </td>
              </tr>
            ) : (
              pageBlogs.map((blog, i) => (
                <tr
                  key={`${blog.title}-${i}`}
                  className="cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3.5 px-4 border-b border-gray-100 align-top">
                    <div className="flex items-start gap-3">
                      {blog.images?.[0]?.url ? (
                        <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-gray-100">
                          <Image
                            src={blog.images[0].url}
                            alt=""
                            className="object-cover"
                            fill
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                          <LuFileText size={16} className="text-gray-300" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-darkBlue truncate group-hover:text-primary transition-colors">
                          {blog.title}
                        </p>
                        <p className="text-xs text-secondary truncate max-w-md mt-0.5">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 border-b border-gray-100 align-top whitespace-nowrap">
                    <span className="text-sm text-secondary">
                      {moment(blog.createdAt).format("YYYY MMM D, h:mm A")}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          router.push(`/blog/create?edit=${blog._id}`)
                        }
                      >
                        <FiEdit />
                      </button>

                      <button
                        className="cursor-pointer"
                        onClick={() => setRemove(blog)}
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {blogs.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
          <p className="text-xs text-secondary">
            Showing <span className="font-medium text-darkBlue">{start}</span>–
            <span className="font-medium text-darkBlue">{end}</span> of{" "}
            <span className="font-medium text-darkBlue">{blogs.length}</span>
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
