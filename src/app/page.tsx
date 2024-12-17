import { ArticlePage } from "../_pages/article";
import { PageLayout } from "./_ui/PageLayout";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { page } = await searchParams;
  return (
    <PageLayout>
      <ArticlePage page={page} />
    </PageLayout>
  );
}
