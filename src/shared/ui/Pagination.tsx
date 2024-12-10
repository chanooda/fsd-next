"use client";

import { useEffect, useState } from "react";
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as ShadcnPagination,
} from "./shadcn/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  pageSize?: number;
  onChange?: (page: number) => void;
}

const getStartPage = (currentPage: number, pageSize: number) => {
  return Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
};

export const Pagination = ({
  currentPage = 1,
  totalPage,
  pageSize = 5,
  onChange,
}: PaginationProps) => {
  const [startPage, setStartPage] = useState(
    getStartPage(currentPage, pageSize),
  );

  const handleChangePage = (page: number) => {
    if (page < 1 || page > totalPage) return;

    onChange?.(page);
    setStartPage(getStartPage(page, pageSize));
  };

  useEffect(() => {
    console.log(currentPage);
    setStartPage(getStartPage(currentPage, pageSize));
  }, []);

  return (
    <ShadcnPagination>
      <PaginationContent>
        {currentPage <= pageSize && (
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
        )}
        {Array.from({
          length:
            startPage + pageSize > totalPage
              ? totalPage - startPage + 1
              : pageSize,
        }).map((_, index) => {
          return (
            <PaginationItem
              key={index}
              onClick={() => handleChangePage(startPage + index)}
            >
              <PaginationLink isActive={currentPage === startPage + index}>
                {startPage + index}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {currentPage <= pageSize && (
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        )}
      </PaginationContent>
    </ShadcnPagination>
  );
};
