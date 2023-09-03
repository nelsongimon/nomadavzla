import Link from "next/link";

interface LogoProps {
  siteLogoUrl: string | null;
}

export default function Logo({
  siteLogoUrl
}: LogoProps) {
  const image = siteLogoUrl || "Nomada Logo";
  return (
    <Link href="/">
      {image}
    </Link>
  );
}
