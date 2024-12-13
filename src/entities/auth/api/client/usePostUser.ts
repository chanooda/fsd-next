import { GetUserRes, postUser } from "@/shared/api";
import { useMutation } from "@/shared/config/client";
import { ClientResponseError } from "pocketbase";
import { PostUserParams } from "../../model/auth";

export const usePostUser = () => {
  return useMutation<GetUserRes, ClientResponseError, PostUserParams>({
    mutationFn: async (req: PostUserParams) => {
      return await postUser(req);
    },
  });
};
