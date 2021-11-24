import "./stylesheet/App/App.scss";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer"; 
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>  
          <Navbar /> 

        <header>
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
