import React, { useState, useEffect } from "react";
import services, { promises, header } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Carousel from "react-bootstrap/Carousel";

const Services = ({ language }) => {
  const [serviceData, setServiceData] = useState(services.english);
  const [promiseData, setPromiseData] = useState(promises.english);
  const [headerText, setHeaderText] = useState(header.english);

  useEffect(
    () => {
      if (language === "danish") {
        setServiceData(services.danish);
        setPromiseData(promises.danish);
        setHeaderText(header.danish);
      } else if (language === "polish") {
        setServiceData(services.polish);
        setHeaderText(promises.polish);
        setHeaderText(header.polish);
      } else {
        setServiceData(services.english);
        setPromiseData(promises.english);
        setHeaderText(header.english);
      }
    },
    [language]
  );
  return (
    <div id="services">
      <h3>
        {headerText}
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
