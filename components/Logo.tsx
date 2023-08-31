interface LogoProps {
  siteLogoUrl: string | null;
}

export default function Logo({
  siteLogoUrl
}: LogoProps) {
  const image = siteLogoUrl || "Nomada logo";
  return (
    <div>{image}</div>
  );
}
