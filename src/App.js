import React, {useState} from 'react';
import "./stylesheet/App/App.scss";
import "./stylesheet/Header/Header.scss";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer"; 
import AboutMe from "./components/AboutMe";
import { List, ListItem } from "@mui/material"; 
import polishFlag from "./images/pl-flag.png";
import britishFlag from "./images/gb-flag.png";
import danishFlag from "./images/dk-flag.png";
import { workTitle } from "./home-data";


function App() {

  const [currentLanguage, setCurrentLanguage] = useState('english');


  const changeLanguage = (e) => {
    setCurrentLanguage(e.target.name);    
  };


  return (
    <>   
    <nav id="navbar" className="navbar nav-mobile">
    <List className="languages"> 
        <ListItem>
      <img onClick={changeLanguage} src={polishFlag} alt="polish-flag" name="polish" />
    </ListItem>
    <ListItem>
      <img onClick={changeLanguage} src={britishFlag} alt="british-flag" name="english" />
    </ListItem>
    <ListItem>
      <img onClick={changeLanguage} src={danishFlag} alt="danish-flag" name="danish" />
    </ListItem>
    
      </List>
    <Navbar language={currentLanguage} /> 
    </nav>
         

    <header id="home">
        <Home language={currentLanguage} />
        <AboutMe language={currentLanguage}/>
    </header>

    <main>
          <Services language={currentLanguage} />
          <Testimonies language={currentLanguage} />
          <Contacts language={currentLanguage} />
    </main>

    <footer>
          <Footer language={currentLanguage} />
    </footer>
      </> 
  );
}

export default App;
