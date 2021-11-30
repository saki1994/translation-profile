import React, { useState, useEffect } from "react";
import "../stylesheet/Header/Header.scss";

const Footer = ({ language, addTextStyle, removeStyle }) => {
  const [footerText, setFooterText] = useState(
    "Copyright © 2021 Deniz Atici, All Rights Reserved."
  );

  useEffect(
    () => {
      if (language === "danish") {
        setFooterText(
          "Copyright © 2021 Deniz Atici, Alle rettigheder forbeholdes."
        );
        removeStyle();
      } else if (language === "polish") {
        setFooterText(
          "Copyright © 2021 Deniz Atici, Wszelkie prawa zastrzeżone."
        );
        removeStyle();
      } else {
        setFooterText("Copyright © 2021 Deniz Atici, All Rights Reserved.");
        removeStyle();
      }
    },
    [language, removeStyle]
  );

  return (
    <p align="center" variant="body2" className={addTextStyle}>
      {footerText}
    </p>
  );
};

export default Footer;
