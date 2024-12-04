export interface DefaultRequest {
  expand?: string;
  fields?: string;
}

export interface DefaultListRequest extends DefaultRequest {
  page?: number;
  perPage?: number;
  sort?: string;
  filter?: string;
  skipTotal?: boolean;
}
