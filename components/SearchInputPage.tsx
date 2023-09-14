"use client";

import { useParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";

import useCurrentPage from "@/hooks/useCurrentPage";

export default function SearchInputPage() {
  const params = useParams();
  const router = useRouter();
  const currentPage = useCurrentPage();
  const [inputValue, setInputValue] = useState(decodeURIComponent(params.query as string));

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/busqueda/${inputValue}`);
    currentPage.updatePage(1);
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center relative h-full">
      <input
        name="input"
        id="input"
        type="text"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="
                bg-gray-100
                rounded-full
                w-96
                py-3
                px-7
                focus:outline-none

              "
      />
      <button
        type="submit"
        className="absolute right-3"
      >
        <Search className="text-gray-300 hover:text-gray-500 duration-300" />
      </button>


    </form>
  );
}
