"use client";

import {
  checkIsAuthInClient,
  useAuthInfoStore,
} from "@/entities/auth/model/client";
import { useEffect } from "react";

export const CheckAuth = () => {
  const { setAuthInfo } = useAuthInfoStore((state) => state.action);

  useEffect(() => {
    if (checkIsAuthInClient()) {
      setAuthInfo({ isAuth: true });
    } else {
      setAuthInfo({ isAuth: false });
    }
  }, []);

  return null;
};
