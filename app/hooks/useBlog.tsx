import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  create_blog,
  delete_blog,
  get_all_blogs,
  get_blog,
  update_blog,
} from "../lib/blog";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: get_all_blogs,
    retry: false,
  });
};

export const useBlogById = (id: string) => {
  return useQuery({
    queryKey: [id],
    queryFn: () => get_blog(id),
    retry: false,
  });
};

export const usePostBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: create_blog,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: update_blog,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      queryClient.invalidateQueries({
        queryKey: ["blog"],
      });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: delete_blog,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      queryClient.invalidateQueries({
        queryKey: ["blog"],
      });
    },
  });
};
