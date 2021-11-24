import React from "react";
import reviews from "../review-data";
import Review from "./Review";
import "../stylesheet/Testimony/testimony.scss";

const Testimonies = () => {
  return (
    <div className="testimony" id="testimony">
      <h3>Testimony</h3>

      <div className="review-box">
        {reviews.english.map((review, index) => {
          return (
            <Review
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
