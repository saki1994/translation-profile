import React, { useEffect, useState } from "react";
import { headerData } from "../home-data.js";
import "../stylesheet/Home/home.scss";

const Home = ({ language, newClassStyle, removeStyle }) => {
  const [headerInfo, setHeader] = useState(headerData.english);

  useEffect(
    () => {
      if (language === "danish") {
        setHeader(headerData.danish);
        removeStyle();
      } else if (language === "polish") {
        setHeader(headerData.polish);
        removeStyle();
      } else {
        setHeader(headerData.english);
        removeStyle();
      }
    },
    [language, removeStyle]
  );
  return (
    <div id="header" className={newClassStyle}>
      <h1>
        {headerInfo.name}
      </h1>
      <h2>
        {headerInfo.workTitle}
      </h2>
    </div>
  );
};

export default Home;
