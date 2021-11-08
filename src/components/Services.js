import React from "react";
import services from "../data";
import Service from "./services/Service";
import "../stylesheet/Services/Services.scss"

const Services = () => {
  return (
    <div className="services">
      <h3>Languages</h3>
      <div className="services-offer">
        {
            services.english.map((card, index) => {
                return (
                    <>
                 <Service photo={card.img} title={card.title} body={card.text} />
                    </>
                )
            })
        }
      </div>
    </div>
  );
};

export default Services;
