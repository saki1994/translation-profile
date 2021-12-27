import React, { useState, useEffect } from "react";
import "./stylesheet/navbar.scss"; 
import "./stylesheet/home.scss";
import "./stylesheet/AboutMe.scss";
import "./stylesheet/App.scss";
import "./stylesheet/services.scss";
import "./stylesheet/reviews.scss";
import "./stylesheet/contact.scss";  
import { List } from "@mui/material";
import polishFlag from "./images/pl-flag.png";
import britishFlag from "./images/gb-flag.png";
import danishFlag from "./images/dk-flag.png";
import NavbarFlag from "./components/NavbarFlag";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Footer from './components/Footer';
import * as danish from  "./DanishData";
import * as english from  "./EnglishData";
import * as polish from  "./PolishData";



export const LanguagesData = React.createContext();

const Apps = () => {
  const [languageData, setLanguageData] = useState(english)

  useEffect(() => {
    console.log(languageData.navTextData.home)
  }) 
 
 
  const checkLanguage = e => {
    const val = e.target.name; 
     
    if(val === 'danish') {
      setLanguageData(danish)
    } else if (val === 'polish') {
      setLanguageData(polish)
    } else {
      setLanguageData(english)
    }
  };

  return (
      <>
    <nav id="navbar" className="navbar nav-mobile">
      <List>
        <NavbarFlag
          changeLanguage={checkLanguage}
          flag={polishFlag}
          name={"polish"}
        />
        <NavbarFlag
          changeLanguage={checkLanguage}
          flag={britishFlag}
          name={"english"}
        />
        <NavbarFlag
          changeLanguage={checkLanguage}
          flag={danishFlag}
          name={"danish"}
        />
      </List>
      <LanguagesData.Provider value={languageData}>
        <Navbar />
      </LanguagesData.Provider>
    </nav>

    <header id="home">
    <LanguagesData.Provider value={languageData}>
        <Home />
        <Info />
      </LanguagesData.Provider>
    </header>

    <main>
    <LanguagesData.Provider value={languageData}>
        <Services /> 
        <Reviews/>
        <Contacts />
      </LanguagesData.Provider>
    </main>

    <footer>
    <LanguagesData.Provider value={languageData}>
    <Footer  />
    </LanguagesData.Provider>
          
    </footer>
    </>
  );
};

export default Apps;
