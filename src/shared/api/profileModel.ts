import { DefaultGetRes } from "./model";

export interface GetProfileRes extends DefaultGetRes {
  collectionId: string;
  username: string;
  avatar: string;
  bio: string;
  user: string;
}
