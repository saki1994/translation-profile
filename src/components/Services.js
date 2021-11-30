import React, { useState, useEffect } from "react";
import services, { promises, header } from "../services-data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss";
import Carousel from "react-bootstrap/Carousel";

const Services = ({ language, boxAnimation, removeStyle }) => {
  const [serviceContent, setServiceContent] = useState({
    servicesData: services.english,
    promisesData: promises.english,
    headerText: header.english
  });

  //function to change serviceContent to diff language
  const changeLanguage = (service, promise, header) => {
    return setServiceContent(previous => {
      return {
        servicesData: service,
        promisesData: promise,
        headerText: header
      };
    });
  };

  useEffect(
    () => {
      if (language === "danish") {
        changeLanguage(services.danish, promises.danish, header.danish);
        removeStyle();
      } else if (language === "polish") {
        changeLanguage(services.polish, promises.polish, header.polish);
        removeStyle();
      } else {
        changeLanguage(services.english, promises.english, header.english);
        removeStyle();
      }
    },
    [language, removeStyle]
  );
  return (
    <div id="services">
      <h3 className={boxAnimation}>
        {serviceContent.headerText}
      </h3>
      <div id="services-offer">
        {serviceContent.servicesData.map((card, index) => {
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
          {serviceContent.promisesData.map((promise, index) => {
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
