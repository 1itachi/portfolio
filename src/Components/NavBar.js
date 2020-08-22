import React from "react";
import "./component.css";
import logo from "../logo.png";
import pdf from "../resume.pdf";


export default class NavBar extends React.Component {
    render() {
        return(
              <div className="container-fluid row">
                <div className="col-sm-6">
              <a href="#logo" ><img className= "logo" id="logo" src ={logo} alt="logo" /></a>
              </div>
                <div className="col-sm-6">
                    <ol className="navbar-nav ">
                    <li className="nav-item"> <a className= "nav-link text-style mr-4" href="#about-id">1. About</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-4" href="#experience-id">2. Experience</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-4" href="#work-id">3. Work</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-4" href="#contact-id">4. Contact</a></li>
                    <li className="nav-item"> <a href = {pdf} className ="nav-link text-style border border-info p-2 mr-4" target = "_blank" rel="noopener noreferrer">Resume</a></li>
                    </ol>
                </div>
                </div>
        );
      }
}