import { DefaultGetRes } from "./model";

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
