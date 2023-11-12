"use client";

import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "default" | "small" | "large" | "icon" | "none";
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "gray" | "white";
  type?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}


export default function Button({
  children,
  onClick,
  size = "default",
  variant = "default",
  disabled = false,
  className
}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded-md flex gap-x-1 items-center duration-300",
        size === "default" ? "py-2 px-4" : "",
        size === "small" ? "py-1 px-2 text-xs font-light" : "",
        size === "large" ? "px-3 py-2 lg:py-2 lg:px-7 text-base lg:text-lg font-light" : "",
        size === "none" ? "font-light" : "",
        variant === "default" ? "bg-primary-color hover:bg-primary-color/80 text-white" : "",
        variant === "secondary" ? "text-white hover:opacity-80 bg-secondary-color font-normal" : "",
        variant === "outline" ? "ring-1 ring-primary-color ring-inset hover:ring-secondary-color text-primary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-30 disabled:ring-primary-color disabled:text-primary-color" : "",
        variant === "ghost" ? "hover:bg-gray-color text-primary-color" : "",
        variant === "gray" ? "bg-gray-color text-gray-strong-color hover:opacity-80" : "",
        variant === "link" ? "text-primary-color underline-offset-4 underline hover:text-secondary-color" : "",
        variant === "white" ? "ring-2 ring-white ring-inset bg-white text-primary-color hover:bg-white/70" : "",
        className
      )}
    >
      {children}
    </button>
  );
}
