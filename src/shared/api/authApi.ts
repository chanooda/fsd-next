import { RecordAuthResponse } from "pocketbase";
import { pb } from "../config";
import { getTokenWithServer } from "../lib/server";
import { GetProfileRes } from "./profileApi";

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
    profile_via_user: GetProfileRes;
  };
}

export interface GetUserReq {
  id: string;
}

export const getUser = async (req: GetUserReq) => {
  try {
    const token = await getTokenWithServer();
    const user = await pb.collection<GetUserRes>("users").getOne(req.id, {
      expand: "profile_via_user",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    "user", user;

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export interface PostUserReq {
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
}

export const postUser = async (req: PostUserReq) => {
  try {
    const user = await pb.collection<GetUserRes>("users").create({
      ...req,
    });

    const profile = await pb.collection<GetProfileRes>("profile").create({
      username: req.name,
      user: user.id,
    });

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export interface SigninReq {
  email: string;
  password: string;
}
``;
export interface SigninRes extends RecordAuthResponse<GetUserRes> {}

export const signin = async (req: SigninReq) => {
  try {
    const user = await pb
      .collection<GetUserRes>("users")
      .authWithPassword(req.email, req.password);

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
