"use client";
import { useBlogById } from "@/app/hooks/useBlog";
import { useSearchParams } from "next/navigation";
import React from "react";
import BlogForm from "./BlogForm";

export default function CreateBlog() {
  const params = useSearchParams();
  const id = params.get("edit") as string;

  const { data, isLoading, isError, error, isSuccess } = useBlogById(id);

  if (id && isError) {
    console.log(error);
    return <p>Something went wrong</p>;
  }
  return <BlogForm blog={isSuccess ? data.blog : undefined} />;
}
