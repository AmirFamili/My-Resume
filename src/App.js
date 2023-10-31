import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ShowLogo from "./components/ShowLogo";
import Footer from "./components/Footer";
import FabBtn from "./components/FabBtn";
import './styles/App.scss';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <div id="after-home" className="bg-white" >
        <ShowLogo />
        <AboutMe />
        <Projects/>
      </div>
      <Footer/>
      <FabBtn/>
    </div>
  );
}

export default App;
