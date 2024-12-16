import { parseJwt } from "@/shared/lib/token";
import { cookies } from "next/headers";
import { jwtSchema } from "../schema";

export const checkIsAuthInClient = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.name;

  if (!token) return false;

  const payload = parseJwt(token);

  return jwtSchema.safeParse(payload).success;
};