import React from "react";
import { Link, ListItemButton } from "@mui/material";

const Contact = ({ link, img, text }) => {
  return (
    <ListItemButton className="links">
      <Link href={link}>
        <img className={text} src={img} alt={text} />
      </Link>
    </ListItemButton>
  );
};

export default Contact;
