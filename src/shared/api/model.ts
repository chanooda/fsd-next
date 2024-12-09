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

export interface DefaultGetRes {
  collectionId: string;
  collectionName: string;
  id: string;
  created: "2022-01-01 10:00:00.123Z";
  updated: "2022-01-01 10:00:00.123Z";
}
