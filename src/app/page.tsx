import { ArticlePage } from "../pages/article";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { page } = await searchParams;
  return <ArticlePage page={page} />;
}
