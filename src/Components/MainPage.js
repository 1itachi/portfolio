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
      <div className = "container-fluid">
        <Navbar/>
      </div>
      <div className = "container">
       <Intro/>
       <About/>
       <Experience/>
       <Work/>
       <Contact/>
       <Footer/>
      </div>
      </div>
    );
  }
}