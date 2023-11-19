"use client";

import clsx from "clsx";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function IconButton({
  icon,
  onClick
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(`
        rounded-full
        flex
        items-center
        justify-center
        bg-white
        shadow-md
        p-2
        lg:hover:scale-110
        transition
      `,)}
    >
      {icon}
    </button>
  );
}
