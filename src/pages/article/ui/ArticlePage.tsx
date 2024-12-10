import { getArticles, getTags } from "@/shared/api";
import { Badge } from "@/shared/ui";
import Link from "next/link";
import { ArticlePreview } from "./ArticlePreview";
import { ArticlePagination } from "./client";

export const ArticlePage = async ({ page }: { page?: string }) => {
  const articles = await getArticles({
    page: Number(page) || 1,
    perPage: 1,
  });
  const tags = await getTags();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center bg-[#242424] py-12">
        <div>
          <div className="flex flex-col gap-1 text-center text-white">
            <h1 className="text-2xl">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200] gap-2 px-4 py-4">
        <div className="w-full">
          <div>
            {articles?.items.map((article) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-4">
            <ArticlePagination
              totalPage={articles.totalPages}
              currentPage={Number(page || 1)}
            />
          </div>
        </div>
        <div className="flex h-auto w-80 flex-col gap-2">
          <p className="text-xl">Popular Tags</p>
          <div className="flex flex-wrap gap-2">
            {tags?.items.map((tag) => (
              <Link href={`/tag/${tag.id}`} key={tag.id}>
                <Badge className="cursor-pointer">{tag.name}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
