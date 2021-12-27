import { useContext } from "react";
import { LanguagesData } from "../App";
import ServiceCard from "./ServiceCard";
import Carousel from "react-bootstrap/Carousel";

const Services = () => {
  const data = useContext(LanguagesData);

  return (
    <div id="services">
      <h3>
        {data.servicesTitle}
      </h3>
      <div id="services-offer">
        {data.services.map((card, index) => {
          return (
            <ServiceCard
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
          {data.promises.map((promise, index) => {
            return (
              <Carousel.Item key={index}>
                <ServiceCard photo={promise.img} body={promise.title} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
