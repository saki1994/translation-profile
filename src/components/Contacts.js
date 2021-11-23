import React from "react";
import { Typography, List } from "@mui/material";
import upwork from "../images/upwork.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";
import Contact from "./contactme/Contact";
import "../stylesheet/Contact/contact.scss";

const Contacts = () => {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <Typography className="contact-text">
        You can contact / hire me @
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
      <Typography className="contact-text">or call me @</Typography>
      <Typography className="contact-text">+48 123 456 789</Typography>
    </div>
  );
};

export default Contacts;
