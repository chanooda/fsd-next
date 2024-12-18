import { pb } from "@/shared/config";
import { DefaultGetRes, DefaultListReq } from "./global";
import { ProfileGetRes } from "./profileApi";

export interface ArticleGetRes extends DefaultGetRes {
  slug?: string;
  title: string;
  description?: string;
  body: string;
  tagList?: string[];
  isFavorite: boolean;
  favoritesCount: number;
  author: string;
  expand: {
    author: ProfileGetRes;
  };
}

export interface ArticleGetReq {
  id: string;
}

export interface ArticlesGetReq extends DefaultListReq {}

export const getArticle = async (req: ArticleGetReq) => {
  try {
    const article = await pb
      .collection<ArticleGetRes>("article")
      .getOne(req.id, {
        expand: "author",
      });

    return article;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getArticles = async (req?: DefaultListReq) => {
  try {
    const articles = await pb
      .collection<ArticleGetRes>("article")
      .getList(1, 10, {
        expand: "author",
        ...req,
      });

    return articles;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
