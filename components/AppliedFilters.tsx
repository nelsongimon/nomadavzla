"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { convertToCapitalize } from "@/lib/utils";
import qs from "query-string";
import useCurrentPage from "@/hooks/useCurrentPage";

export default function AppliedFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);
  const attributes = Object.entries(qs.parse(searchParams.toString()));

  const onRemoveItemFilter = (attribute: [string, string | (string | null)[] | null], value: string) => {
    const current = qs.parse(searchParams.toString());
    const filters = attribute[1]?.toString().split(",").filter((item: string) => (item !== value));
    const attributeKey = attribute[0];

    const query = {
      ...current,
      [attributeKey]: filters,
    }

    if (filters?.length === 0) {
      query[attributeKey] = null;
    } else {
      query[attributeKey] = filters?.join(",");
    }
    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url, { scroll: false });
    updatePage(1);
  }

  return (
    <div className="flex gap-x-2 items-center min-h-[50px]">
      <span className="font-semibold text-base text-primary-color">
        Filtros Aplicados:
      </span>
      {attributes.map((attribute) => {
        const values = attribute[1]?.toString().split(",");
        return (
          values?.map((value, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => onRemoveItemFilter(attribute, value)}
              className="
              flex 
              items-center
              px-2
              py-1
              rounded-full
              font-light
              text-gray-strong-color
              text-sm
              bg-gray-100
              duration-300
              hover:opacity-70
            "
            >
              <span className="text-xs">
                <X size={15} className="stroke-[1]" />
              </span>
              <span>
                {convertToCapitalize(value)}
              </span>
            </motion.button>
          ))
        )
      })}
    </div>
  );
}
