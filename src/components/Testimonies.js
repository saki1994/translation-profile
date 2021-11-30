import React, { useState, useEffect } from "react";
import reviews, { header } from "../review-data";
import Testimony from "./testimony/Testimony";
import "../stylesheet/Testimony/testimony.scss";

const Testimonies = ({ language, boxAnimation, removeStyle }) => {
  const [title, setTitle] = useState("Testimony");
  const [testimony, setTestimony] = useState(reviews.english);

  // function to change language for title and testimony text
  const changeLanguage = (header, review) => {
    setTitle(header);
    setTestimony(review);
    removeStyle();
  };

  useEffect(
    () => {
      if (language === "english") {
        changeLanguage(header.english, reviews.english);
      } else if (language === "polish") {
        changeLanguage(header.polish, reviews.polish);
      } else {
        changeLanguage(header.danish, reviews.danish);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  );
  return (
    <div className="testimony" id="testimony">
      <h3 className={boxAnimation}>
        {title}
      </h3>

      <div className="review-box">
        {testimony.map((review, index) => {
          return (
            <Testimony
              key={index}
              review={review.review}
              name={review.name}
              company={review.company}
              boxAnimation={boxAnimation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonies;
