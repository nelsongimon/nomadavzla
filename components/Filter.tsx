"use client";

import FilterItem from "./FilterItem";
import { Category } from "@/types";

interface FilterProps {
  categories: {
    parent: Category,
    children: Category[]
  }[];
}

export default function Filter({
  categories
}: FilterProps) {

  return (
    <ul className="flex flex-col gap-y-4 mt-5">
      {categories.map((item) => (
        <li key={item.parent.id} className="border-b-gray-100 border-b-2 pb-4">
          <h3 className="font-normal text-primary-color text-base mb-4">
            {item.parent.name}
          </h3>
          <FilterItem valueKey={item.parent.slug} childrenCategories={item.children} />
        </li>
      ))}
    </ul>
  );
}
