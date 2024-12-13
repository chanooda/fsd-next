import { GetUserRes, PostUserReq, SigninReq } from "@/shared/api";

export interface PostUserParams extends PostUserReq {}
export type PostUserException = Partial<Record<keyof PostUserParams, string>>;

export interface SigninParams extends SigninReq {}
export type SigninException = Partial<Record<keyof SigninReq, string>>;

export interface User extends GetUserRes {}
