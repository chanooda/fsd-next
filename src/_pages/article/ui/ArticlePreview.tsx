import { Article } from "@/entities/article";
import { getFileUrl } from "@/shared/config";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/shadcn/components/ui/avatar";
import { Heart } from "lucide-react";
import Link from "next/link";

interface ArticlePreviewProps {
  article: Article;
}

export const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return (
    <div className="flex flex-col gap-2 border-b py-4">
      <div className="flex items-center gap-2">
        <Link href={`/profile/${article.expand.author.id}`}>
          {article.expand.author.avatar ? (
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={getFileUrl(
                  article.expand.author.collectionName,
                  article.expand.author.id,
                  article.expand.author.avatar,
                )}
              />
              <AvatarFallback>
                {article.expand.author.username.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          ) : null}
        </Link>
        <Link
          className="text-sm text-gray-700"
          href={`/profile/${article.expand.author.id}`}
        >
          {article.expand.author.username}
        </Link>
      </div>
      <Link href={`/article/${article.id}`}>
        <div className="flex flex-col">
          <h1 className="text-xl">{article.title}</h1>
          <p className="mt-1 line-clamp-2 h-10 break-words text-sm text-gray-600">
            {article.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
            <span suppressHydrationWarning>
              {new Date(article.created).toLocaleDateString(undefined, {
                dateStyle: "long",
              })}
            </span>
            <button>
              <div className="flex items-center gap-1">
                <Heart size={12} className="fill-red-400 stroke-red-400" />
                {article.favoritesCount || 0}
              </div>
            </button>
            <ul className="flex">
              {article?.tagList?.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};
