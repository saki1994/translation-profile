import React from "react";
import { ListItem } from "@mui/material";

const NavFlag = ({ photo, alt }) => {
  return (
    <ListItem>
      <img src={photo} alt={alt} />
    </ListItem>
  );
};

export default NavFlag;
