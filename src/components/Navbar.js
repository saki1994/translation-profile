import React from "react";
import "../stylesheet/Navbar/Navbar.scss";
import polishFlag from "../images/pl-flag.png";
import britishFlag from "../images/gb-flag.png";
import danishFlag from "../images/dk-flag.png";
import { List } from "@mui/material";
import NavFlag from "./navbar/NavFlag.js";
import NavLink from "./navbar/NavLink.js";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar nav-mobile">
      <List className="languages">
        <NavFlag photo={polishFlag} alt="polish-flag" />
        <NavFlag photo={britishFlag} alt="british-flag" />
        <NavFlag photo={danishFlag} alt="danish-flag" />
      </List>
      <List className="nav-links">
        <NavLink link="#home" text="Home" />
        <NavLink link="#services" text="Services" />
        <NavLink link="#testimony" text="Testimony" />
        <NavLink link="#contact" text="Contact" />
      </List>
    </nav>
  );
};

export default Navbar;
