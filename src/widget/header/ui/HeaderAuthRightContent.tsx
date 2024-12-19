"use client";

import { useGetUser } from "@/entities/auth/api/client";
import { useAuthInfoStore } from "@/entities/auth/model/client";
import { signout } from "@/shared/api";
import { getFileUrl, LINK } from "@/shared/config";
import { cookieUtil } from "@/shared/lib";
import { parseJwt } from "@/shared/lib/token";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared/ui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const AuthRightContent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const token = useAuthInfoStore((state) => state.state.token);
  const { clearAuthInfo } = useAuthInfoStore((state) => state.action);

  const payload = token ? parseJwt(token) : undefined;

  const { data: userData } = useGetUser(payload?.id);

  const isProfile = pathname === LINK.PROFILE;
  const clickSignoutHandler = () => {
    cookieUtil.delete("token");
    clearAuthInfo();
    signout();
    router.push(LINK.HOME);
  };

  if (!userData) return <div></div>;

  return (
    <div>
      {isProfile ? (
        <Button onClick={() => clickSignoutHandler()}>Signout</Button>
      ) : (
        <Link href={LINK.PROFILE}>
          <div className="flex items-center gap-4">
            <Avatar className="h-6 w-6 rounded-full">
              <AvatarImage
                src={getFileUrl(
                  userData?.expand.profile_via_user[0].collectionName,
                  userData?.expand.profile_via_user[0].id,
                  userData?.expand.profile_via_user[0].avatar,
                )}
              />
              <AvatarFallback>{userData?.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <p className="text-lg">{userData?.name}</p>
          </div>
        </Link>
      )}
    </div>
  );
};
