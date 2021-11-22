import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Testimony = ({ review, name, company }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {review}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {company}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimony;
