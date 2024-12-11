import { pb } from "../config";
import { GetUserRes, SignUptReq } from "./authModel";

export const signup = async (req: SignUptReq) => {
  try {
    const record = await pb.collection<GetUserRes>("users").create({
      ...req,
      profile: {
        username: req.name,
      },
    });

    return record;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
