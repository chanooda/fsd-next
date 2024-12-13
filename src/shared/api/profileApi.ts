import { DefaultGetRes } from "./global";

export interface GetProfileRes extends DefaultGetRes {
  collectionId: string;
  username: string;
  avatar: string;
  bio: string;
  user: string;
}

export interface PostProfileReq {
  username: string;
  bio: string;
  user: string;
}

export const getProfile = async (id: string) => {};
