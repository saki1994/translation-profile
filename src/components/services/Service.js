import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Services = ({ photo, title, body }) => {
  return (
    <Card className=" promise-div">
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
