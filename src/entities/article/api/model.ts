import { UserRes } from "@/entities/user";

export interface ArticleRes {
  collectionId: string;
  collectionName: string;
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  isFavorite: boolean;
  favoritesCount: number;
  author: UserRes;
  created: string;
  updated: string;
}
