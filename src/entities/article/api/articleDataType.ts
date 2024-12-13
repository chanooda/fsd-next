import { ArticleGetRes, ArticlesGetReq } from "@/shared/api";

export interface Article extends ArticleGetRes {}

export interface ArticleGetQueryParams {
  id: string;
}

export interface ArticlesGetQueryParams extends ArticlesGetReq {}
