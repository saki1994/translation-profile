import React, { useState, useEffect } from "react";
import reviews, { header } from "../review-data";
import Review from "./Review";
import "../stylesheet/Testimony/testimony.scss";

const Testimonies = ({ language, boxAnimation, removeStyle }) => {
  const [title, setTitle] = useState("Testimony");
  const [testimony, setTestimony] = useState(reviews.english);

  useEffect(
    () => {
      if (language === "english") {
        setTitle(header.english);
        setTestimony(reviews.english);
        removeStyle();
      } else if (language === "polish") {
        setTitle(header.polish);
        setTestimony(reviews.polish);
        removeStyle();
      } else {
        setTitle(header.danish);
        setTestimony(reviews.danish);
        removeStyle();
      }
    },
    [language, removeStyle]
  );
  return (
    <div className="testimony" id="testimony">
      <h3 className={boxAnimation}>
        {title}
      </h3>

      <div className="review-box">
        {testimony.map((review, index) => {
          return (
            <Review
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
