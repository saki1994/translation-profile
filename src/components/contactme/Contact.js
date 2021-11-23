import React from "react";
import { Link, ListItemButton } from "@mui/material";

const Contact = ({ link, img, text }) => {
  return (
    <ListItemButton>
      <Link href={link}>
        <img src={img} alt={text} />
      </Link>
    </ListItemButton>
  );
};

export default Contact;
