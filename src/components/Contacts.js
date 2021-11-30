import React, { useState, useEffect } from "react";
import { Typography, List } from "@mui/material";
import upwork from "../images/upwork.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";
import Contact from "./contactme/Contact";
import "../stylesheet/Contact/contact.scss";

const Contacts = ({ language, newClassStyle, removeStyle }) => {
  const [contactText, setContactText] = useState({
    header: "Contact",
    pricing: "For pricing, contact me @",
    phone: "or call me @"
  });

  const changeLanguage = (header, pricing, phone) => {
    setContactText(previous => {
      return {
        header: header,
        pricing: pricing,
        phone: phone
      };
    });
  };

  useEffect(
    () => {
      if (language === "danish") {
        changeLanguage(
          "Kontakt",
          "For pris, kontakt mig @",
          "eller ring til mig @ "
        );
        removeStyle();
      } else if (language === "polish") {
        changeLanguage(
          "Kontakt",
          "W sprawie wyceny skontaktuj się ze mną @",
          "lub zadzwoń @"
        );
        removeStyle();
      } else {
        changeLanguage("Contact", "For pricing, contact me @", "or call me @");
        removeStyle();
      }
    },
    [language, removeStyle]
  );

  return (
    <div className={newClassStyle} id="contact">
      <h3>
        {contactText.header}
      </h3>
      <Typography className={`contact-text  ${newClassStyle}`}>
        {contactText.pricing}
      </Typography>
      <List className="contact-icon">
        <Contact
          link="https://wa.me/+48690564981"
          img={whatsapp}
          text="whatsapp"
        />
        <Contact link="#" img={upwork} text="upwork" />
        <Contact
          link="mailto:biancasarahdeniz@gmail.com"
          img={email}
          text="email"
        />
      </List>
      <Typography className={`contact-text  ${newClassStyle}`}>
        {contactText.phone}
      </Typography>
      <Typography className={`contact-text  ${newClassStyle}`}>
        +48 123 456 789
      </Typography>
    </div>
  );
};

export default Contacts;
