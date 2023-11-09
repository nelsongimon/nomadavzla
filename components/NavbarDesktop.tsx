"use client";

import Container from "./ui/Container";
import Wishlist from "./Wishlist";
import NavMenu from "./NavMenu";
import Search from "./Search";
import Cart from "./Cart";
import Logo from "./Logo";

export default function NavbarDesktop() {
  return (
    <div className="border-b-2 border-gray-100 bg-white">
      <Container>
        <nav className="flex items-center justify-between gap-8 h-[70px]">
          <Logo />
          <NavMenu />
          <Search />
          <div className="ml-auto flex gap-x-2 h-full">
            {/* <Login /> */}
            <Wishlist />
            <Cart />
          </div>
        </nav>
      </Container>
    </div>
  );
}
