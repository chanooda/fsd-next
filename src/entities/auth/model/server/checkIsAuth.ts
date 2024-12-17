import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import { jwtSchema } from "../schema";

export const checkIsAuthInServer = async () => {
  const token = await getTokenWithServer();

  if (!token) return false;

  const payload = parseJwt(token);

  return jwtSchema.safeParse(payload).success;
};
