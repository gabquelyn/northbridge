"use client"
import React from "react";
import { useBlogs } from "@/app/hooks/useBlog";
import BlogTable from "./components/BlogTable";

export default function page() {
  const { data, isLoading, isSuccess, isError } = useBlogs();

  if (isSuccess)
    return (
      <div>
        <BlogTable blogs={data.blogs} />
      </div>
    );
}
