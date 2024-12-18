import { Article, articleQueryKey } from "@/entities/article";
import { getFileUrl, LINK } from "@/shared/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleReadToolBar } from "./client/ArticleReadToolBar";

export const ArticleReadPage = async ({ id }: { id: string }) => {
  const client = new QueryClient();

  await client.prefetchQuery(articleQueryKey.detail(id));

  if (client.getQueryData(articleQueryKey.detail(id).queryKey) === undefined) {
    notFound();
  }

  const article = client.getQueryData(
    articleQueryKey.detail(id).queryKey,
  ) as Article;

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <div className="mx-auto w-full max-w-[720] px-4 pt-16">
        <div className="flex flex-col items-center">
          <h1 className="w-full text-4xl font-bold">{article.title}</h1>
          <div className="mt-8 w-full">
            <Link href={`/${LINK.PROFILE}/${article.expand.author.id}`}>
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
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
                <div className="flex flex-col">
                  <span>{article.expand.author.username}</span>
                  <span className="text-xs text-gray-700">
                    {new Date(article.created).toLocaleDateString(undefined, {
                      dateStyle: "long",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <ArticleReadToolBar />
          <div
            className="mt-4 w-full"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>
      </div>
    </HydrationBoundary>
  );
};
