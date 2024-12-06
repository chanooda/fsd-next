import { DefaultGetRes } from "./model";

export interface GetProfileRes extends DefaultGetRes {
  collectionId: string;
  id: string;
  username: string;
  avatar: string;
  bio: string;
  user: string;
  created: string;
  updated: string;
}
