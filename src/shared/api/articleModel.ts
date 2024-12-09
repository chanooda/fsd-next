import { DefaultGetRes, DefaultListReq } from "./model";
import { GetProfileRes } from "./profileModel";

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
