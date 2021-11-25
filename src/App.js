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

function App() {

  const [currentLanguage, setCurrentLanguage] = useState('english');


  const changeLanguage = (e) => {
    setCurrentLanguage(e.target.name);

    console.log(currentLanguage)
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
    <Navbar /> 
    </nav>
         

    <header id="home">
        <Home />
        <AboutMe />
    </header>

    <main>
          <Services/>
          <Testimonies />
          <Contacts />
    </main>

    <footer>
          <Footer />
    </footer>
      </> 
  );
}

export default App;
