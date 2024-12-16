import { cookieUtil } from "../cookie";

export const getTokenWithClient = () => {
  return cookieUtil.get("token");
};
