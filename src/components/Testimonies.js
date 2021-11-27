import React from "react";
import reviews, { header } from "../review-data";
import Review from "./Review";
import "../stylesheet/Testimony/testimony.scss";

const Testimonies = () => {
  return (
    <div className="testimony" id="testimony">
      <h3>
        {header.polish}
      </h3>

      <div className="review-box">
        {reviews.polish.map((review, index) => {
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
