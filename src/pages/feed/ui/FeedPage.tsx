import { loader } from "../api/loader";
import { ArticlePreview } from "./ArticlePreview";

export const FeedPage = async () => {
  const articles = await loader();

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center py-12 h-40 bg-[#242424] ">
        <div>
          <div className="text-white text-center flex flex-col  gap-2">
            <h1 className="text-2xl">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            {articles?.articles.map((article) => (
              <ArticlePreview key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
