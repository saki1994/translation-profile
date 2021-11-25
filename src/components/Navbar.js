import "../stylesheet/Navbar/Navbar.scss";
import NavLink from "./navbar/NavLink.js";
import { List } from "@mui/material";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar nav-mobile">
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
