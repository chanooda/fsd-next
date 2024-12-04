import { GET } from "@/shared/api";

export const loader = async () => {
  const { data: articles } = await GET("/articles");
  console.log(await GET("/articles"));
  return articles;
};
