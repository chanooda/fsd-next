"use client";

import { ArticlesGetReq } from "@/shared/api";
import { useQuery } from "@/shared/lib/client";
import { articleQueryKey } from "../queryKey";

export const useGetArticles = (req: ArticlesGetReq) => {
  return useQuery(articleQueryKey.list(req));
};
