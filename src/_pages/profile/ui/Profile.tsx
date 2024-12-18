"use client";

import { authQueryKey } from "@/entities/auth";
import { useGetUser } from "@/entities/auth/api/client";
import { useAuthInfoStore } from "@/entities/auth/model/client";
import { usePatchProfile } from "@/entities/profile/api/client";
import { parseJwt } from "@/shared/lib/token";
import { Button, Input } from "@/shared/ui";
import { useQueryClient } from "@tanstack/react-query";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { ProfileAvatar } from "./ProfileAvatar";

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [bio, setBio] = useState("");

  const client = useQueryClient();
  const token = useAuthInfoStore((state) => state.state.token) as string;

  const payload = parseJwt(token);

  const { data } = useGetUser(payload?.id);
  const { mutate: patchBio, isPending: isPatchBioPending } = usePatchProfile();

  const changeEditModeHandler = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setBio("");
      setIsEdit(true);
    }
  };

  const changeBioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const patchBioHandler = () => {
    if (data) {
      patchBio(
        {
          id: data.expand.profile_via_user[0].id,
          user: data.id,
          username: data.name,
          bio,
        },
        {
          async onSuccess() {
            await client.invalidateQueries(
              authQueryKey.detail(data?.id as string),
            );
            setBio("");
            setIsEdit(false);
          },
        },
      );
    }
  };

  if (data) {
    return (
      <div className="flex flex-col items-center gap-4">
        <ProfileAvatar />
        <div className="gap-4">
          <p className="text-center text-2xl font-semibold">{data.name}</p>
          {data.expand.profile_via_user[0].bio ? (
            <p className="text-center font-semibold">
              {data.expand.profile_via_user[0].bio}
            </p>
          ) : (
            <>
              {isEdit ? (
                <div className="flex items-center gap-2">
                  <Input type="text" onChange={changeBioHandler} value={bio} />
                  <Button
                    onClick={patchBioHandler}
                    size="icon"
                    className="h-6 min-h-6 w-6 min-w-6 rounded-full"
                  >
                    <Check />
                  </Button>
                  <Button
                    size="icon"
                    className="h-6 min-h-6 w-6 min-w-6 rounded-full"
                    onClick={changeEditModeHandler}
                  >
                    <X />
                  </Button>
                </div>
              ) : (
                <p
                  onClick={changeEditModeHandler}
                  className="cursor-pointer text-gray-400"
                >
                  edit bio
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
};
