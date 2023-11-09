"use client";

import { slugify } from "@/lib/utils";
import FilterItem from "./FilterItem";
import { Attribute } from "@/types";
import clsx from "clsx";

interface FilterProps {
  attributes: Attribute[];
  mobile?: boolean;
}

export default function Filter({
  attributes,
  mobile = false
}: FilterProps) {

  return (
    <div className={clsx(`pr-6 mr-3 sticky top-[90px] h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-color`, mobile && "h-[90vh]")}>
      <ul className={clsx(`flex flex-col gap-y-4 mt-5 mb-20`, mobile && "mb-7")}>
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
