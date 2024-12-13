import { pb } from "../config";
import { DefaultGetRes, DefaultListReq } from "./global";

export interface TagGetRes extends DefaultGetRes {
  name: string;
}

export interface TagGetReq {
  id: string;
}

export interface TagGetListReq extends DefaultListReq {}

export const getTags = async (req?: TagGetListReq) => {
  try {
    const tags = await pb.collection<TagGetRes>("tag").getList(1, 10, {
      ...req,
      sort: "-article_via_tags.id",
      filter: "article_via_tags.id>0",
    });
    console.log("tags", tags);
    return tags;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
