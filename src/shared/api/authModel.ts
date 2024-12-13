import { GetProfileRes } from "./profileModel";

export interface GetUserRes {
  collectionId: string;
  collectionName: string;
  id: string;
  email: string;
  emailVisibility: boolean;
  verified: boolean;
  name: string;
  created: string;
  updated: string;
  expand: {
    profile: GetProfileRes;
  };
}

export interface PostUserReq {
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
}

export interface SigninReq {
  email: string;
  password: string;
}
