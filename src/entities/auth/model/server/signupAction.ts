"use server";

import { postUser } from "@/shared/api";
import { zodErrorFlattenString } from "@/shared/config";
import { redirect } from "next/navigation";
import { ClientResponseError } from "pocketbase";
import { ZodError } from "zod";
import { PostUserException, PostUserParams, postUserSchema } from "../auth";

export const signupAction = async (
  prevState: PostUserException,
  formData: FormData,
) => {
  const req: PostUserParams = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordConfirm") as string,
  };

  try {
    postUserSchema.parse(req);
    await postUser(req);

    redirect("/");
  } catch (e) {
    if (e instanceof ZodError) {
      console.error(e.flatten());
      return zodErrorFlattenString<PostUserParams>(e.flatten().fieldErrors);
    } else if (e instanceof ClientResponseError) {
      console.error(e.response.data);
      return e.response.data as PostUserException;
    }
    return {};
  }
};
