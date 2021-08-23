import React from 'react'
import './component.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="footer-margin contact mb-4">
        <p className="footer">
          Built using React.Js by Deepak Kumar. Design insipired by   <a
          class="github "
          href="https://brittanychiang.com/"
          target="_blank"
          rel>Brittany
          Chiang</a>
        </p>
        <a
          class="github "
          href="https://github.com/1itachi/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
    )
  }
}
