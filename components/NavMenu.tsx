"use client";

import { menuItems } from "@/data";
import ItemMenu from "./ItemMenu";

export default function NavMenu() {

  return (
    <ul className="flex h-full">
      {menuItems.map((item, index) => (
        <ItemMenu key={index} item={item} />
      ))}
    </ul>
  );
}
