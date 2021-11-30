import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const Review = ({ review, name, company, boxAnimation }) => {
  return (
    <Card className={`review-card ${boxAnimation}`}>
      <CardContent>
        <Typography
          className="review-text"
          variant="body1"
          color="text.secondary"
        >
          "{review}"
        </Typography>
        <Typography className="reviewer" variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography
          className="company-name"
          variant="caption"
          color="text.secondary"
        >
          {company}
        </Typography>
        <Box className="rating">
          <Rating
            className="review-stars"
            size="small"
            defaultValue={5}
            max={5}
            readOnly={true}
          />
          <Box className="review-num">5/5</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Review;
