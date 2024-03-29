import React from 'react'
import './component.css'
import Navbar from './NavBar'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import Recognition from './Recognition'
import Fade from 'react-reveal/Fade'
// import Slide from 'react-reveal/Slide';
// import Reveal from 'react-reveal/Reveal';

export default class MainPage extends React.Component {
  render() {
    return (
      <div id="home">
        <Navbar />

        <div className="container">
          <Fade bottom>
            <Intro />
          </Fade>

          <Fade bottom>
            <About />
          </Fade>

          <Fade bottom>
            <Experience />
          </Fade>

          <Fade bottom>
            <Work />
          </Fade>

          <Fade bottom>
            <Recognition />
          </Fade>

          <Fade bottom>
            <Contact />
          </Fade>

          <Fade bottom>
            <Footer />
          </Fade>
        </div>
      </div>
    )
  }
}
