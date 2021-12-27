import { useContext } from "react";
import { LanguagesData } from "../App";

const Home = () => {
  const data = useContext(LanguagesData);

  return (
    <div id="header">
      <h1>
        {data.headerData.name}
      </h1>
      <h2>
        {data.headerData.workTitle}
      </h2>
    </div>
  );
};

export default Home;
