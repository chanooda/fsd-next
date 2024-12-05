import { DefaultListRequest } from "@/shared/api";
import { pb } from "@/shared/api/client";
import { ArticleRes } from "./model";

export const getArticlesData = async (req?: DefaultListRequest) => {
  try {
    const articles = await pb.collection<ArticleRes>("article").getList(1, 10, {
      expand: "author",
      ...req,
    });

    console.log(articles);
    console.log(articles.items[0].expand);

    return articles;
  } catch (e) {
    console.error(e);
  }
};
