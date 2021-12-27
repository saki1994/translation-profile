import { useContext } from "react";
import { LanguagesData } from "../App";

const Footer = () => {
  const data = useContext(LanguagesData);

  return (
    <p align="center">
      {data.copyright}
    </p>
  );
};

export default Footer;
