"use server";

import { PostUserException, PostUserParams } from "@/entities/auth";
import { postUserSchema } from "@/entities/auth/model";
import { postUser } from "@/shared/api";
import { zodErrorFlattenString } from "@/shared/config";
import { redirect } from "next/navigation";
import { ClientResponseError } from "pocketbase";
import { ZodError } from "zod";

export const signupAction = async (
  prevState: PostUserException,
  formData: FormData,
) => {
  let success = false;
  const req: PostUserParams = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordConfirm") as string,
  };

  try {
    postUserSchema.parse(req);
    await postUser(req);
    success = true;
  } catch (e) {
    if (e instanceof ZodError) {
      console.error(e.flatten());
      return zodErrorFlattenString<PostUserParams>(e.flatten().fieldErrors);
    } else if (e instanceof ClientResponseError) {
      console.error(e.response);
      return e.response;
    }
    return {};
  }
  redirect("/signin");
};
