import "./stylesheet/App.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Header from './components/Header';

function App() {
  return (
    <> 
      <Navbar />  
      <Header /> 
      <AboutMe />  
    </>
  );
}

export default App;
