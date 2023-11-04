"use client";

import { slugify } from "@/lib/utils";
import FilterItem from "./FilterItem";
import { Attribute } from "@/types";

interface FilterProps {
  attributes: Attribute[];
}

export default function Filter({
  attributes
}: FilterProps) {

  return (
    <div className="pr-6 mr-3 sticky top-[90px] h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-color">
      <ul className="flex flex-col gap-y-4 mt-5 mb-20">
        {attributes.map((attribute) => (
          <li key={attribute.id} className="border-b-gray-100 border-b-2 pb-4">
            <h3 className="font-normal text-primary-color text-base mb-4">
              {attribute.name}
            </h3>
            <FilterItem
              attributeKey={slugify(attribute.name)}
              attributeValues={attribute.attribute_values}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
