import { useContext } from "react";
import { LanguagesData } from "../Apps";
import { List } from "@mui/material";
import Contact from "./Contact";
import upwork from "../images/upwork.png";
import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";

const Contacts = () => {
  const data = useContext(LanguagesData);

  return (
    <div id="contact">
      <h3>
        {data.contactTitle}
      </h3>
      <p className="contact-text">
        {data.contact}
      </p>
      <List className="contact-icon">
        <Contact
          link="https://wa.me/+48690564981"
          img={whatsapp}
          text="whatsapp"
        />
        <Contact link="#" img={upwork} text="upwork" />
        <Contact
          link="mailto:biancasarahdeniz@gmail.com"
          img={email}
          text="email"
        />
      </List>
      <p className="contact-text">
        {data.phoneNum}
      </p>
      <p className="contact-text">+48 123 456 789</p>
    </div>
  );
};

export default Contacts;
