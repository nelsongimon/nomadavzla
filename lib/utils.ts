import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function convertToCapitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function addAbsolutePathImage(image: string) {
  return process.env.NEXT_PUBLIC_IMAGE_PATH + image;
}

export function slugify(str: string): string {
  const normalizedString = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const replacedString = normalizedString.replace(/ñ/g, "n").replace(/Ñ/g, "N");
  return replacedString.replace(/\s+/g, "-").toLowerCase();
}

export function formatPrice(string: string): string[] {
  if (string.includes(".")) {
    const array = string.split(".");
    // Remove trailing zeros from the decimal
    // array[1] = array[1].replace(/0+$/, ""); 
    return array;
  } else {
    return [string];
  }
}
