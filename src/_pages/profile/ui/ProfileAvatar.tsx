import { authQueryKey } from "@/entities/auth";
import { useGetUser } from "@/entities/auth/api/client";
import { useAuthInfoStore } from "@/entities/auth/model/client";
import { usePatchProfile } from "@/entities/profile/api/client";
import { getFileUrl } from "@/shared/config";
import { parseJwt } from "@/shared/lib/token";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared/ui";
import { useQueryClient } from "@tanstack/react-query";
import { Check, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { AvatarForm } from "../model/schema";

export const ProfileAvatar = () => {
  const [avatar, setAvatar] = useState<AvatarForm>(undefined);

  const token = useAuthInfoStore((state) => state.state.token) as string;

  const payload = parseJwt(token);

  const client = useQueryClient();

  const { mutate: patchAvatar, isPending: isPatchAvatarPending } =
    usePatchProfile();

  const { data } = useGetUser(payload?.id);

  const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (avatar) {
        URL.revokeObjectURL(avatar.prevUrl);
      }

      const prevUrl = URL.createObjectURL(file);
      setAvatar({
        file,
        prevUrl,
      });
    }
  };

  const resetAvatarHandler = () => {
    if (avatar) {
      URL.revokeObjectURL(avatar.prevUrl);
      setAvatar(undefined);
    }
  };

  const uploadAvatarHandler = () => {
    if (isPatchAvatarPending) return;

    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar.file);

      patchAvatar(
        {
          id: data?.expand.profile_via_user[0].id as string,
          avatar: avatar.file,
          user: data?.id as string,
          username: data?.name as string,
        },
        {
          async onSuccess() {
            await client.invalidateQueries(
              authQueryKey.detail(data?.id as string),
            );
            setAvatar(undefined);
          },
        },
      );
    }
  };

  if (data) {
    return (
      <div className="relative">
        <label
          htmlFor="upload_avatar"
          className="flex h-full w-full cursor-pointer items-center justify-center"
        >
          <Avatar className="h-36 w-36">
            <AvatarImage
              src={
                avatar
                  ? avatar.prevUrl
                  : getFileUrl(
                      data.expand.profile_via_user[0].collectionName,
                      data.expand.profile_via_user[0].id,
                      data.expand.profile_via_user[0].avatar,
                    )
              }
            />
            <AvatarFallback>{data?.name.slice(0, 2)}</AvatarFallback>
            <input
              id="upload_avatar"
              type="file"
              hidden
              accept="image/png, image/jpeg, image/jpg"
              onChange={changeAvatarHandler}
            />
          </Avatar>
        </label>
        {avatar && (
          <div className="absolute bottom-0 right-0 flex gap-1">
            <Button
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={uploadAvatarHandler}
            >
              <Check />
            </Button>
            <Button
              onClick={resetAvatarHandler}
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <X />
            </Button>
          </div>
        )}
      </div>
    );
  }
};
