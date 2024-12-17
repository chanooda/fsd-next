"use client";

import {
  checkIsAuthInClient,
  useAuthInfoStore,
} from "@/entities/auth/model/client";
import { getTokenWithClient } from "@/shared/lib/client";
import { useEffect } from "react";

export const CheckAuth = () => {
  const { setAuthInfo } = useAuthInfoStore((state) => state.action);

  useEffect(() => {
    if (checkIsAuthInClient()) {
      const token = getTokenWithClient() as string;
      setAuthInfo({ isAuth: true, token });
    } else {
      setAuthInfo({ isAuth: false, token: undefined });
    }
  }, []);

  return null;
};
