"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { motion } from "framer-motion";

import { Category } from "@/types";
import useCurrentPage from "@/hooks/useCurrentPage";
import { delay } from "lodash";

interface FilterItemProps {
  valueKey: string;
  childrenCategories: Category[];
}

export default function FilterItem({
  valueKey,
  childrenCategories
}: FilterItemProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = useCurrentPage();
  const selectedValue = searchParams.get(valueKey);

  const onAddItemFilter = async (slug: string) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: slug,
    }

    if (current[valueKey] === slug) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url, { scroll: false });
    currentPage.updatePage(1);
  }

  return (
    <ul className="flex flex-col gap-y-3 ml-2">
      {childrenCategories.map((item) => (
        <li
          onClick={() => onAddItemFilter(item.slug)}
          key={item.id}
          className="flex gap-x-2 items-center cursor-pointer"
        >
          <div className="relative h-4 w-4">
            <span className="absolute block h-4 w-4 border-[1px] border-gray-300 p-2 rounded-sm z-10" />
            {selectedValue === item.slug && (
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
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="absolute left-[10px] bottom-[1px] block h-[14px] w-[3px] z-10 bg-white rotate-45"
                />
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 9 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="absolute left-[3px] bottom-[1px] block h-[9px] w-[3px] z-10 bg-white -rotate-45"
                />
              </>
            )}
          </div>
          {item.image && (
            <div className="relative aspect-video w-8">
              <Image
                fill
                src={item.image.src}
                alt={item.image.alt}
                className="object-contain"
              />
            </div>
          )}
          <div className={clsx(`
            text-base font-normal`,
            selectedValue === item.slug ? "text-primary-color" : "text-gray-strong-color"
          )}>
            {item.name}
          </div>
        </li>
      ))}
    </ul>
  );
}
