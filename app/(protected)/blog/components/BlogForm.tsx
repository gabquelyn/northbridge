"use client";
import React, { useEffect, useState } from "react";
import RichTextEditor from "./Editior";
import Input from "@/app/components/Input";
import Upload from "@/app/components/form/Upload";
import Button from "@/app/components/atoms/Button";
import { usePostBlog, useUpdateBlog } from "@/app/hooks/useBlog";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogData {
  title: string;
  description: string;
  content: string;
}
export default function BlogForm({ blog }: { blog?: Blog }) {
  const [data, setData] = useState<BlogData>({
    title:  "",
    description:  "",
    content:  "",
  });
  useEffect(() => {
    if (blog) {
      setData({
        title: blog.title,
        description: blog.description,
        content: blog.content,
      });
    }
  }, [blog]);
  const inputs = [
    { name: "title", label: "Blog Label" },
    { name: "description", label: "Blog Description" },
  ];
  const { mutate, isPending, isError, error, isSuccess } = usePostBlog();

  const {
    mutate: update,
    isPending: updating,
    isError: failedtToUpdate,
    error: failedToUpdateError,
    isSuccess: updated,
  } = useUpdateBlog();

  const [image, setImage] = useState<File[] | undefined>();
  const router = useRouter();
  const onChangeHandler: inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const createPostHandler = () => {
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("content", data.content);
    if (image) {
      for (const i of image) {
        formdata.append("images", i);
      }
    }
    if (blog) {
      update({
        data: formdata,
        id: blog._id,
      });
      return;
    }
    mutate(formdata);
  };

  // Effects
  useEffect(() => {
    if (isSuccess || updated) {
      toast.success("Blog posted");
      router.push("/blog");
    }
    if (isError || failedtToUpdate) {
      const message =
        (error as AxiosError<ApiErrorMessage>)?.response?.data?.message ||
        (failedToUpdateError as AxiosError<ApiErrorMessage>)?.response?.data
          ?.message;
      toast.error(message);
    }
  }, [isSuccess, isError, failedtToUpdate, updated]);

  return (
    <section className="md:px-[10%] lg:px-[15%] text-sm">
      <p className="text-xl mb-10 font-bold">Create blog post</p>
      <div className="space-y-5">
        {inputs.map((i) => (
          <Input
            label={i.label}
            value={data[i.name as keyof BlogData]}
            key={i.name}
            onChange={onChangeHandler}
            name={i.name}
            type="text"
          />
        ))}

        <div>
          <label className="leading-relaxed mb-2">Blog Content</label>
          <RichTextEditor
            content={data.content}
            onChange={(content) => setData((prev) => ({ ...prev, content }))}
            minHeight={480}
          />
        </div>

        <div>
          <Upload
            imagesOnly
            name="image"
            fileChangeHandler={(file, name) => setImage(file)}
            files={image || []}
            label="Blog images"
            multiple
          />
        </div>

        {blog?.images && (
          <div>
            {blog.images.map((image) => (
              <div
                className="h-30 w-30 overflow-hidden rounded-md relative"
                key={image._id}
              >
                <Image src={image.url} alt={blog.title} fill />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end mt-3">
          <Button
            onClick={createPostHandler}
            disabled={
              !data.content ||
              !data.description ||
              !data.title ||
              (!image?.length && !blog?.images) ||
              isPending ||
              updating
            }
          >
            {isPending || updating ? (
              <ClipLoader size={15} color="white" />
            ) : (
              <p className="px-2">
                {blog ? "Update blog post" : "Create blog post"}
              </p>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
