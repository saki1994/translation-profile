import React, { useState } from "react";
import "./stylesheet/navbar.scss"; 
import "./stylesheet/home.scss";
import "./stylesheet/AboutMe.scss";
import "./stylesheet/App.scss";
import "./stylesheet/services.scss";
import "./stylesheet/reviews.scss";
import "./stylesheet/contact.scss";
import  {aboutData, headerData, navTextData, servicesTitle, services, 
    promises, reviewTitle, reviews, contactTitle,
    contact,
    phoneNum,
    copyright } from "./languagesData";
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

export const LanguagesData = React.createContext();

const Apps = () => {
  const [currentTextLanguage, setCurrentTextLanguage] = useState({
    aboutData: aboutData.english,
    headerData: headerData.english,
    navTextData: navTextData.english,
    servicesTitle: servicesTitle.english,
    services: services.english,
    promises: promises.english,
    reviewTitle: reviewTitle.english,
    reviews: reviews.english,
    contactTitle: contactTitle.english,
    contact: contact.english,
    phoneNum: phoneNum.english,
    copyright: copyright.english
  });

  const changeTextLanguage = (val) => {
      return setCurrentTextLanguage( () => ({
          aboutData: aboutData[val],
          headerData: headerData[val],
          navTextData: navTextData[val],
          servicesTitle: servicesTitle[val],
          services: services[val],
          promises: promises[val],
          reviewTitle: reviewTitle[val],
          reviews: reviews[val],
          contactTitle: contactTitle[val],
          contact: contact[val],
          phoneNum: phoneNum[val],
          copyright: copyright[val]
      }));
      
  }
 
  const checkLanguage = e => {
    const val = e.target.name; 
    changeTextLanguage(val)
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
      <LanguagesData.Provider value={currentTextLanguage}>
        <Navbar />
      </LanguagesData.Provider>
    </nav>

    <header id="home">
    <LanguagesData.Provider value={currentTextLanguage}>
        <Home />
        <Info />
      </LanguagesData.Provider>
    </header>

    <main>
    <LanguagesData.Provider value={currentTextLanguage}>
        <Services /> 
        <Reviews/>
        <Contacts />
      </LanguagesData.Provider>
    </main>

    <footer>
    <LanguagesData.Provider value={currentTextLanguage}>
    <Footer  />
    </LanguagesData.Provider>
          
    </footer>
    </>
  );
};

export default Apps;
