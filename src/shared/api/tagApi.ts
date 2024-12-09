import { pb } from "../config";
import { TagGetListReq, TagGetRes } from "./tagModel";

export const getTags = async (req?: TagGetListReq) => {
  try {
    const tags = await pb.collection<TagGetRes>("tag").getList(1, 10, {
      ...req,
      sort: "-article_via_tags.id",
    });
    console.log(tags.items[0]);
    return tags;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
