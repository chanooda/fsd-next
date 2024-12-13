import { pb } from "../config";
import { GetUserRes, PostUserReq } from "./authModel";
import { GetProfileRes } from "./profileModel";

export const postUser = async (req: PostUserReq) => {
  try {
    const profile = await pb.collection<GetProfileRes>("profile").create({
      username: req.name,
    });

    const user = await pb.collection<GetUserRes>("users").create({
      ...req,
      profile: profile.id,
    });

    return user;
  } catch (e) {
    throw e;
  }
};
