import React from "react";
import "../stylesheet/home.scss";   
import "../stylesheet/Media700px.scss"; 
import polishFlag from "../images/pl-flag.png";
import britishFlag from "../images/gb-flag.png";
import danishFlag from "../images/dk-flag.png";
const Home = () => { 
 
  return (
    <>
    <nav className="mobile-size">
      <ul className="languages">
        <li><img src={polishFlag} alt="polish-flag"/></li>
        <li><img src={britishFlag} alt="british-flag"/></li>
        <li><img src={danishFlag} alt="danish-flag"/></li>
      </ul> 
        <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact </li>
      </ul> 
    </nav>
    <header>
      <h1>Hi, I'm Deniz</h1> 
      <h2>your translator...</h2>
    </header>
  
  </>);
};

export default Home;
