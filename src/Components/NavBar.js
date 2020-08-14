import React from "react";
import "./component.css";
import logo from "../logo.png";
import pdf from "../resume.pdf"

export default class NavBar extends React.Component {
    render() {
        return(
            <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="col-sm-6">
              <img className= "logo" src ={logo} /> 
              </div>
                <div className="col-sm-6">
                    <ol className="navbar-nav ">
                    <li className="nav-item"> <a className= "nav-link text-style mr-4" href="">1. About</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-4" href="">2. Experience</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-4" href="">3. Work</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-4" href="">4. Contact</a></li>
                    <li className="nav-item"> <a href = {pdf} className ="nav-link text-style border border-info p-2 mr-4" target = "_blank" rel="noreferrer">Resume</a></li>
                    </ol>
                </div>
          </nav>
          </div>

        );
      }
}