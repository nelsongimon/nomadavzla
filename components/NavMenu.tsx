"use client";

import { HeaderMenuItems } from "@/types";
import ItemMenu from "./ItemMenu";

import { menuItems } from "@/data";

// interface NavMenuProps {
//   menuItems: HeaderMenuItems[];
// }

export default function NavMenu() {

  return (
    <ul className="flex h-full">
      {menuItems.map((item, index) => (
        <ItemMenu key={index} item={item} />
      ))}
    </ul>
  );
}
