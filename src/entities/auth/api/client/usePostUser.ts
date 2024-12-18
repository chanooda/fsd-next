"use client";

import { UserGetRes, postUser } from "@/shared/api";
import { useMutation } from "@/shared/lib/client";
import { ClientResponseError } from "pocketbase";
import { PostUserParams } from "../authDataType";

export const usePostUser = () => {
  return useMutation<UserGetRes, ClientResponseError, PostUserParams>({
    mutationFn: async (req: PostUserParams) => {
      return await postUser(req);
    },
  });
};
