import "./stylesheet/App/App.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Header from './components/Header';
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";

function App() {
  return (
    <> 
      <Navbar />  
      <Header /> 
      <main>
      <AboutMe />  
      <Services />
      <Testimonies />
      </main>
    </>
  );
}

export default App;
