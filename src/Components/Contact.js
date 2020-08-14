import React from "react";
import "./component.css";

export default class Contact extends React.Component {
    render() {
        return(
            <div className="margin contact">
                <h1 className="intro-start head">4. What's Next?</h1>
                <h2 className="intro-name">Get In Touch</h2>

                <p className="para-style mb-4"> I am currently looking for Spring 2021 Internship/Coop or Fulltime starting May 2021. My inbox is always open, even for just a 'Hi'.</p>
                <div className="test mt-5 mb-5 p-0 contact">
                <a href = "mailto:kumar.de@northeastern.edu" className ="text-style border border-info center p-2 mb-2">Say Hello</a>
                </div>

                <div className="contact">
                <a class="github" href="https://github.com/itachi1994" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <a class="github ml-4" href="https://www.linkedin.com/in/deepak-kumar-bb1810115/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                </div>


            </div>
        );
    }
}    