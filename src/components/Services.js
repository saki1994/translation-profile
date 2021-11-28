import React, { useState, useEffect } from "react";
import services, { promises } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Carousel from "react-bootstrap/Carousel";

const Services = ({ language }) => {
  const [serviceData, setServiceData] = useState(services.english);
  const [promiseData, setPromiseData] = useState(promises.english);
  const [header, setHeader] = useState("Services");

  useEffect(
    () => {
      if (language === "danish") {
        setServiceData(services.danish);
        setPromiseData(promises.danish);
        setHeader("Service-danish");
      } else if (language === "polish") {
        setServiceData(services.polish);
        setPromiseData(promises.polish);
        setHeader("Service-polish");
      } else {
        setServiceData(services.english);
        setPromiseData(promises.english);
        setHeader("Services");
      }
    },
    [language]
  );
  return (
    <div id="services">
      <h3>
        {header}
      </h3>
      <div id="services-offer">
        {serviceData.map((card, index) => {
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
          {promiseData.map((promise, index) => {
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
