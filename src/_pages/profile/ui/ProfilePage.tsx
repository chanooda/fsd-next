import { getTokenWithServer } from "@/shared/lib/server";
import { notFound } from "next/navigation";

export const ProfilePage = async () => {
  const isAuth = await getTokenWithServer();

  if (!isAuth) {
    notFound();
  }

  return <div className="max-auto w-full max-w-[1200] p-4"></div>;
};
