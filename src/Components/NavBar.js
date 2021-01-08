import React from "react";
import "./component.css";
import {
  Navbar, NavDropdown, Nav
} from 'react-bootstrap';
import logo from "../logo.png";
import pdf from "../resume.pdf";


export default class NavBar extends React.Component {
    render() {
        return(
          // <nav className="navbar sticky-top nav-style navbar-expand-lg">
          //     <div className="container-fluid">
          //       <div className="col-sm-6 pl-4">
          //     <a href="#logo" ><img className= "logo" id="logo" src ={logo} alt="logo" /></a>
          //     </div>
          //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          //     <span class="navbar-toggler-icon"></span>
          //     </button>
          //       <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          //           <ol className="navbar-nav me-auto pr-4 float-right ">
          //           <li className="nav-item"> <a className= "nav-link text-style mr-4" href="#about-id">1. About</a></li>
          //           <li className="nav-item"><a className= "nav-link text-style mr-4" href="#experience-id">2. Experience</a></li>
          //           <li className="nav-item"><a className= "nav-link text-style mr-4" href="#work-id">3. Work</a></li>
          //           <li className="nav-item"><a className= "nav-link text-style mr-4" href="#contact-id">4. Contact</a></li>
          //           <li className="nav-item"> <a href = {pdf} className ="nav-link text-style border border-info p-2 mr-4" target = "_blank" rel="noopener noreferrer">Resume</a></li>
          //           </ol>
          //       </div>
          //       </div>
          //       </nav>

          <Navbar
        sticky={'top'}
        collapseOnSelect
        expand="lg"
        className="nav-style"
        variant="dark"
      >
        <div className='container-fluid'>
          <Navbar.Brand>
            <div className='d-inline-flex link-format'>
              <Nav.Link href="#home">
                <div className='logo' id="logo">
                  <img width='100%' src={logo} alt='logo'/>
                </div>
              </Nav.Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href='#about-id' className="mr-4 text-style">
                <Nav.Item>About</Nav.Item>
              </Nav.Link>
              <Nav.Link href='#experience-id' className="mr-4 text-style">
                <Nav.Item>Experience</Nav.Item>
              </Nav.Link>
              <Nav.Link href='#work-id' className="mr-4 text-style">
                <Nav.Item>Work</Nav.Item>
              </Nav.Link>
              <Nav.Link href='#contact-id' className="mr-4 text-style">
                <Nav.Item>Contact</Nav.Item>
              </Nav.Link>
              <Nav.Link
                href={pdf}
                target='_blank'
                className="mr-4 text-style border"
                rel="noopener noreferrer"
              >
                <Nav.Item>
                  {/* <FontAwesomeIcon icon={faDownload} size="1x" className='mr-2'/> */}
                Resume</Nav.Item>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

          
        );
      }
}