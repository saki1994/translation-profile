import React, { useState, useEffect } from "react";
import "../stylesheet/Navbar/Navbar.scss";
import NavLink from "./navbar/NavLink.js";
import { List } from "@mui/material";

const Navbar = ({ language, boxAnimation, removeStyle }) => {
  const [navTxt, setNavTxt] = useState({
    home: "Home",
    services: "Services",
    testimony: "Testimony",
    contact: "Contact"
  });

  const setNavbar = (home, services, testimony, contact) => {
    return setNavTxt(previous => {
      return {
        home: home,
        services: services,
        testimony: testimony,
        contact: contact
      };
    });
  };

  useEffect(
    () => {
      if (language === "danish") {
        setNavbar("Hjem", "Tjenester", "Vidnesbyrd", "Kontakt");
        removeStyle();
      } else if (language === "polish") {
        setNavbar("Dom", "Usługi", "Świadectwo", "Kontakt");
        removeStyle();
      } else {
        setNavbar("Home", "Services", "Testimony", "Contact");
        removeStyle();
      }
    },
    [language, removeStyle]
  );

  return (
    <List className={`nav-links ${boxAnimation}`}>
      <NavLink link="#home" text={navTxt.home} />
      <NavLink link="#services" text={navTxt.services} />
      <NavLink link="#testimony" text={navTxt.testimony} />
      <NavLink link="#contact" text={navTxt.contact} />
    </List>
  );
};

export default Navbar;
