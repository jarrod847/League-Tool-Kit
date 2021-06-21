import React from "react";
import { NavBarCont, NavHeader, NavLinks } from "../styles/nav/navStyles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarCont>
      <NavHeader>League Tool Kit</NavHeader>
      <NavLinks>
        <Link className="link" to="/champions">
          Champions
        </Link>
        <Link className="link" to="/">
          Summoner
        </Link>
      </NavLinks>
    </NavBarCont>
  );
};

export default NavBar;
