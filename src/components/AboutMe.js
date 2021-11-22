import React from "react";
import profile from "../images/profile-photo.PNG";
import "../stylesheet/About/AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h3>About Me</h3>
      <img src={profile} alt="profile-pic" />
      <div className="profile">
        <p>
          <span>Name: </span>Deniz Atici
        </p>
        <p>
          <span>Location: </span>Szczecin, Poland
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at diam
        augue. Mauris porttitor est vitae libero tempus, id feugiat ipsum
        tincidunt. Fu amet diam fringilla, viverra purus ac, sollicitudin est.{" "}
      </p>
    </div>
  );
};

export default AboutMe;
