import React from 'react'
import './component.css'
import developer from '../developer.png'
import solution from '../solution.png'
import brillioRec from '../brillio-rec.png'
import philipsRec from '../philips-rec1.png'

export default class Recognition extends React.Component {
  render() {
    return (
      <div className="margin" id="rec-id">
        <div className="col-sm-6">
          <h3 className="headings head ml-4">4. Recognition & Certification</h3>
          <hr className="horizontal" />
        </div>

        <div className="row">
         
          <div class="card col-sm-6 card-background">

              <img
                class="card-img-top card-image-book"
                src={philipsRec}
                alt="Card cap"
              />
   
            <div class="card-body">
              <h5 class="intro-start card-title ">
              Philips Recognition, 2021{' '}
              </h5>
            </div>
          </div>

          <div class="card col-sm-6 card-background">
            <a
              href="https://www.youracclaim.com/badges/a4f99f6f-9e01-43ea-90b7-a783a3be1b1f/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="card-img-top card-image-book"
                src={developer}
                alt="Card cap"
              />
            </a>
            <div class="card-body">
              <h5 class="intro-start card-title ">AWS Certified Developer</h5>
              <p class="para-style card-text mb-4"> Validity: 2020-2023</p>
            </div>
          </div>

          <div class="card col-sm-6 card-background">
            <a
              href="https://www.youracclaim.com/badges/54574a16-bc9b-41e8-8e26-93b50ca3cd59?source=linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="card-img-top card-image-book"
                src={solution}
                alt="Card cap"
              />
            </a>
            <div class="card-body">
              <h5 class="intro-start card-title ">
                AWS Certified Solution Architect
              </h5>
              <p class="para-style card-text mb-4"> Validity: 2020-2023</p>
            </div>
          </div>
        
          <div class="card col-sm-6 card-background">
              <img
                class="card-img-top card-image-book"
                src={brillioRec}
                alt="Card cap"
              />

            <div class="card-body">
              <h5 class="intro-start card-title ">
                Brillio Recognition, 2016{' '}
              </h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
