import React, { useState, useEffect } from "react";
import services, { promises, header } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Carousel from "react-bootstrap/Carousel";

const Services = ({ language, boxAnimation, removeStyle }) => {
  const [serviceData, setServiceData] = useState(services.english);
  const [promiseData, setPromiseData] = useState(promises.english);
  const [headerText, setHeaderText] = useState(header.english);

  useEffect(
    () => {
      if (language === "danish") {
        setServiceData(services.danish);
        setPromiseData(promises.danish);
        setHeaderText(header.danish);
        removeStyle();
      } else if (language === "polish") {
        setServiceData(services.polish);
        setPromiseData(promises.polish);
        setHeaderText(header.polish);
        removeStyle();
      } else {
        setServiceData(services.english);
        setPromiseData(promises.english);
        setHeaderText(header.english);
        removeStyle();
      }
    },
    [language, removeStyle]
  );
  return (
    <div id="services">
      <h3 className={boxAnimation}>
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
              addAnimation={boxAnimation}
            />
          );
        })}
      </div>
      <div className={`promises ${boxAnimation}`}>
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
