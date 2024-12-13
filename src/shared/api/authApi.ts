import { pb } from "../config";
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
