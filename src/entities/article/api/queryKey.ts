import { getArticle, getArticles } from "@/shared/api";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { ArticlesGetQueryParams } from "../model/articleGetModel";

export const articlesQueryKey = createQueryKeys("articles", {
  detail: (articleId: string) => ({
    queryKey: [articleId],
    queryFn: () => getArticle(articleId),
  }),
  list: (req: ArticlesGetQueryParams) => ({
    queryKey: [{ req }],
    queryFn: () => getArticles(req),
  }),
});
