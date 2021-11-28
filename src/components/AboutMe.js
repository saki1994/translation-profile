import React, { useState, useEffect } from "react";
import profile from "../images/profile-photo.PNG";
import "../stylesheet/About/AboutMe.scss";

const AboutMe = ({ language }) => {
  const [header, setHeader] = useState("About Me");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const descriptionList = {
    english:
      "Currently working as a senior executive processor at Apple Maps with 8+ years experience with translation in Danish and fluent in Polish and English." +
      "I have worked in translating an ecommerce website from product to FAQ, Terms and Condition and Privacy.",
    danish:
      "Arbejder i øjeblikket som senior executive processor hos Apple Maps med 8+ års erfaring med oversættelse på dansk og flydende polsk og engelsk." +
      "Jeg har arbejdet med at oversætte et e-handelswebsted fra produkt til ofte stillede spørgsmål, vilkår og betingelser og privatliv.",
    polish:
      "Obecnie pracuje jako starszy procesor wykonawczy w Apple Maps z ponad 8-letnim doświadczeniem w tłumaczeniach na język duński oraz biegle w języku polskim i angielskim." +
      "Pracowałem nad tłumaczeniem witryny e-commerce z produktu na FAQ, Warunki i Prywatność."
  };

  const [about, setAbout] = useState({
    name: "Name",
    location: "Location",
    address: "Szczecin, Poland",
    description: descriptionList.english
  });

  const aboutText = (name, location, add, desc, header) => {
    setAbout(previous => {
      return {
        name: name,
        location: location,
        address: add,
        description: desc
      };
    });

    setHeader(header);
  };

  useEffect(
    () => {
      const { english, danish, polish } = descriptionList;
      if (language === "danish") {
        aboutText("Navn", "Placering", "Szczecin, Polen", danish, "Om Mig");
      } else if (language === "polish") {
        aboutText("nazwa", "Lokalizacja", "Szczecin, Polska", polish, "O mnie");
      } else {
        aboutText("Name", "Location", "Szczecin, Poland", english, "About Me");
      }
    },
    [descriptionList, language]
  );
  return (
    <div id="about-me">
      <h3>
        {header}
      </h3>
      <img src={profile} alt="profile-pic" />
      <div className="profile-info">
        <p>
          <span>{about.name}: </span>Deniz Atici
        </p>
        <p>
          <span>
            {about.location}:
          </span>
          {about.address}
        </p>
      </div>
      <p className="description">
        {about.description}
      </p>
    </div>
  );
};

export default AboutMe;
