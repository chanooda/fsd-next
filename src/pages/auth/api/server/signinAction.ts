"use server";

import { SignInData, SigninParams } from "@/entities/auth";
import { signinSchema } from "@/entities/auth/model";
import { signin } from "@/shared/api";
import { ServerActionResponse } from "@/shared/api/global";
import { LINK } from "@/shared/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signinAction = async (
  state: ServerActionResponse<SignInData, unknown> | undefined,
  formData: FormData,
): Promise<ServerActionResponse<SignInData, unknown> | undefined> => {
  const req: SigninParams = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  let token = "";

  try {
    signinSchema.parse(req);
    const data = await signin(req);

    token = data.token;
    // return {
    //   isSuccess: true,
    //   isError: false,
    //   data,
    //   error: undefined,
    // };
  } catch (e) {
    return {
      isSuccess: true,
      isError: false,
      data: undefined,
      error: undefined,
    };
  }

  if (token) {
    const cookieStore = await cookies();
    cookieStore.set("token", token);
    redirect(LINK.HOME);
  }
};
