import Container from "./ui/Container";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import Cart from "./Cart";

interface NavbarProps {
  header: Header;
}

export default function Navbar({
  header
}: NavbarProps) {
  const {
    siteLogoUrl,
    headerMenuItems
  } = header;
  return (
    <Container>
      <Logo siteLogoUrl={siteLogoUrl} />
      <NavMenu menuItems={headerMenuItems} />
      <Cart />
    </Container>
  );
}
