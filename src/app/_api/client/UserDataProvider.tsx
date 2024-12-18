import { authQueryKey } from "@/entities/auth";
import { checkIsAuthInServer } from "@/entities/auth/model/server";
import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from "react";

export const UserDataProvider = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const token = await getTokenWithServer();
  const isAuth = await checkIsAuthInServer();

  const queryClient = new QueryClient();

  if (isAuth) {
    const payload = parseJwt(token as string);
    await queryClient.prefetchQuery(authQueryKey.detail(payload.id));
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
