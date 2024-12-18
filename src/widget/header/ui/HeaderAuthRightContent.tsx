"use client";

import { useGetUser } from "@/entities/auth/api/client";
import { useAuthInfoStore } from "@/entities/auth/model/client";
import { getFileUrl, LINK } from "@/shared/config";
import { parseJwt } from "@/shared/lib/token";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";
import Link from "next/link";

export const AuthRightContent = () => {
  const token = useAuthInfoStore((state) => state.state.token);

  const payload = token ? parseJwt(token) : undefined;

  const { data: userData } = useGetUser(payload?.id);

  if (!userData) return <div></div>;

  return (
    <div>
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
    </div>
  );
};
