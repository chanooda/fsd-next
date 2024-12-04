import { ArticleRes } from "@/entities/article";
import Image from "next/image";
import Link from "next/link";

interface ArticlePreviewProps {
  article: ArticleRes;
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div>
      <div>
        <Link href={`/profile/${article.author.name}`}>
          {article.author.avatar ? (
            <Image
              src={article.author.avatar}
              alt={article.author.name + "profile"}
            />
          ) : null}
        </Link>
        <div>
          <Link href={`/profile/${article.author.name}`}>
            {article.author.name}
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
          {article.tagList.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
};