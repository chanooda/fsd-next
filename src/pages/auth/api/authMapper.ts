import { SigninException, SigninParams } from "@/entities/auth";
import { zodErrorFlattenString } from "@/shared/config";
import { ClientResponseError } from "pocketbase";
import { ZodError } from "zod";

export const signinErrorMapper = (e: unknown): SigninException => {
  if (e instanceof ZodError) {
    return zodErrorFlattenString<SigninParams>(e.flatten().fieldErrors);
  } else if (e instanceof ClientResponseError) {
    return { password: "이메일과 비밀번호를 확인해주세요." };
  }
  return {};
};
