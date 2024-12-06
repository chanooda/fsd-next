import { DefaultGetRes } from "./model";

export interface GetProfileRes extends DefaultGetRes {
  collectionId: string;
  collectionName: string;
  id: string;
  bio: string;
  image: string;
  following: boolean;
  created: string;
  updated: string;
}
