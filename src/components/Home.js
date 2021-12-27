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
      <p>
        Need your work right and deliver on time? You came to the good GIG! I
        will translate any Document into Danish and Polish language and vice
        versa. I have been working as a translator for over 10 years now and
        Every translation proofread before delivery. I will give you fast and
        reliable translation every time.
      </p>
    </div>
  );
};

export default Home;
