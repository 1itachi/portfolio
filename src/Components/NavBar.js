import React from "react";
import "./component.css";
import logo from "../logo.png";

export default class NavBar extends React.Component {
    render() {
        return(
            <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="col-sm-6">
                <img className= "logo" src ={logo} />
                </div>
                <div className="col-sm-4 ">
                    <ol className="navbar-nav ">
                    <li className="nav-item"> <a className= "nav-link text-style mr-2" href="">1. About</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-2" href="">2. Experience</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-2" href="">3. Work</a></li>
                    <li className="nav-item"><a className= "nav-link text-style mr-2" href="">4. Contact</a></li>
                    </ol>
                </div>
                <div className="resume text-style border border-info p-2">
                <a className="text-style" href="">Resume</a>
                </div>
          </nav>
          </div>

        );
      }
}