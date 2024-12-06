import { ArticlesGetReq } from "@/shared/api";
import { useQuery } from "@/shared/config/client";
import { articlesQueryKey } from "../queryKey";

export const useGetArticles = (req: ArticlesGetReq) => {
  return useQuery(articlesQueryKey.list(req));
};
