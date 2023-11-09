"use client";

import { Search } from "lucide-react";

interface SearchMobileIconProps {
  setIsSearchOpen: (value: boolean) => void;
}

export default function SearchMobileIcon({
  setIsSearchOpen,
}: SearchMobileIconProps) {
  return (
    <div className="h-full flex items-center">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="h-full group relative"
      >
        <Search className="text-primary-color stroke-[1.5] w-6 h-6 mx-2" />
        <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300"></span>
      </button>
    </div>
  );
}
