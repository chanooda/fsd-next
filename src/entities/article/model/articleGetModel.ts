import { ArticleGetRes, ArticlesGetReq, DefaultGetRes } from "@/shared/api";

export interface Article extends Omit<ArticleGetRes, keyof DefaultGetRes> {}

export interface ArticleGetQueryParams {
  id: string;
}

export interface ArticlesGetQueryParams extends ArticlesGetReq {}
