import React from "react";

const NavLink = ({ link, text }) => {
  return (
    <a href={link}>
      {text}
    </a>
  );
};

export default NavLink;
