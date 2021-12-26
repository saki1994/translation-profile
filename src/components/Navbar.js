import { useContext } from "react";
import { LanguagesData } from "../Apps";
import NavLink from "./NavLink.js";
import { List } from "@mui/material";

const Navbar = () => {
  const data = useContext(LanguagesData);

  return (
    <List className="nav-links">
      <NavLink link="#home" text={data.navTextData[0]} />
      <NavLink link="#services" text={data.navTextData[1]} />
      <NavLink link="#testimony" text={data.navTextData[2]} />
      <NavLink link="#contact" text={data.navTextData[3]} />
    </List>
  );
};

export default Navbar;
