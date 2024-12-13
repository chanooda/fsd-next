import { ArticlesGetReq } from "@/shared/api";
import { useQuery } from "@/shared/config/client";
import { articleQueryKey } from "../queryKey";

export const useGetArticles = (req: ArticlesGetReq) => {
  return useQuery(articleQueryKey.list(req));
};
