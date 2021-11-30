import React, { useState, useEffect } from "react";
import "../stylesheet/Navbar/Navbar.scss";
import NavLink from "./navbar/NavLink.js";
import { List } from "@mui/material";

const Navbar = ({ language, newClassStyle, removeStyle }) => {
  const [home, setHome] = useState("Home");
  const [services, setServices] = useState("Services");
  const [testimony, setTestimony] = useState("Testimony");
  const [contact, setContact] = useState("Contact");

  const setNavbar = (home, services, testimony, contact) => {
    setHome(home);
    setServices(services);
    setTestimony(testimony);
    setContact(contact);
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
    <List className={`nav-links ${newClassStyle}`}>
      <NavLink link="#home" text={home} />
      <NavLink link="#services" text={services} />
      <NavLink link="#testimony" text={testimony} />
      <NavLink link="#contact" text={contact} />
    </List>
  );
};

export default Navbar;
