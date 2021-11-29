import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "../stylesheet/Header/Header.scss";

const Footer = ({ language }) => {
  const [footerText, setFooterText] = useState(
    "Copyright © 2021 Deniz Atici, All Rights Reserved."
  );

  useEffect(
    () => {
      if (language === "danish") {
        setFooterText(
          "Copyright © 2021 Deniz Atici, Alle rettigheder forbeholdes."
        );
      } else if (language === "polish") {
        setFooterText(
          "Copyright © 2021 Deniz Atici, Wszelkie prawa zastrzeżone."
        );
      } else {
        setFooterText("Copyright © 2021 Deniz Atici, All Rights Reserved.");
      }
    },
    [language]
  );

  return (
    <Typography align="center" variant="body2">
      {footerText}
    </Typography>
  );
};

export default Footer;
