"use client";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { LuFileText } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "@/app/components/atoms/Button";
import Link from "next/link";

import DeleteBlog from "./DeleteBlog";
import { useRouter } from "next/navigation";
import usePagination from "@/app/hooks/usePagination";
import Pagination from "@/app/components/Pagination";

interface BlogTableProps {
  blogs: Blog[];
  pageSize?: number;
  onRowClick?: (blog: Blog) => void;
}

export default function BlogTable({ blogs, pageSize = 8 }: BlogTableProps) {
  const router = useRouter();
  const [remove, setRemove] = useState<Blog | null>(null);
  const { pageData, pageNumbers, start, end, goTo, currentPage, totalPages } =
    usePagination({ data: blogs });

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
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="text-xs uppercase text-secondary bg-gray-50">
              <th className="table-head">
                Title
              </th>
              <th className="table-head">
                Date
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {(pageData as Blog[]).length === 0 ? (
              <tr>
                <td colSpan={2} className="py-14 px-4">
                  <div className="flex flex-col items-center justify-center gap-2 text-secondary">
                    <LuFileText size={22} className="text-gray-300" />
                    <p className="text-sm">No blog posts yet</p>
                  </div>
                </td>
              </tr>
            ) : (
              (pageData as Blog[]).map((blog, i) => (
                <tr
                  key={`${blog._id}`}
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

      <Pagination
        length={blogs.length}
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
