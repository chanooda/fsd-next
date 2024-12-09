import { DefaultGetRes, DefaultListReq } from "./model";

export interface TagGetRes extends DefaultGetRes {
  name: string;
}

export interface TagGetReq {
  id: string;
}

export interface TagGetListReq extends DefaultListReq {}
