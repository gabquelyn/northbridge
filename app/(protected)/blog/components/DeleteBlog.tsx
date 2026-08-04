"use client";
import Modal from "@/app/components/Modal";
import { useDeleteBlog } from "@/app/hooks/useBlog";
import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { TbAlertTriangle } from "react-icons/tb";

export default function DeleteBlog({
  blog,
  onClose,
}: {
  blog: Blog;
  onClose: () => void;
}) {
  const { isPending, isSuccess, mutate } = useDeleteBlog();

  const deleteBlogHandler = () => {
    mutate(blog._id);
  };

  // Close the modal automatically once the delete succeeds
  useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess, onClose]);

  return (
    <Modal onClose={onClose}>
      <div className="w-full">
        <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <TbAlertTriangle size={22} className="text-red-500" />
          </div>

          <h2 className="mt-4 text-base font-semibold text-darkBlue">
            Delete blog post?
          </h2>

          <p className="mt-1.5 text-sm text-secondary">
            This action can&apos;t be undone. This will permanently delete
          </p>
          <p className="mt-1 text-sm font-medium text-darkBlue truncate max-w-full px-2">
            &ldquo;{blog.title}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 border-t border-gray-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            className={[
              "flex-1 inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium transition-colors",
              isPending
                ? "cursor-not-allowed text-gray-300"
                : "text-secondary hover:bg-gray-50 hover:text-darkBlue",
            ].join(" ")}
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={deleteBlogHandler}
            disabled={isPending}
            className={[
              "flex-1 inline-flex items-center cursor-pointer justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors",
              isPending
                ? "cursor-not-allowed bg-red-300"
                : "bg-red-500 hover:bg-red-600",
            ].join(" ")}
          >
            {isPending && <ClipLoader size={15} />}
            {isPending ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
