import { SigninReq, SigninRes, UserGetRes, UserPostReq } from "@/shared/api";

export interface PostUserParams extends UserPostReq {}
export type PostUserException = Partial<Record<keyof PostUserParams, string>>;

export interface SigninParams extends SigninReq {}
export type SigninException = Partial<Record<keyof SigninReq, string>>;

export interface User extends UserGetRes {}

export interface SignInData extends SigninRes {}
