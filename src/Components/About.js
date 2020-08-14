import React from "react";
import "./component.css";
import photo from '../photo.jpg';


export default class About extends React.Component {
  render() {
    return(
        <div className="row margin" id="about-id">
        <div className="col-sm-6">
        <h3 className="headings head ml-2" >1. About Me</h3> 
        <hr className="horizontal"/>
        <div>
        <p className="para-style">Shortly after my Bachelors from Malnad College of Engineering (VTU),
        I joined <a className="anchor-style" href="https://www.brillio.com/">Brillio</a> as an Engineer, where I worked on multiple projects and POCs. 
        I started with SAP ABAP, to build ERP solutions. Slowly, I switched to modern technologies like Node.Js and AWS.
        At the time of leaving the company, I held the position as a Senior Engineer.</p>
        </div>
        <div>
        <p className="para-style">
        After getting some experience in the industry,
        I joined <a className="anchor-style" href="https://www.khoury.northeastern.edu/">Northeastern University</a> to pursue my Master of Science in Computer Science. 
        As part of my summer internship, I joined <a className="anchor-style" href="https://www.slalombuild.com/">Slalom Build</a> as a Software Engineer Intern, 
        where I worked with a team of interns to build a mobile application using AWS, Bit Bucket pipelines,
        App Center, Node.js, TypeScript and React Native.</p>
        </div>
        <div>
            <div>
            <p className="para-style">
                Technologies I am working on:
                <div className="mt-2">
                <label className="label-style border border-info p-2 mr-2">AWS</label>
                <label className="label-style border border-info p-2 mr-2">JavaScript</label>
                <label className="label-style border border-info p-2 mr-2">Java</label>
                <label className="label-style border border-info p-2 mr-2">Node.Js</label>
                <label className="label-style border border-info p-2 mr-2">React.Js</label>
                <label className="label-style border border-info p-2 mr-2">React Native</label>
                <label className="label-style border border-info p-2 mr-2">SQL</label>
                <label className="label-style border border-info p-2 mr-2">NoSQL</label>
                <label className="label-style border border-info p-2 mr-2">TypeScript</label>
                <label className="label-style border border-info p-2 mr-2">HTML</label>
                <label className="label-style border border-info p-2 mr-2">CSS</label>
                <label className="label-style border border-info p-2 mr-2">JQuery</label>
                <label className="label-style border border-info p-2 mr-2">Git</label>
                <label className="label-style border border-info p-2 mr-2">SVN</label>
                </div>
            </p>
            </div>
            </div>

        </div>
      
        <div className="col-sm-6 center image-style">
        <a href = "https://www.linkedin.com/in/deepak-kumar-bb1810115/">
        <img className="photo" src={photo} alt="Avatar"></img>
        </a>
        </div>
      </div>
    );
  }
}