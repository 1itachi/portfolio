import React from 'react'
import './component.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="margin contact " id="contact-id">
        <h1 className="intro-start head">4. What's Next?</h1>
        <h2 className="intro-name">Get In Touch</h2>

        <p className="para-style mb-4">
          {' '}
          I am looking for fulltime starting Jan 2022. Looking forward to
          connecting with you! <p>&#128512;</p>
        </p>

        <div className="mt-5 mb-5 p-0 contact">
          <a
            href="mailto:kumar.de@northeastern.edu"
            className="text-style border border-info center p-2 mb-2"
          >
            Say Hello
          </a>
        </div>

        <div className="contact">
          <a
            class="github"
            href="https://github.com/itachi1994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            class="github ml-4"
            href="https://www.linkedin.com/in/deepak-kumar-bb1810115/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin head fa-2x"></i>
          </a>
        </div>
        {/* <iframe src="https://www.linkedin.com/in/deepak-kumar-bb1810115/" height="1" width="1" frameBorder="0"></iframe> */}
      </div>
    )
  }
}
