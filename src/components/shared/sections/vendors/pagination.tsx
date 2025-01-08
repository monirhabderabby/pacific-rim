import { Button } from "@/components/ui/button"
import type { PaginationProps } from "@/types/vendor"

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 my-8">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-gray-300 text-gray-700"
      >
        Previous
      </Button>
      
      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1
        const isCurrentPage = pageNumber === currentPage
        
        if (
          pageNumber === 1 ||
          pageNumber === totalPages ||
          (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
        ) {
          return (
            <Button
              key={pageNumber}
              variant={isCurrentPage ? "default" : "outline"}
              onClick={() => onPageChange(pageNumber)}
              className={`${
                isCurrentPage
                  ? "bg-[#2A6C2D] text-white hover:bg-[#235B26]"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {pageNumber}
            </Button>
          )
        } else if (
          pageNumber === currentPage - 2 ||
          pageNumber === currentPage + 2
        ) {
          return <span key={pageNumber} className="text-gray-500">...</span>
        }
        return null
      })}
      
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-gray-300 text-gray-700"
      >
        Next
      </Button>
    </div>
  )
}

