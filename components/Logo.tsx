import logo from "@/public/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative">
        <Image
          src={logo}
          width={155}
          height={30}
          alt="Logo"
        />
      </div>
    </Link>
  );
}
