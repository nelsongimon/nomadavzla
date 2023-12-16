import logo from "@/public/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative h-[85px] lg:h-[80px] w-full aspect-video">
        <Image
          src={logo}
          fill
          alt="Logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
}
