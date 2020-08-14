import React from "react";
import "./component.css";
import Navbar from "./NavBar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

export default class MainPage extends React.Component {
  render() {
    return(
      <div>
      <nav className="navbar sticky-top navbar-expand-lg">
      <Navbar/>
      </nav>
      <div className = "container">
       <Intro/>
       <About/>
       <Experience/>
       <Work/>
       <Contact/>
       <Footer/>
      </div></div>
    
    );
  }
}