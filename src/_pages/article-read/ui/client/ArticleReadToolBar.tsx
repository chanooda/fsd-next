"use client";

import { useGetArticle } from "@/entities/article/api/client";
import { Button, Separator } from "@/shared/ui";
import { Heart } from "lucide-react";
import { useParams } from "next/navigation";

export const ArticleReadToolBar = () => {
  const param = useParams();
  const { data } = useGetArticle({ id: param.id as string });

  console.log(data);

  return (
    <div className="my-4 w-full">
      <Separator />
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-4 w-4">
            <Heart />
          </Button>
          <span>{data?.favoriteCount || 0}</span>
        </div>
      </div>
      <Separator />
    </div>
  );
};
