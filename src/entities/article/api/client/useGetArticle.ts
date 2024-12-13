import { ArticleGetReq } from "@/shared/api";
import { useQuery } from "@/shared/config/client";
import { articleQueryKey } from "../queryKey";

export const useGetArticle = (req: ArticleGetReq) => {
  return useQuery(articleQueryKey.detail(req.id));
};
