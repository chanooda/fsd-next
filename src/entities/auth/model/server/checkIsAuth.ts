import { parseJwt } from "@/shared/lib/token";
import { cookies } from "next/headers";
import { jwtSchema } from "../schema";

export const checkIsAuthInServer = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) return false;

  const payload = parseJwt(token);

  return jwtSchema.safeParse(payload).success;
};
