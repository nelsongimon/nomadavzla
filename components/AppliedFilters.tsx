"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";

import { useRouter, useSearchParams } from "next/navigation";
import { convertToCapitalize } from "@/lib/utils";
import qs from "query-string";
import useCurrentPage from "@/hooks/useCurrentPage";

export default function AppliedFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);
  const filters = Object.entries(qs.parse(searchParams.toString()));

  const onRemoveItemFilter = (category: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [category]: null
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });
    router.push(url);
    updatePage(1);
  }

  return (
    <div className="flex gap-x-2 items-center min-h-[50px]">
      <span className="font-semibold text-base text-primary-color">
        Filtros Aplicados ({filters.length}):
      </span>
      {filters.map((filter, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          onClick={() => onRemoveItemFilter(filter[0])}
          className="
            flex 
            gap-x-1
            items-center
            px-3
            py-1
            rounded-full
            font-light
            text-gray-strong-color
            text-base
           bg-gray-100
            duration-300
            hover:opacity-70
          "
        >
          <span className="text-xs">
            <X size={15} className="stroke-[1]" />
          </span>
          <span>
            {convertToCapitalize(filter[1] as string)}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
