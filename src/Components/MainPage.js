import React from "react";
import "./component.css";
import Navbar from "./NavBar";
import Intro from "./Intro";

export default class MainPage extends React.Component {
  render() {
    return(
      <div>
      <div className = "container-fluid">
        <Navbar/>
      </div>
      <div className = "container">
       <Intro/>
      </div>
      </div>
    );
  }
}