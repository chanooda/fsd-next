"use client";

import { getTokenWithClient } from "@/shared/lib/client";
import { parseJwt } from "@/shared/lib/token";
import { jwtSchema } from "../schema";

export const checkIsAuthInClient = () => {
  const token = getTokenWithClient();

  if (!token) return false;

  const payload = parseJwt(token);

  return jwtSchema.safeParse(payload).success;
};
