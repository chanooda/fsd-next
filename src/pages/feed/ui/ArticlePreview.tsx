import { Article } from "@/entities/article";
import Image from "next/image";
import Link from "next/link";

interface ArticlePreviewProps {
  article: Article;
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div>
      <div>
        <Link href={`/profile/${article.expand.author.user}`}>
          {article.expand.author.avatar ? (
            <Image
              src={article.expand.author.avatar}
              alt={article.expand.author.username + "profile"}
            />
          ) : null}
        </Link>
        <div>
          <Link href={`/profile/${article.expand.author.user}`}>
            {article.expand.author.username}
          </Link>
          <span suppressHydrationWarning>
            {new Date(article.created).toLocaleDateString(undefined, {
              dateStyle: "long",
            })}
          </span>
        </div>
        <button>
          <i></i> {article.favoritesCount}
        </button>
      </div>
      <Link href={`/article/${article.slug}`}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul>
          {article?.tagList?.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
};
