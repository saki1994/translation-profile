import React from "react";
import "../stylesheet/Navbar.scss";
import "../stylesheet/media.scss";
import polishFlag from "../images/pl-flag.png";
import britishFlag from "../images/gb-flag.png";
import danishFlag from "../images/dk-flag.png";

const Navbar = () => {
  return (
    <nav className="navbar nav-mobile">
      <ul className="languages">
        <li>
          <img src={polishFlag} alt="polish-flag" />
        </li>
        <li>
          <img src={britishFlag} alt="british-flag" />
        </li>
        <li>
          <img src={danishFlag} alt="danish-flag" />
        </li>
      </ul>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact </li>
      </ul>
    </nav>
  );
};

export default Navbar;
