import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import { notFound } from "next/navigation";

export const ProfilePage = async () => {
  try {
    const token = await getTokenWithServer();
    const payload = parseJwt(token || "");

    // const userData = await getUser(payload?.id);

    return <div className="max-auto w-full max-w-[1200] p-4"></div>;
  } catch (e) {
    notFound();
  }
};
