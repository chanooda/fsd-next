import { authQueryKey } from "@/entities/auth";
import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from "react";

export const AuthProvider = async ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  const token = await getTokenWithServer();
  const payload = parseJwt(token || "");
  console.log("payload", payload);
  if (payload?.id) {
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
