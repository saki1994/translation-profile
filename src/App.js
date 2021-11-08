import "./stylesheet/App.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Header from './components/Header';
import Services from "./components/Services";

function App() {
  return (
    <> 
      <Navbar />  
      <Header /> 
      <main>
      <AboutMe />  
      <Services />
      </main>
    </>
  );
}

export default App;
