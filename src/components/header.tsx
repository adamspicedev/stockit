import Image from "next/image";
import Link from "next/link";
import React from "react";

import NavItems from "./nav-items";
import UserDropDown from "./user-drop-down";

const Header = () => {
  return (
    <header className="header sticky top-0">
      <div className="header-wrapper container">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="StockIt Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropDown />
      </div>
    </header>
  );
};
export default Header;
