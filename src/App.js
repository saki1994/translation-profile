import "./stylesheet/App/App.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Header from './components/Header';
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer"; 

function App() {
  return (
    <> 
      <Navbar />  
      <Header /> 
      <main>
      <AboutMe />  
      <Services />
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
