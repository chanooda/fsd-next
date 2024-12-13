import { pb } from "@/shared/config";
import { inspect } from "node:util";
import { DefaultGetRes, DefaultListReq } from "./global";
import { GetProfileRes } from "./profileApi";

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
    author: GetProfileRes;
  };
}

export interface ArticleGetReq {
  id: string;
}

export interface ArticlesGetReq extends DefaultListReq {}

export const getArticle = async (id: string) => {
  try {
    const article = await pb.collection<ArticleGetRes>("article").getOne(id, {
      expand: "author",
    });

    console.log(inspect(article, false, null, true));

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

    console.log("articles", articles);

    return articles;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
