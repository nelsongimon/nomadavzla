import Link from "next/link";
import { logo } from "@/data"

export default function Logo() {
  const image = logo || "Nomada Logo";
  return (
    <Link href="/">
      {image}
    </Link>
  );
}
