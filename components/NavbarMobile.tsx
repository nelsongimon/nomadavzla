"use client";

import { useState } from "react";
import Cart from "./Cart";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import MobileSidebarMenu from "./MobileSidebarFilter";
import SearchMobileIcon from "./SearchMobileIcon";
import Wishlist from "./Wishlist";
import Container from "./ui/Container";
import Search from "./Search";

export default function NavbarMobile() {
  const [isSearchMobileOpen, setIsSearchMobileOpen] = useState(false);
  return (
    <>
      <div className="border-b-2 border-gray-100 sticky top-0 bg-white z-20">
        <Container>
          {isSearchMobileOpen ? (
            <nav className="flex items-center justify-center w-full h-[65px]">
              <Search
                isSearchMobileOpen={isSearchMobileOpen}
                setIsSearchMobileOpen={(value: boolean) => setIsSearchMobileOpen(value)}
                mobile
              />
            </nav>
          ) : (
            <nav className="flex items-center justify-between gap-7 h-[65px]">
              <div className="flex h-full">
                <MenuIcon />
                <SearchMobileIcon setIsSearchOpen={(value: boolean) => setIsSearchMobileOpen(value)} />
              </div>
              <Logo />
              <div className="flex h-full">
                <Wishlist />
                <Cart />
              </div>
            </nav>
          )}
        </Container>
      </div>
    </>
  );
}
