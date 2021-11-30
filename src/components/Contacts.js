import React, { useState, useEffect } from "react";
import { Typography, List } from "@mui/material";
import upwork from "../images/upwork.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";
import Contact from "./contactme/Contact";
import "../stylesheet/Contact/contact.scss";

const Contacts = ({ language, boxAnimation, removeStyle }) => {
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
    removeStyle();
  };

  useEffect(
    () => {
      if (language === "danish") {
        changeLanguage(
          "Kontakt",
          "For pris, kontakt mig @",
          "eller ring til mig @ "
        );
      } else if (language === "polish") {
        changeLanguage(
          "Kontakt",
          "W sprawie wyceny skontaktuj się ze mną @",
          "lub zadzwoń @"
        );
      } else {
        changeLanguage("Contact", "For pricing, contact me @", "or call me @");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  );

  return (
    <div id="contact">
      <h3 className={boxAnimation}>
        {contactText.header}
      </h3>
      <Typography className={`contact-text  ${boxAnimation}`}>
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
      <Typography className={`contact-text  ${boxAnimation}`}>
        {contactText.phone}
      </Typography>
      <Typography className={`contact-text  ${boxAnimation}`}>
        +48 123 456 789
      </Typography>
    </div>
  );
};

export default Contacts;
