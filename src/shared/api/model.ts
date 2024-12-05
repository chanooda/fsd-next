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

export interface UserRes {
  collectionId: string;
  collectionName: string;
  id: string;
  email: string;
  emailVisibility: boolean;
  verified: boolean;
  name: string;
  created: string;
  updated: string;
}

export interface ProfileRes {
  collectionId: string;
  collectionName: string;
  id: string;
  username: string;
  avatar?: string;
  bio?: string;
  user: string;
  created: string;
  updated: string;
}

export interface ArticleRes {
  collectionId: string;
  collectionName: string;
  id: string;
  slug?: string;
  title: string;
  description?: string;
  body: string;
  tagList?: string[];
  isFavorite: boolean;
  favoritesCount: number;
  author: string;
  created: string;
  updated: string;
  expand: {
    author: ProfileRes;
  };
}
