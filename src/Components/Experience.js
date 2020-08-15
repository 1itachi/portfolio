import React from "react";
import "./component.css";
import LightSpeed from 'react-reveal/LightSpeed';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slalom: true,
            brillio: false
        };
      };


      slalomActive = ()=> {
        this.setState({
            slalom: true,
            brillio:false
        })
      }

      brillioActive=()=>{
        this.setState({
            slalom: false,
            brillio: true
        })
      }



  render() {
  
    let companyDetails;

        if(this.state.slalom){
          companyDetails= <div className= "panel-body mt-4 para-style">
        
            <h1 class="intro-start">
            <span className="para-style ml-2"> Software Engineer Intern </span>
            <span>@Slalom Build</span>
            </h1>
            <p className="para-style ml-2">June, 2020 - August, 2020</p>
            <LightSpeed left>
            <ul>
            <li>Led Cloud, DevOps, and Security effort in the team. Built BitBucket pipelines, provisioned AWS infrastructure, and integrated AppCenter.</li>
            <li>Developed Stagen Leadership mobile application using React Native, TypeScript.</li>
            <li>Developed backend API's using Serverless Architecture with AWS resources such as API Gateway, Lambda and DynamoDB.</li>
            <li>Deployed Cognito User Pool (connected with Azure AD) for Authentication and secured all backend API's with Cognito Authorization.</li>
            <li>Participated in Backlog refinement, Sprint planning, and retrospective.</li>
            <li>The app will increase the ease of learning and customer involvement.</li>
            </ul>
            </LightSpeed>
            </div>;
        } else{
          companyDetails= <div className= "mt-4 para-style"> 
          
          <h1 class="intro-start">
            <span className="para-style ml-2">Software Engineer </span>
            <span>@Brillio</span>
            </h1>
            <p className="para-style ml-2">August, 2016 - August, 2019</p>
            <LightSpeed left>
          <ul>
            <li>Built a mechanism to send notifications on change of an attribute of a property listing, which helped stakeholders to make more informed decisions on a property,
               resulting in a 15% increase in returning customer base. </li>
            <li>Achieved 100% unit test coverage by following test-driven development using Chai Mocha. 
              Followed the agile software development process and contributed to sprint planning and retrospective.</li>
            <li>Implemented application by migrating Python server-based code to serverless code using Nodejs and AWS, which increased the response time of application by 20%.</li>
            <li>Oversaw all aspects of backend development, redesigned multiple web pages, and guided new hires.</li>
            </ul>
            </LightSpeed>
          </div>;
        }


    return(
        <div className="row margin" id="experience-id">
        <div className="col-sm-6">
        <h3 className="headings head ml-4">2. Where I've Worked</h3> 
        <hr className="horizontal"/>
        <button className="button-style border border-info active p-2 mr-2" onClick={this.slalomActive}>Slalom Build</button>
        <button className="button-style border border-info p-2 mr-2" onClick={this.brillioActive}>Brillio</button>
        </div>
        {companyDetails}    
      </div>
    );
  }
}