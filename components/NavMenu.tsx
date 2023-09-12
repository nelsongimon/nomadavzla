"use client";

import { HeaderMenuItems } from "@/types";
import ItemMenu from "./ItemMenu";

interface NavMenuProps {
  menuItems: HeaderMenuItems[];
}

export default function NavMenu({
  menuItems
}: NavMenuProps) {

  return (
    <ul className="flex h-full">
      {menuItems.map((item) => (
        <ItemMenu key={item.ID} item={item} />
      ))}
    </ul>
  );
}
