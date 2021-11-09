import React from "react";
import services, { promises } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Stack from "@mui/material/Stack";

const Services = () => {
  return (
    <div className="services">
      <h3>Languages</h3>
      <div className="services-offer mobile">
        {services.english.map((card, index) => {
          return (
            <Service
              key={index}
              photo={card.img}
              title={card.title}
              body={card.text}
            />
          );
        })}
      </div>
      <Stack>
        {promises.english.map((promise, index) => {
          return (
            <Service key={index} photo={promise.img} body={promise.title} />
          );
        })}
      </Stack>
    </div>
  );
};

export default Services;
