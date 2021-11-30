import React, { useState, useEffect } from "react";
import aboutData from "../home-data.js";
import profile from "../images/profile-photo.PNG";
import "../stylesheet/About/AboutMe.scss";

const AboutMe = ({ language, removeStyle, boxAnimation }) => {
  const [aboutMeData, setAboutMeData] = useState(aboutData.english);

  useEffect(
    () => {
      if (language === "danish") {
        setAboutMeData(aboutData.danish);
        removeStyle();
      } else if (language === "polish") {
        setAboutMeData(aboutData.polish);
        removeStyle();
      } else {
        setAboutMeData(aboutData.english);
        removeStyle();
      }
    },
    [language, removeStyle]
  );
  return (
    <div id="about-me">
      <h3 className={boxAnimation}>
        {aboutMeData.header}
      </h3>
      <img className={boxAnimation} src={profile} alt="profile-pic" />
      <div className={`profile-info   ${boxAnimation}`}>
        <p>
          <span>{aboutMeData.name}: </span>Deniz Atici
        </p>
        <p>
          <span>{aboutMeData.location[0]}: </span> {aboutMeData.location[1]}
        </p>
      </div>
      <p className={`description  ${boxAnimation}`}>
        {aboutMeData.description}
      </p>
    </div>
  );
};

export default AboutMe;
