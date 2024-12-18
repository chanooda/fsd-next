import { getTokenWithServer } from "@/shared/lib/server";
import { notFound } from "next/navigation";
import { Articles } from "./Articles";
import { Profile } from "./Profile";

export const ProfilePage = async () => {
  const isAuth = await getTokenWithServer();

  if (!isAuth) {
    notFound();
  }

  return (
    <div className="max-auto flex min-h-full w-full max-w-[1200] flex-col p-4 pt-20">
      <Profile />
      <Articles />
    </div>
  );
};
