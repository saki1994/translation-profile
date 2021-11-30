import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const Services = ({ photo, title, body, addAnimation }) => {
  return (
    <Card className={`promise-div  ${addAnimation}`}>
      <CardMedia component="img" height="120" image={photo} alt={title} />
      <CardContent className="card-text-div">
        <Typography
          className="service-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="promise-title"
        >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Services;
