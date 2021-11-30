import React, {useState} from 'react';
import "./stylesheet/App/App.scss";
import "./stylesheet/Home/home.scss";
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
  const [addTextStyle, setAddTextStyle] = useState("");
  const [addBoxStyle, setAddBoxStyle] = useState("");
 
  const removeStyle = () => {
    return setTimeout(function() {
      setAddTextStyle("");
      setAddBoxStyle("");
    }, 1000);
  };

  const changeLanguage = (e) => {
    setCurrentLanguage(e.target.name);    
    setAddTextStyle("text-animation");
    setAddBoxStyle("box-animation")
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
    <Navbar language={currentLanguage} boxAnimation={addBoxStyle} removeStyle={removeStyle}  /> 
    </nav>
         

    <header id="home">
        <Home language={currentLanguage} newClassStyle={addTextStyle} removeStyle={removeStyle} />
        <AboutMe language={currentLanguage}  boxAnimation={addBoxStyle} removeStyle={removeStyle} />
    </header>

    <main>
          <Services language={currentLanguage}   boxAnimation={addBoxStyle} removeStyle={removeStyle}  />
          <Testimonies language={currentLanguage}  boxAnimation={addBoxStyle} removeStyle={removeStyle} />
          <Contacts language={currentLanguage}   boxAnimation={addBoxStyle} removeStyle={removeStyle}/>
    </main>

    <footer>
          <Footer language={currentLanguage} addTextStyle={addTextStyle} removeStyle={removeStyle}  />
    </footer>
      </> 
  );
}

export default App;
