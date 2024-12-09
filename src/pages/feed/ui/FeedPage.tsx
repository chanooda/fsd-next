import { getArticles } from "@/shared/api";
import { ArticlePreview } from "./ArticlePreview";
import { Tags } from "./Tags";

export const FeedPage = async () => {
  const articles = await getArticles();

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
      <div>
        <div>
          <div className="mx-auto max-w-[960] px-4 py-8">
            {articles?.items.map((article) => (
              <ArticlePreview key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Tags />
      </div>
    </div>
  );
};
