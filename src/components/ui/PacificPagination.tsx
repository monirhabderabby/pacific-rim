import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./pagination";

interface PaginationProps {
  totalPages: number; // Total number of pages
  currentPage: number; // Current active page
  onPageChange: (page: number) => void; // Callback for page change
}

const PacificPagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  // Helper to generate an array of page numbers
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const handlePageClick = (page: number | "...") => {
    if (page === "..." || page === currentPage) return;
    onPageChange(page as number);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            onClick={() => handlePageClick(currentPage - 1)}
            href="#"
            className="border border-primary-green-hover hover:bg-primary-green-hover hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>

        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => handlePageClick(page)}
              className={cn(
                "border cursor-pointer border-primary-green-hover hover:bg-primary-green-hover hover:text-white",
                page === currentPage
                  ? "bg-primary-green text-white"
                  : "hover:bg-primary-green-hover hover:text-white"
              )}
            >
              {page === "..." ? "..." : page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink
            onClick={() => handlePageClick(currentPage + 1)}
            className="border border-primary-green-hover hover:bg-primary-green-hover hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PacificPagination;
