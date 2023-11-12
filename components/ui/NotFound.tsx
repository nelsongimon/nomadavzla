"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import useCurrentPage from "@/hooks/useCurrentPage";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);
  const handleClick = () => {
    updatePage(1);
  }

  return (
    <div className="mb-28 mt-4 lg:mb-32 lg:mt-5">
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center w-full">
          <h2 className=" text-gray-100 font-extrabold text-[150px] lg:text-[250px]">
            404
          </h2>
          <h3 className="absolute text-xl lg:text-4xl text-gray-strong-color font-semibold">
            Página No Encontrada
          </h3>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <Button
              onClick={handleClick}
              size="large"
              variant="gray"
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
