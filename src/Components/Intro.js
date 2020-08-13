import React from "react";
import "./component.css";

export default class Intro extends React.Component {
    render() {
        return(
            <div>
                <h1 className="intro-start">Hi, my name is</h1>
                <h2 className="intro-name">Deepak Kumar.</h2>
                <h3 className="intro-do">Full Stack Developer.</h3>
                <div className="col-sm-6 p-0 intro-detail">
                <p1>I am a Master of Science in Computer Science (MSCS) candidate at Northeastern University, Boston. I enjoy building reactive applications.
                    I am also a cloud person, AWS Developer & Solution Architect Associate certified.
                </p1>
                </div>
                <div className="mt-4">   
                <a href = "mailto:kumar.de@northeastern.edu" className ="text-style border border-info p-2">Get in touch</a>
                </div>
               
            </div>
        );
    }
}    