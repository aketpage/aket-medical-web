import React from "react";
import "../../styles/NavBar.modules.css";
import { NavLinks } from "./NavLinks";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLinks />
    </nav>
  );
};
