"use client";

import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "default" | "small" | "large" | "icon";
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "gray" | "white";
  type?: string;
}


export default function Button({
  label,
  onClick,
  size = "default",
  variant = "default"
}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-md duration-300",
        size === "default" ? "py-2 px-4" : "",
        size === "small" ? "py-2 px-2 text-xs font-light" : "",
        size === "large" ? "w-full py-2 px-3 text-lg font-light" : "",
        variant === "default" ? "bg-primary-color hover:bg-primary-color/80 text-white " : "",
        variant === "secondary" ? "bg-light-color hover:bg-light-color/80 text-strong-color font-medium" : "",
        variant === "outline" ? "ring-1 ring-primary-color ring-inset hover:ring-secondary-color text-primary-color hover:text-secondary-color" : "",
        variant === "ghost" ? "hover:bg-gray-color text-primary-color" : "",
        variant === "gray" ? "bg-gray-color text-gray-strong-color hover:opacity-50" : "",
        variant === "link" ? "text-primary-color underline-offset-4 hover:underline hover:text-secondary-color" : "",
        variant === "white" ? "ring-2 ring-white ring-inset bg-white text-primary-color hover:bg-white/70" : "",
      )}
    >
      {label}
    </button>
  );
}
