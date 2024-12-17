import { authQueryKey } from "@/entities/auth";
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
  const queryClient = new QueryClient();

  const token = await getTokenWithServer();
  if (token) {
    const payload = parseJwt(token);
    queryClient.prefetchQuery({
      ...authQueryKey.detail(payload.id),
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
