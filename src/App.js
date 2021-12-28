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
import wave from "./images/wave.svg";



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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ded9c4"
          fill-opacity="1"
          d="M0,160L10,138.7C20,117,40,75,60,80C80,85,100,139,120,160C140,181,160,171,180,154.7C200,139,220,117,240,122.7C260,128,280,160,300,160C320,160,340,128,360,112C380,96,400,96,420,101.3C440,107,460,117,480,106.7C500,96,520,64,540,90.7C560,117,580,203,600,213.3C620,224,640,160,660,160C680,160,700,224,720,213.3C740,203,760,117,780,74.7C800,32,820,32,840,42.7C860,53,880,75,900,112C920,149,940,203,960,192C980,181,1000,107,1020,74.7C1040,43,1060,53,1080,48C1100,43,1120,21,1140,32C1160,43,1180,85,1200,112C1220,139,1240,149,1260,149.3C1280,149,1300,139,1320,133.3C1340,128,1360,128,1380,117.3C1400,107,1420,85,1430,74.7L1440,64L1440,0L1430,0C1420,0,1400,0,1380,0C1360,0,1340,0,1320,0C1300,0,1280,0,1260,0C1240,0,1220,0,1200,0C1180,0,1160,0,1140,0C1120,0,1100,0,1080,0C1060,0,1040,0,1020,0C1000,0,980,0,960,0C940,0,920,0,900,0C880,0,860,0,840,0C820,0,800,0,780,0C760,0,740,0,720,0C700,0,680,0,660,0C640,0,620,0,600,0C580,0,560,0,540,0C520,0,500,0,480,0C460,0,440,0,420,0C400,0,380,0,360,0C340,0,320,0,300,0C280,0,260,0,240,0C220,0,200,0,180,0C160,0,140,0,120,0C100,0,80,0,60,0C40,0,20,0,10,0L0,0Z"
        />
      </svg>
        <Services /> 
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ded9c4" fill-opacity="1" d="M0,160L10,138.7C20,117,40,75,60,80C80,85,100,139,120,160C140,181,160,171,180,154.7C200,139,220,117,240,122.7C260,128,280,160,300,160C320,160,340,128,360,112C380,96,400,96,420,101.3C440,107,460,117,480,106.7C500,96,520,64,540,90.7C560,117,580,203,600,213.3C620,224,640,160,660,160C680,160,700,224,720,213.3C740,203,760,117,780,74.7C800,32,820,32,840,42.7C860,53,880,75,900,112C920,149,940,203,960,192C980,181,1000,107,1020,74.7C1040,43,1060,53,1080,48C1100,43,1120,21,1140,32C1160,43,1180,85,1200,112C1220,139,1240,149,1260,149.3C1280,149,1300,139,1320,133.3C1340,128,1360,128,1380,117.3C1400,107,1420,85,1430,74.7L1440,64L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path></svg>

        <Reviews/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ded9c4"
          fill-opacity="1"
          d="M0,160L10,138.7C20,117,40,75,60,80C80,85,100,139,120,160C140,181,160,171,180,154.7C200,139,220,117,240,122.7C260,128,280,160,300,160C320,160,340,128,360,112C380,96,400,96,420,101.3C440,107,460,117,480,106.7C500,96,520,64,540,90.7C560,117,580,203,600,213.3C620,224,640,160,660,160C680,160,700,224,720,213.3C740,203,760,117,780,74.7C800,32,820,32,840,42.7C860,53,880,75,900,112C920,149,940,203,960,192C980,181,1000,107,1020,74.7C1040,43,1060,53,1080,48C1100,43,1120,21,1140,32C1160,43,1180,85,1200,112C1220,139,1240,149,1260,149.3C1280,149,1300,139,1320,133.3C1340,128,1360,128,1380,117.3C1400,107,1420,85,1430,74.7L1440,64L1440,0L1430,0C1420,0,1400,0,1380,0C1360,0,1340,0,1320,0C1300,0,1280,0,1260,0C1240,0,1220,0,1200,0C1180,0,1160,0,1140,0C1120,0,1100,0,1080,0C1060,0,1040,0,1020,0C1000,0,980,0,960,0C940,0,920,0,900,0C880,0,860,0,840,0C820,0,800,0,780,0C760,0,740,0,720,0C700,0,680,0,660,0C640,0,620,0,600,0C580,0,560,0,540,0C520,0,500,0,480,0C460,0,440,0,420,0C400,0,380,0,360,0C340,0,320,0,300,0C280,0,260,0,240,0C220,0,200,0,180,0C160,0,140,0,120,0C100,0,80,0,60,0C40,0,20,0,10,0L0,0Z"
        />
      </svg>
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
