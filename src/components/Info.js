import { useContext } from "react";
import { LanguagesData } from "../App";
import profile from "../images/profile.png";
import profile2 from "../images/profile2.jpg";
import Carousel from "react-bootstrap/Carousel";

const Info = () => {
  const data = useContext(LanguagesData);

  return (
    <div id="about-me">
      <h3>
        {data.aboutData.header}
      </h3>
      <div className="profile-info">
        <p>
          <span>{data.aboutData.name}: </span> Deniz Atici
        </p>
        <p>
          <span>
            {data.aboutData.location[0]}: {" "}
          </span>
          {data.aboutData.location[1]}
        </p>
      </div>
      <p className="description">
        {data.aboutData.description}
      </p>
    </div>
  );
};

export default Info;
