import React, { useEffect, useState } from "react";
import { headerData } from "../home-data.js";
import "../stylesheet/Header/Header.scss";

const Home = ({ language }) => {
  const [headerInfo, setHeader] = useState(headerData.english);
  const [addStyle, setAddStyle] = useState("");

  const removeStyle = () => {
    return setTimeout(function() {
      setAddStyle("");
    }, 1000);
  };

  useEffect(
    () => {
      if (language === "danish") {
        setHeader(headerData.danish);
        setAddStyle("style-sample");
        removeStyle();
      } else if (language === "polish") {
        setHeader(headerData.polish);
        setAddStyle("style-sample");
        removeStyle();
      } else {
        setHeader(headerData.english);
        setAddStyle("style-sample");
        removeStyle();
      }
    },
    [language]
  );
  return (
    <div id="header">
      <h1 className={addStyle}>
        {headerInfo.name}
      </h1>
      <h2 className={addStyle}>
        {headerInfo.workTitle}
      </h2>
    </div>
  );
};

export default Home;
