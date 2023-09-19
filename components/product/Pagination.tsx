"use client";

import Button from "../ui/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) {

  return (
    <div className="my-10 flex items-center gap-x-3 pt-10">
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
        <span className="font-light text-md text-gray-strong-color px-2 py-1">
          Página: {currentPage} de {totalPages}
        </span>
      </div>
    </div>
  );
}
