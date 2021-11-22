import React from "react";
import reviews from "../review-data";
import Testimony from "./testimony/Testimony";
import "../stylesheet/Testimony/testimony.scss";

const Testimonies = () => {
  return (
    <div className="testimony">
      <h3>Testimony</h3>

      <div className="review-box">
        {reviews.english.map((review, index) => {
          return (
            <Testimony
              key={index}
              review={review.review}
              name={review.name}
              company={review.company}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonies;
