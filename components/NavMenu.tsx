"use client";

import Link from "next/link";

interface NavMenuProps {
  menuItems: HeaderMenuItems[];
}

export default function NavMenu({
  menuItems
}: NavMenuProps) {

  return (
    <ul className="flex gap-x-6 h-full">
      {menuItems.map((item) => (
        <Link key={item.ID} href={item.url}>
          <li className="
            font-normal
            text-base
            text-gray-strong-color
            hover:text-primary-color
            relative
            h-full
            group
            flex
            items-center
          ">
            <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300"></span>
            <span>
              {item.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
