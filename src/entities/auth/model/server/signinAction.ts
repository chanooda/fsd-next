"use server";

import { signin } from "@/shared/api";
import { zodErrorFlattenString } from "@/shared/config";
import { redirect } from "next/navigation";
import { ClientResponseError } from "pocketbase";
import { ZodError } from "zod";
import { SigninException, SigninParams, signinSchema } from "../auth";

export const signinAction = async (
  state: SigninException,
  formData: FormData,
) => {
  let success = false;

  const req: SigninParams = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    signinSchema.parse(req);
    await signin(req);
    success = true;
  } catch (e) {
    if (e instanceof ZodError) {
      console.error(e.flatten());
      return zodErrorFlattenString<SigninParams>(e.flatten().fieldErrors);
    } else if (e instanceof ClientResponseError) {
      console.error(e.response);
      return { password: "이메일과 비밀번호를 확인해주세요." };
    }
    console.error(e);
    return {};
  }
  redirect("/");
};
