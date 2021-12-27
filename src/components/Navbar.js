import { useContext } from "react";
import { LanguagesData } from "../App";
import NavLink from "./NavLink.js";
import { List } from "@mui/material";

const Navbar = () => {
  const data = useContext(LanguagesData);

  return (
    <List className="nav-links">
      <NavLink link="#home" text={data.navTextData.home} />
      <NavLink link="#services" text={data.navTextData.services} />
      <NavLink link="#testimony" text={data.navTextData.testimony} />
      <NavLink link="#contact" text={data.navTextData.contact} />
    </List>
  );
};

export default Navbar;
