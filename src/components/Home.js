import React, { useEffect, useState } from "react";
import { headerData } from "../home-data.js";
import "../stylesheet/Header/Header.scss";

const Home = ({ language }) => {
  const [headerInfo, setHeader] = useState(headerData.english);

  useEffect(
    () => {
      if (language === "danish") {
        setHeader(headerData.danish);
      } else if (language === "polish") {
        setHeader(headerData.polish);
      } else {
        setHeader(headerData.english);
      }
    },
    [language]
  );
  return (
    <div id="header">
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
