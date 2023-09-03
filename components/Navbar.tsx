import Container from "./ui/Container";
import NavMenu from "./NavMenu";
import Search from "./Search";
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
    <div className="border-b-2 border-gray-100">
      <Container>
        <nav className="flex items-center justify-between gap-8 h-[70px]">
          <Logo siteLogoUrl={siteLogoUrl} />
          <NavMenu menuItems={headerMenuItems} />
          <Search />
          <Cart />
        </nav>
      </Container>
    </div>
  );
}
