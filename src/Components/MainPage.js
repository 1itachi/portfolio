import React from "react";
import "./component.css";
import Navbar from "./NavBar";

export default class MainPage extends React.Component {
  render() {
    return(
      <div className = "container-fluid">
        <Navbar/>
      </div>
    );
  }
}