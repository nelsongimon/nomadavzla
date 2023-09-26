"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import useCurrentPage from "@/hooks/useCurrentPage";

export default function NoResults() {
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);
  const handleClick = () => {
    updatePage(1);
    router.push("/productos");
  }

  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <div className="flex flex-col gap-y-6">
        <h3 className="text-4xl text-gray-strong-color font-semibold">
          No hay resultados
        </h3>
        <div className="flex justify-center">
          <Button
            onClick={handleClick}
            size="default"
            variant="gray"
          >
            Ver todos los productos
          </Button>
        </div>
      </div>

    </div>
  );
}
