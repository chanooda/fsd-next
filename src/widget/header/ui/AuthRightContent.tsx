import { getUser } from "@/shared/api";
import { getFileUrl, LINK } from "@/shared/config";
import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

export const AuthRightContent = async () => {
  const token = await getTokenWithServer();
  const payload = parseJwt(token || "");

  try {
    const userData = await getUser(payload?.id);
    return (
      <div>
        <Link href={LINK.PROFILE}>
          <div className="flex items-center gap-4">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={getFileUrl(
                  userData.expand.profile_via_user.collectionName,
                  userData.expand.profile_via_user.id,
                  userData.expand.profile_via_user.avatar,
                )}
              />
              <AvatarFallback className="rounded-full border border-black p-1">
                {userData.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="text-lg">{userData.name}</p>
          </div>
        </Link>
      </div>
    );
  } catch (e) {
    return <div></div>;
  }
};
