"use client";
import React from "react";
import Article from "./Article";
import Link from "next/link";
import { useBlogs } from "../hooks/useBlog";
export default function Blog() {
  const { data, isPending, isSuccess } = useBlogs();
 
  if (isSuccess)
    return (
      <div className="flex flex-col items-center py-40 px-5 md:px-[15%]">
        <p className="title text-center">
          Northbridge <br />
          <span className="text-[#479DA5]">Collegiate News</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
          {data.blogs.map((blog) => (
            <Article
              key={blog.title}
              id={blog._id}
              title={blog.title}
              preview={blog.description}
              thumbnail={blog.images[0].url}
              details={blog.content}
              date={blog.createdAt}
            />
          ))}
        </div>
      </div>
    );
}
