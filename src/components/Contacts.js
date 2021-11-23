import React from "react";
import { Typography, List } from "@mui/material";
import upwork from "../images/upwork.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";
import Contact from "./contactme/Contact";

const Contacts = () => {
  return (
    <div>
      <h3>Contact</h3>
      <Typography>You can contact me @</Typography>
      <List>
        <Contact link="#" img={upwork} text="upwork" />
        <Contact
          link="https://wa.me/+48690564981"
          img={whatsapp}
          text="whatsapp"
        />
        <Contact
          link="mailto:biancasarahdeniz@gmail.com"
          img={email}
          text="email"
        />
      </List>
      <Typography>or call me @</Typography>
      <Typography>+48 123 456 789</Typography>
    </div>
  );
};

export default Contacts;
