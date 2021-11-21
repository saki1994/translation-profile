import React from "react";
import services, { promises } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Stack from "@mui/material/Stack";
import Carousel from "react-bootstrap/Carousel";

const Services = () => {
  return (
    <div className="services">
      <h3>Services</h3>
      <Stack className="services-offer mobile">
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
      </Stack>
      <Carousel className="promises-offer">
        {promises.english.map((promise, index) => {
          return (
            <Carousel.Item>
              <Service key={index} photo={promise.img} body={promise.title} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Services;
