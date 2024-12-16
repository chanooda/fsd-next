"use client";

import { Pagination } from "@/shared/ui";
import { useRouter } from "next/navigation";

interface ArticlePaginationProps {
  currentPage: number;
  totalPage: number;
}

export const ArticlePagination = ({
  currentPage = 1,
  totalPage,
}: ArticlePaginationProps) => {
  const router = useRouter();

  const handleChangePage = (page: number) => {
    router.push(`/?page=${page}`);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPage={totalPage}
      onChange={handleChangePage}
    />
  );
};
