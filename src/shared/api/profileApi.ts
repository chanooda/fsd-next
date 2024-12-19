import { pb } from "../config";
import { getTokenWithServer } from "../lib/server";
import { ArticleGetRes } from "./articleApi";
import { DefaultGetRes } from "./global";

export interface ProfileGetReq {
  id: string;
}

export interface ProfileGetRes extends DefaultGetRes {
  collectionId: string;
  username: string;
  avatar: string;
  bio: string;
  user: string;
  followerArticles: ArticleGetRes[];
}

export interface ProfilePostReq {
  username: string;
  bio?: string;
  avatar?: File;
  user: string;
}

export interface ProfilePatchReq {
  id: string;
  username: string;
  bio?: string;
  avatar?: File;
  user: string;
  followerArticles?: string[];
}

export const getProfile = async (req: ProfileGetReq) => {};

export const patchProfile = async (req: ProfilePatchReq) => {
  const { id, ...restReq } = req;

  const token = await getTokenWithServer();

  try {
    await pb.collection("profile").update(id, restReq, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};
