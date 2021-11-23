import React from "react";
import { Typography, List, ListItemButton, Link } from "@mui/material";
import upwork from "../images/upwork.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";

const Contacts = () => {
  return (
    <div>
      <h3>Contact</h3>
      <Typography>You can contact me @</Typography>
      <List>
        <ListItemButton>
          <Link href="#">
            <img src={upwork} alt="upwork" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link href="https://wa.me/+48690564981">
            <img src={whatsapp} alt="whatsapp" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link href="mailto:biancasarahdeniz@gmail.com">
            <img src={email} alt="email" />
          </Link>
        </ListItemButton>
      </List>
      <Typography>or call me @</Typography>
      <Typography>+48 123 456 789</Typography>
    </div>
  );
};

export default Contacts;
