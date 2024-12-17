"use client";

import { useAuthInfoStore } from "@/entities/auth/model/client";
import { AuthRightContent } from "./HeaderAuthRightContent";
import { UnAuthRightContent } from "./HeaderUnAuthRightContent";

export const HeaderRightContent = () => {
  const isAuth = useAuthInfoStore((state) => state.state.isAuth);

  return isAuth ? <AuthRightContent /> : <UnAuthRightContent />;
};
