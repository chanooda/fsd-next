import { authQueryKey } from "@/entities/auth";
import { LINK } from "@/shared/config";
import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Link from "next/link";
import { HeaderRightContent } from "./HeaderRightContent";

export const Header = async () => {
  const token = await getTokenWithServer();
  const queryClient = new QueryClient();

  if (token) {
    const payload = parseJwt(token);
    if (payload?.id) {
      await queryClient.prefetchQuery(authQueryKey.detail(payload?.id));
    }
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="fixed left-0 top-0 z-30 mx-auto flex h-16 w-full max-w-[1200] items-center justify-between bg-white px-4">
        <div>
          <Link href={LINK.HOME}>
            <p className="font-bold">conduit</p>
          </Link>
        </div>
        <HeaderRightContent />
      </div>
      <div className="m-h-16 h-16" />
    </HydrationBoundary>
  );
};
