import React from "react";
import "./component.css";
import Navbar from "./NavBar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


export default class MainPage extends React.Component {
  render() {
    return(
      <div>
        <Fade top>
      <nav className="navbar navbar-expand-lg">   
        <Navbar/>
      </nav>
      </Fade>
      <div className = "container">
        <Slide top>
       <Intro/>
       </Slide>
       <About/>
       <Experience/>
       <Fade left>
       <Work/>
       <Contact/>
       <Footer/>
       </Fade>
      </div>

      </div>
    
    );
  }
}