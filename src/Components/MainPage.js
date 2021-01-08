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
// import Slide from 'react-reveal/Slide';
// import Reveal from 'react-reveal/Reveal';



export default class MainPage extends React.Component {
  render() {
    return(
      <div>

      <Fade bottom>  
          <nav className="navbar sticky-top nav-style navbar-expand-lg">   
          <Navbar/>
          </nav>
      </Fade>

      <div className = "container">
      <Fade bottom>  
       <Intro/>
       </Fade>
   
       <Fade bottom> 
       <About/>
       </Fade>

       <Fade bottom> 
       <Experience/>
       </Fade>

       <Fade bottom>
       <Work/>
       </Fade>

       <Fade bottom>
       <Contact/>
       </Fade>

       <Fade bottom>
       <Footer/>
       </Fade>
      </div>
      </div>
    );
  }
}