import { useContext } from "react";
import { LanguagesData } from "../Apps";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const data = useContext(LanguagesData);

  return (
    <div className="testimony" id="testimony">
      <h3>
        {data.reviewTitle}
      </h3>
      <div className="review-box">
        {data.reviews.map((review, index) => {
          return (
            <ReviewCard
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

export default Reviews;
