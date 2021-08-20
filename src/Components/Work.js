import React from 'react'
import './component.css'
import baboon from '../mosaicBaboon.jpg'
import bookbar from '../bookbar.png'
import crackitup from '../crackitup.png'
import plagewatch from '../plagewatch.png'

export default class Work extends React.Component {
  render() {
    return (
      <div className="margin" id="work-id">
        <div className="col-sm-6">
          <h3 className="headings head ml-4">3. Personal Projects</h3>
          <hr className="horizontal" />
        </div>

        <div className="row">
          <div class="card col-sm-6 card-background">
            <img class="card-img-top card-image" src={baboon} alt="Card cap" />
            <div class="card-body">
              <h5 class="intro-start card-title">
                Image Processing{' '}
                <a
                  class="github"
                  href="http://github.com/1itachi/ImageProcessingApplication/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github "></i>
                </a>
              </h5>
              <p class="para-style card-text">
                Built an Image processing application to apply six filters on an
                image such as greyscale, sepia, mosaic, dithering, blur, and
                sharpen. Made use of MVC architecture, SOLID principles, and
                design patterns.
              </p>
              <p className="para-style">
                Note: This repo is private, drop a request to make it public.
              </p>
            </div>
          </div>

          <div class="card col-sm-6 card-background">
            <a
              href="https://plagewatch.netlify.app/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="card-img-top card-image-book"
                src={plagewatch}
                alt="Card cap"
              />
            </a>
            <div class="card-body">
              <h5 class="intro-start card-title ">
                PlageWatch{' '}
                <a
                  class="github"
                  href="https://github.com/1itachi/plageWatch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </h5>
              <p class="para-style card-text mb-4">
                Built a web app to detect plagiarism on Javascript files.
                Supports single file and multiple files in zip format.
              </p>
              <p className="para-style">
                Note: This repo is private, drop a request to make it public.
              </p>
            </div>
          </div>

          <div class="card col-sm-6 card-background">
              <img
                class="card-img-top card-image-book"
                src={bookbar}
                alt="Card cap"
              />
            <div class="card-body">
              <h5 class="intro-start card-title ">
                BookBar Web App{' '}
                <a
                  class="github"
                  href="https://github.com/1itachi/BookBar-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </h5>
              <p class="para-style card-text mb-4">
                Collaborated on building a FullStack application. A user can
                register and login as either a buyer or a seller. A buyer can
                place an order on the books currently being sold by a seller. A
                seller can sell multiple books, and customize the price and
                quantity of the books he wants to sell.
              </p>
              <p class="para-style card-text mb-4"><span>&#9888;</span> Website no longer maintained!</p>
            </div>
          </div>
          <div class="card col-sm-6 card-background">
            <a
              href="https://youtu.be/QsJF6x6PHSo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="card-image-mobile"
                src={crackitup}
                alt="Card cap"
              />
            </a>
            <div class="card-body">
              <h5 class="intro-start card-title ">
                Crack-it-up{' '}
                <a
                  class="github"
                  href="https://github.com/1itachi/crack-it-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </h5>
              <p class="para-style card-text mb-4">
              Crack it up! is an Android app that enables users to acquire the skills needed to master and crack the technical interview. Users can learn important concepts, practice personalized quizzes, audio record and analyze answers to behavioral questions.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
