"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import qs from "query-string";

import { AttributeValue } from "@/types";
import useCurrentPage from "@/hooks/useCurrentPage";
import { addAbsolutePathImage } from "@/lib/utils";


interface FilterItemProps {
  attributeKey: string;
  attributeValues: AttributeValue[];
}

export default function FilterItem({
  attributeKey,
  attributeValues,
}: FilterItemProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const updatePage = useCurrentPage(state => state.updatePage);
  const selectedValues = searchParams.get(attributeKey)?.split(",") || [];


  const onAddItemFilter = async (value: string) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const current = qs.parse(searchParams.toString());
    const filters = selectedValues.some((item) => (item === value)) ? selectedValues.filter((item) => (item !== value)) : [...selectedValues, value];

    const query = {
      ...current,
      [attributeKey]: filters,
    }

    if (filters.length === 0) {
      query[attributeKey] = null;
    } else {
      query[attributeKey] = filters.join(",");
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url, { scroll: false });
    updatePage(1);

  }


  return (
    <ul className="flex flex-col gap-y-3 ml-2">
      {attributeValues.map((value) => (
        <li
          onClick={() => onAddItemFilter(value.slug)}
          key={value.id}
          className="flex gap-x-2 items-center cursor-pointer"
        >
          <div className="relative h-4 w-4">
            <span className="absolute block h-4 w-4 border-[1px] border-gray-300 p-2 rounded-sm z-10" />
            {selectedValues.some((item) => (item === value.slug)) && (
              <>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.3 }}
                  className="absolute block h-4 w-4 border-[1px] border-secondary-color p-2 rounded-sm z-10 bg-secondary-color"
                />
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 14 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                  className="absolute left-[10px] bottom-[1px] block h-[14px] w-[3px] z-10 bg-white rotate-45"
                />
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 9 }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                  className="absolute left-[3px] bottom-[1px] block h-[9px] w-[3px] z-10 bg-white -rotate-45"
                />
              </>
            )}
          </div>
          {value.image && (
            <div className="relative aspect-video w-8">
              <Image
                fill
                src={addAbsolutePathImage(value.image)}
                alt="Attr image"
                className="object-contain"
              />
            </div>
          )}
          <div className={clsx(`
            flex gap-x-2 items-center text-base font-normal`,
            selectedValues.some((item) => (item === value.slug)) ? "text-primary-color" : "text-gray-strong-color"
          )}>
            {value.name}
            <span className="text-xs px-[5px] py-[3px] bg-gray-100 text-gray-strong-color  rounded-full flex items-center justify-center">
              {value.products_count}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
