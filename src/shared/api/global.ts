import { ClientResponseError } from "pocketbase";

export interface DefaultReq {
  expand?: string;
  fields?: string;
}

export interface DefaultListReq extends DefaultReq {
  page?: number;
  perPage?: number;
  sort?: string;
  filter?: string;
  skipTotal?: boolean;
}
export class DefaultError extends ClientResponseError {}

export interface DefaultGetRes {
  collectionId: string;
  collectionName: string;
  id: string;
  created: string;
  updated: string;
}

export interface ServerActionResponse<Data, Error = unknown> {
  isSuccess: boolean;
  isError: boolean;
  data?: Data;
  error?: Error;
}
