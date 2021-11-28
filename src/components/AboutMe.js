import React, { useState, useEffect } from "react";
import aboutData from "../home-data.js";
import profile from "../images/profile-photo.PNG";
import "../stylesheet/About/AboutMe.scss";

const AboutMe = ({ language }) => {
  const [aboutMeData, setAboutMeData] = useState(aboutData.english);

  useEffect(
    () => {
      if (language === "danish") {
        setAboutMeData(aboutData.danish);
      } else if (language === "polish") {
        setAboutMeData(aboutData.polish);
      } else {
        setAboutMeData(aboutData.english);
      }
    },
    [language]
  );
  return (
    <div id="about-me">
      <h3>
        {aboutMeData.header}
      </h3>
      <img src={profile} alt="profile-pic" />
      <div className="profile-info">
        <p>
          <span>{aboutMeData.name}: </span>Deniz Atici
        </p>
        <p>
          <span>{aboutMeData.location[0]}: </span> {aboutMeData.location[1]}
        </p>
      </div>
      <p className="description">
        {aboutMeData.description}
      </p>
    </div>
  );
};

export default AboutMe;
