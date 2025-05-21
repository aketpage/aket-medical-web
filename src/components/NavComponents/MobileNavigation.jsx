import React, { useState } from "react";
import "../../styles/NavBar.modules.css";
import "../../styles/HamburgerMenu.modules.css";
import { NavLinks } from "./NavLinks";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <SlMenu
      onClick={() => setOpen(!open)}
      className="hamburger"
      size="30px"
      color="white"
    />
  );

  const closeIcon = (
    <GrClose
      onClick={() => setOpen(!open)}
      className="hamburger"
      size="30px"
      color="white"
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="movileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};
