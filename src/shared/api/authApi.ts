import { pb } from "../config";
import { GetUserRes, PostUserReq, SigninReq } from "./authModel";
import { GetProfileRes } from "./profileModel";

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
