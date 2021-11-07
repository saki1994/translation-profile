import "./stylesheet/App.scss";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
    <div className="home-div">
      <Home /> 
    </div>
    <div className="about-me">
      <AboutMe /> 
    </div>
    </>
  );
}

export default App;
