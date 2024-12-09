import { ArticleGetRes } from "@/shared/api";
import { Article } from "./articleGetModel";

export const articleGetMapper = (getArticleRes: ArticleGetRes): Article => {
  return {
    ...getArticleRes,
    favoritesCount: getArticleRes?.favoritesCount || 0,
  };
};

export const articlesGetMapper = (
  getArticlesRes: ArticleGetRes[],
): Article[] => {
  return getArticlesRes?.map((article) => articleGetMapper(article));
};
