import React from "react";
import reviews from "../review-data";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Testimony from "./testimony/Testimony";

const Testimonies = () => {
  return (
    <div>
      <h3>Testimony</h3>
      <Box>
        <Rating
          className="review-stars"
          defaultValue={5}
          max={5}
          readOnly={true}
        />
        <Box className="review-num">3 Reviews</Box>
      </Box>
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
  );
};

export default Testimonies;
