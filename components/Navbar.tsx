import Container from "./ui/Container";
import Wishlist from "./Wishlist";
import NavMenu from "./NavMenu";
import Search from "./Search";
import Logo from "./Logo";
import Cart from "./Cart";
import Login from "./Login";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


export default function Navbar() {

  return (
    <>
      <div className="hidden lg:block sticky top-0 z-20">
        <NavbarDesktop />
      </div>
      <div className="block lg:hidden sticky top-0 z-20">
        <NavbarMobile />
      </div>
    </>
  );
}
