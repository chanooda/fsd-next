import { pb } from "@/shared/config";
import { ArticleGetRes } from "./articleModel";
import { DefaultListReq } from "./model";

export const getArticle = async (id: string) => {
  try {
    const article = await pb.collection<ArticleGetRes>("article").getOne(id, {
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
