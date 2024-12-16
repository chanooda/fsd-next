import { getArticle, getArticles } from "@/shared/api";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { ArticlesGetQueryParams } from "./articleDataType";

export const articleQueryKey = createQueryKeys("articles", {
  detail: (id: string) => ({
    queryKey: ["articles", id],
    queryFn: () => getArticle({ id }),
  }),
  list: (req: ArticlesGetQueryParams) => ({
    queryKey: ["articles", { req }],
    queryFn: () => getArticles(req),
  }),
});
