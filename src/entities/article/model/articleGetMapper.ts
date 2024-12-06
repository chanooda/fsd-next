import { ArticleGetRes } from "@/shared/api";
import { Article } from "./articleGetModel";

export const articleGetMapper = (getArticleRes: ArticleGetRes): Article => {
  const { collectionId, collectionName, ...article } = getArticleRes;
  return article;
};
