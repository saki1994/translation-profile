import { useContext } from "react";
import { LanguagesData } from "../Apps";

const Footer = () => {
  const data = useContext(LanguagesData);

  return (
    <p align="center">
      {data.copyright}
    </p>
  );
};

export default Footer;
