"use client";

import { useAuthInfoStore } from "@/entities/auth/model/client";
import { LINK } from "@/shared/config";
import Link from "next/link";
import { AuthRightContent } from "./AuthRightContent";
import { UnAuthRightContent } from "./UnAuthRightContent";

export const Header = () => {
  const isAuth = useAuthInfoStore((state) => state.state.isAuth);

  return (
    <>
      <div className="fixed left-0 top-0 z-30 mx-auto flex h-16 w-full max-w-[1200] items-center justify-between bg-white px-4">
        <div>
          <Link href={LINK.HOME}>
            <p className="font-bold">conduit</p>
          </Link>
        </div>
        <div>{isAuth ? <AuthRightContent /> : <UnAuthRightContent />}</div>
      </div>
      <div className="m-h-16 h-16"></div>
    </>
  );
};
