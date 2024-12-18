import { getArticles } from "@/shared/api";
import { LINK } from "@/shared/config";
import { getTokenWithServer } from "@/shared/lib/server";
import { parseJwt } from "@/shared/lib/token";
import Link from "next/link";

export const Articles = async () => {
  const token = await getTokenWithServer();
  const payload = parseJwt(token as string);

  const articles = await getArticles({
    filter: `author.user.id="${payload.id}"`,
    expand: "author.user",
  });

  return (
    <div className="mt-4 flex w-full flex-col items-center gap-4">
      {articles?.items.map((article) => {
        return (
          <Link
            className="w-full max-w-[500px]"
            href={`${LINK.ARTICLE}/${article.id}`}
            key={article.id}
          >
            <div className="w-full rounded-md border p-2">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="line-clamp-2 h-12 break-words">
                {article.description}
              </p>
              <p className="mt-2 text-xs text-gray-400">
                {new Date(article.created).toLocaleDateString("ko-KR")} /{" "}
                {new Date(article.updated).toLocaleDateString("ko-KR")}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
