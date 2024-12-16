import { cookieUtil } from "../cookie";

export const getTokenWithClient = () => {
  if (typeof window === "undefined") return "";
  return cookieUtil.get("token");
};
