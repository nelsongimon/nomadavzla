"use client";

import Button from "../ui/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  total: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  total,
  handlePrevPage,
  handleNextPage
}: PaginationProps) {

  return (
    <div className="my-10 flex items-center gap-x-3 border-t border-gray-100 pt-10">
      <div className="flex gap-x-3 flex-1">
        <Button
          onClick={handlePrevPage}
          size="default"
          variant="outline"
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <Button
          onClick={handleNextPage}
          size="default"
          variant="outline"
          disabled={currentPage === totalPages}
        >
          Siguiente
        </Button>
      </div>
      <div className="flex gap-x-3 items-end">
        <span className="text-primary-color text-base">
          {total} {total === 1 ? "resultado total" : "resultados totales"}
        </span>
        <span className="font light text-xs text-gray-strong-color px-2 py-1 bg-gray-color rounded-full">
          Página actual: {currentPage}
        </span>
      </div>
    </div>
  );
}
