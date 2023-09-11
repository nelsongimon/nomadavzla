import Container from "./ui/Container";
import Wishlist from "./Wishlist";
import { Header } from "@/types";
import NavMenu from "./NavMenu";
import Search from "./Search";
import Logo from "./Logo";
import Cart from "./Cart";
import Login from "./Login";

interface NavbarProps {
  header: Header;
}

export default function Navbar({
  header
}: NavbarProps) {

  if (!header) {
    return null;
  }

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
          <div className="ml-auto flex gap-x-2 h-full">
            <Login />
            <Wishlist />
            <Cart />
          </div>
        </nav>
      </Container>
    </div>
  );
}
