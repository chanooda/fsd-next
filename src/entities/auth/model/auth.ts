import { GetUserRes, PostUserReq, SigninReq } from "@/shared/api";
import zod from "zod";

export const postUserSchema = zod
  .object({
    name: zod.string().min(1, "이름을 입력해주세요."),
    email: zod
      .string()
      .email("알맞은 형태의 이메일을 입력해주세요.")
      .min(1, "이메일을 입력해주세요."),
    password: zod.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    passwordConfirm: zod.string().min(1, "비밀번호 확인을 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export const signinSchema = zod.object({
  email: zod
    .string()
    .email("알맞은 형태의 이메일을 입력해주세요.")
    .min(1, "이메일을 입력해주세요."),
  password: zod.string().min(1, "비밀번호를 입력해주세요."),
});

export interface PostUserParams extends PostUserReq {}
export type PostUserException = Partial<Record<keyof PostUserParams, string>>;

export interface SigninParams extends SigninReq {}
export type SigninException = Partial<Record<keyof SigninReq, string>>;

export interface User extends GetUserRes {}
