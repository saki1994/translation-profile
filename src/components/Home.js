import React, { useEffect, useState } from "react";
import "../stylesheet/Header/Header.scss";

const Home = ({ language }) => {
  const [title, setTitle] = useState("Your translator...");
  const [name, setName] = useState("Hi, I am Deniz");

  const setHomeText = (name, title) => {
    setTitle(title);
    setName(name);
  };

  useEffect(
    () => {
      if (language === "danish") {
        setHomeText("Hej, jeg hedder Deniz", "Din oversætter...");
      } else if (language === "polish") {
        setHomeText("Cześć, Jestem Deniz", "Twój tłumacz...");
      } else {
        setHomeText("Hi, I am Deniz", "Your translator...");
      }
    },
    [language]
  );
  return (
    <div id="header">
      <h1>
        {name}
      </h1>
      <h2>
        {title}
      </h2>
    </div>
  );
};

export default Home;
