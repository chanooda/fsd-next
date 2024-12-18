import { ArticleReadPage } from "@/_pages/article-read";
import { PageLayout } from "@/app/_ui/PageLayout";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  console.log(await params);

  return (
    <PageLayout>
      <ArticleReadPage id={id} />
    </PageLayout>
  );
};

export default page;
