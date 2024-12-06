import { ArticleGetReq } from "@/shared/api";
import { useQuery } from "@/shared/config/client";
import { articlesQueryKey } from "../queryKey";

export const useGetArticle = (req: ArticleGetReq) => {
  return useQuery(articlesQueryKey.detail(req.id));
};
