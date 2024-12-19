import { RecordAuthResponse } from "pocketbase";
import { pb } from "../config";
import { getTokenWithServer } from "../lib/server";
import { ProfileGetRes } from "./profileApi";

export interface UserGetRes {
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
    profile_via_user: ProfileGetRes[];
  };
}

export interface UserGetReq {
  id: string;
}

export const getUser = async (req: UserGetReq) => {
  try {
    const token = await getTokenWithServer();
    const user = await pb.collection<UserGetRes>("users").getOne(req.id, {
      expand: "profile_via_user",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export interface UserPostReq {
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
}

export const postUser = async (req: UserPostReq) => {
  try {
    const user = await pb.collection<UserGetRes>("users").create({
      ...req,
    });

    const profile = await pb.collection<ProfileGetRes>("profile").create({
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
export interface SigninRes extends RecordAuthResponse<UserGetRes> {}

export const signin = async (req: SigninReq) => {
  try {
    const user = await pb
      .collection<UserGetRes>("users")
      .authWithPassword(req.email, req.password);

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const signout = () => {
  try {
    pb.authStore.clear();
  } catch (e) {
    console.error(e);
    throw e;
  }
};
