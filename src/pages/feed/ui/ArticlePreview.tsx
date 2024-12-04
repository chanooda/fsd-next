import { Article } from "@/shared/api";
import Image from "next/image";
import Link from "next/link";

interface ArticlePreviewProps {
  article: Omit<Article, "body">;
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div>
      <div>
        <Link href={`/profile/${article.author.username}`}>
          <Image
            src={article.author.image}
            alt={article.author.username + "profile"}
          />
        </Link>
        <div>
          <Link href={`/profile/${article.author.username}`}>
            {article.author.username}
          </Link>
          <span suppressHydrationWarning>
            {new Date(article.createdAt).toLocaleDateString(undefined, {
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
          {article.tagList.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
};
