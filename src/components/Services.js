import React from "react";
import services, { promises } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Carousel from "react-bootstrap/Carousel";

const Services = () => {
  return (
    <div id="services">
      <h3>Services</h3>
      <div id="services-offer">
        {services.polish.map((card, index) => {
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
      <div className="promises">
        <Carousel variant="dark">
          {promises.polish.map((promise, index) => {
            return (
              <Carousel.Item>
                <Service key={index} photo={promise.img} body={promise.title} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
