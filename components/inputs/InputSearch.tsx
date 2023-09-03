"use client";

import { Search } from "lucide-react";

interface InputSearchProps {
  id: string;
  label: string;
  type?: string;
}

export default function InputSearch({
  id,
  label,
  type = "text"
}: InputSearchProps) {
  return (
    <div className="w-full relative">
      <span className="absolute left-[7px] h-full flex items-center">
        <Search className="text-gray-400 stroke-[2] w-4 h-4" />
      </span>
      <input
        id={id}
        type={type}
        placeholder={label}
        autoComplete="off"
        className="
          px-3
          py-[3px]
          pl-7
          ring-2
          ring-gray-200
          focus:ring-gray-400
          outline-none
          focus:outline-none
          duration-300
          rounded-full
        "
      />
    </div>
  );
}
