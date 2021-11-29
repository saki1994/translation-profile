import React from "react";

const NavLink = ({ link, text, addStyle }) => {
  return (
    <a href={link}>
      {text}
    </a>
  );
};

export default NavLink;
